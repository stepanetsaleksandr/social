import React from "react";
import classes from  './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return (
        <div>
            <div> <img src='https://landlord.ua/wp-content/uploads/2020/07/CL-20.026.001-1-920x418.jpg'/></div>
            <div>ava+description</div>

        <MyPosts/>
        </div>
    )
}
export default Profile;