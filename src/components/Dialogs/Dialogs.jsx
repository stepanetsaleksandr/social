import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let newMessageElement = React.createRef();
    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text)
    }

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.messages.map(m => <Message message={m.message} id={m.id}/>)

    let onMessageChange = () => {    // 1. Создаем функцию onMessageChenge и вешаем на textarea (Dialogs.jsx)
        props.updateNewMessageText(); // 7. Пропс из App.js используем для обновления сообщения при изменении
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.items}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea ref={newMessageElement} onChange={onMessageChange}/> {/* 2. Вешаем onMessageChenge на textarea*/}
                <button onClick={addMessage}>AddMessage</button>
            </div>
        </div>
    )
}

export default Dialogs;