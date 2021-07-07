import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

    let posts = [
        {id: 1, message: 'Hi, How are you?', likesCount: 12},
        {id: 2, message: 'Hello, How are you?', likesCount: 13},
        {id: 3, message: 'How are you? How are you?', likesCount: 1}
    ]

let postsElements = posts.map( p => <Post message={p.message} likesCount={p.likesCount}/> )

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>

                <div className={classes.posts}>
                    {postsElements}

                </div>

            </div>
        </div>

    )
}
export default MyPosts;