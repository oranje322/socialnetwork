import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validate/validate";
import {TextArea} from "../../common/FormControls/FormControls";

let maxLength100 = maxLengthCreator(100)

const MyPosts = (props) => {

    let postsElements =
        props.posts.map( p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

    const addPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <AddPostFormRedux onSubmit={addPost}/>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

const AddPostForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={TextArea} name={'newPostText'} placeholder={'Enter your message'} validate={[required, maxLength100]}/>
            <div><button>Send</button></div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddPostForm)

export default MyPosts;