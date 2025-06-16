import { useState } from 'react';

import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';

function PostsList() {
    return (
        <>
            <Modal>
                <NewPost
                    onBodyChange={bodyChangeHandler}
                    onAuthorChange={authorChangeHandler} 
                />
            </Modal>
            <ul className={classes.posts}>
                <Post author="Maximilian" body="React.js course is awesome!" />
                <Post author="Manuel" body="Check out the full course" />                
            </ul>
        </>
        
    )
}