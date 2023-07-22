import './styles/app.scss';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1><a href='/' className='link-light'>My Songs Color</a></h1>
      <Outlet />
      <hr></hr>
      <footer>
        Made by <a href='https://www.camilaguerra.vercel.app/' className='link-secondary'>Camila</a>.
        <br></br>
        <a href='https://cafecito.app/camilitis' className='link-secondary'>Cafecito</a> | <a href='https://ko-fi.com/camilitis' className='link-secondary'>Ko-Fi</a>
      </footer>
    </div>
  );
}

export default App;