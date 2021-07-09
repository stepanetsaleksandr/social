import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, updateNewMessageText, updateNewPostText} from "./redux/state"; //4. Импортируем updateNewMessageText
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} updateNewMessageText={updateNewMessageText}/> {/* 5. Передаем в пропсах updateNewMessageText в App.js*/}
        </BrowserRouter>,
        document.getElementById('root')
    );
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
