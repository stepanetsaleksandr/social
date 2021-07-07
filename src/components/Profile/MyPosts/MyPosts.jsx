import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/> )

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