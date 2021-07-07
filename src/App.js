import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>

                    <Route path='/dialog' render={() => <Dialogs messages={props.messages} dialogs={props.dialogs}/>}/>
                    <Route path='/profile' render={() => <Profile posts={props.posts}/>}/>


                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
