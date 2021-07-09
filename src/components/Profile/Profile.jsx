import React from "react";
import classes from  './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText} //прокинули данные в текстовое поле из стейта
                     updateNewPostText={props.updateNewPostText}


                     addPost={props.addPost}/>

        </div>

    )
}
export default Profile;