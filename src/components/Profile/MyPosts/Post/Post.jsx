import React from "react";
import classes from './Post.module.css';


const Post = (props) => {

    return (

          <div className={classes.item}>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzpb1_-V-kI_j2as028I0ZyVuuytgzNmzzFA&usqp=CAU'/>
              {props.message}
          <div>
              <span>likes {props.like}</span>
          </div>

          </div>


    )
}
export default Post;