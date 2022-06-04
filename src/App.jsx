import './styles/app.scss';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Your Spotify Pantone</h1>
      <Outlet />
      <p>Get your Pantone color based on the album covers of your Spotify charts.</p>

      <hr></hr>

      <footer>
        Made by <a href='https://www.instagram.com/camipalo' className='link-secondary'>Camila</a>.
        <br></br>
        <a href='https://cafecito.app/camilitis' className='link-secondary'>Cafecito</a> | <a href='https://ko-fi.com/camilitis' className='link-secondary'>Ko-Fi</a>
      </footer>
    </div>
  );
}

export default App;