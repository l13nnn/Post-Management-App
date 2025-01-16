import axios from 'axios';
import React, { useState } from 'react';

const PostForm = ({ addPost }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: title,
            body: body
        })
        .then((res) => {
            console.log(res)
            const newPost = { title, body };
            addPost(newPost);
            setTitle('');
            setBody('');
        })
        .catch((err) => {
            console.log(err)
        })
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Post Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea placeholder="Post Body" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
            <button type="submit">Create Post</button>
        </form>
    );
};

export default PostForm;