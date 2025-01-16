import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import './App.css';

const App = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setPosts(response.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    const addPost = (newPost) => {
        setPosts((prevPosts) => [newPost, ...prevPosts]);
    };

    return (
        <div>
            <h1>Post Management App</h1>
            <PostForm addPost={addPost} />
            <h2 className="recent-post">Recent Posts</h2>
            <PostList posts={posts} />
        </div>
    );
};

export default App;