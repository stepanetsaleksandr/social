import React from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = '/dialog/' + props.id;

    return (
        <div className={classes.item}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.item}>{props.message}</div>
    )
}

const Dialogs = (props) => {

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

    let dialogsElements = dialogs.map(d=> <DialogItem name={d.name} id={d.id}/>);
    let  messagesElements = messages.map(m => <Message message={m.message} id={m.id}/>)


    return (
        <div className={classes.dialogs}>
            <div className={classes.items}>
                {dialogsElements}

            </div>
            <div className={classes.messages}>
                {messagesElements}



            </div>
        </div>
    )
}

export default Dialogs;