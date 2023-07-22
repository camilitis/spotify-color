import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './routes/Home';
import WebApp from './routes/WebApp';
import LastFM from './routes/LastFM';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='webapp' element={<WebApp />} />
          <Route path='lastfm' element={<LastFM />} />
          <Route path='*' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

reportWebVitals()