import classes from './Post.module.css';

function Post({author, body}) {
    props.author
    props.body
    return (
        <div className='post'>
            <p className={classes.author}>{props.author}</p>
            <p className={classes}>{props.body}</p>
        </div>
    )
}

export default Post;