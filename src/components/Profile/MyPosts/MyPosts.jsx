import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
                <div className={classes.posts}>
                   <Post message='Hi, how are you?' like='15'/>
                    <Post message='It`s my first post' like='20'/>
                    <Post/>

                </div>

            </div>
        </div>

    )
}
export default MyPosts;