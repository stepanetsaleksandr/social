import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: 'Hi, How are you?', likesCount: 12},
    {id: 2, message: 'Hello, How are you?', likesCount: 13},
    {id: 3, message: 'How are you? How are you?', likesCount: 1}
]

let dialogs = [
    {id: 1, name: 'Anton'},
    {id: 2, name: 'Sveta'},
    {id: 3, name: 'Valera'},
    {id: 2, name: 'Vika'},
    {id: 2, name: 'Boris'}
]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 1, message: 'Hello'},
    {id: 1, message: 'How are you?'}

]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
