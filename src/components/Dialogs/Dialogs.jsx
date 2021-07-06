import React from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = '/dialog/'+props.id;

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
    return (
        <div className={classes.dialogs}>
            <div className={classes.items}>

               <DialogItem name='Anton' id='1'/>
                <DialogItem name='Sveta' id='2'/>
                <DialogItem name='Valera' id='3'/>
                <DialogItem name='Vika' id='4'/>
                <DialogItem name='Boris' id='5'/>



            </div>
            <div className={classes.messages}>
                <Message message='Hi'/>
                <Message message='How are you'/>
                <Message message='Yo'/>


            </div>
        </div>
    )
}

export default Dialogs;