import logo from './logo.svg';
import './App.css';
import Header from "./Header";

const App = () => {
  return (
    <div className='app-wrapper'>
    <header className='header'>
      <img src='./logo192.png'/>
    </header>
      <nav className='nav'>
        <div>Profile</div>
        <div>Messages</div>
        <div>Music</div>
      </nav>
      <div className='content'>
        Main content
      </div>
    </div>
  );
}

export default App;
