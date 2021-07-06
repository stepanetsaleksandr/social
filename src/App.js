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
        <div><a>Profile</a></div>
        <div><a>Messages</a></div>
        <div><a>News</a></div>
        <div><a>Music</a></div>
        <div><a>Settings</a></div>
      </nav>
      <div className='content'>
        <div> <img src='https://landlord.ua/wp-content/uploads/2020/07/CL-20.026.001-1-920x418.jpg'/></div>
        <div>ava+description</div>
        <div>
          My posts
          <div>
            <div>Post 1 </div>
            <div>Post 2 </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
