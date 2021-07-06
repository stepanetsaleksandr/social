import React from "react";
import classes from "./Dialogs.module.css";

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.items}>
                <div className={classes.item}>
                    Andrey
                </div>
                <div className={classes.item}>
                    Valera
                </div>
                <div className={classes.item}>
                    Sveta
                </div>

            </div>
            <div className={classes.messages}>
                <div className={classes.item}>Hi</div>
                <div className={classes.item}>Hello</div>
                <div className={classes.item}>YoYo</div>

            </div>
        </div>
    )
}

export default Dialogs;