import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/> )

    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    };

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>

                <div className={classes.posts}>
                    {postsElements}

                </div>

            </div>
        </div>

    )
}
export default MyPosts;