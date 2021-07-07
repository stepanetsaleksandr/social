import React from "react";
import classes from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = '/dialog/' + props.id;

    return (
        <div className={classes.item}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )

}

export default DialogItem;