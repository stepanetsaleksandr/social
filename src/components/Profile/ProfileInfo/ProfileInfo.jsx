import React from "react";
import classes from  './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
        <div>
            <div> <img src='https://landlord.ua/wp-content/uploads/2020/07/CL-20.026.001-1-920x418.jpg'/></div>
            <div className={classes.descriptionBlock}>ava+description</div>


        </div>
        </div>
    )
}
export default ProfileInfo;