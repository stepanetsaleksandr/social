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

                    <Route path='/dialog' render={() => <Dialogs messages={props.state.messagesPage.messages}
                                                                 dialogs={props.state.messagesPage.dialogs}
                                                                 updateNewMessageText={props.updateNewMessageText} // 6. Передаем дальше в пропсах в Dialogs.jsx
                    />}/>
                    <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage}
                                                                  addPost={props.addPost}
                                                                  updateNewPostText={props.updateNewPostText}


                    />}/>


                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
