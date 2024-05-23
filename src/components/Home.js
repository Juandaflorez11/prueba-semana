import React, { useEffect, useState } from 'react';
import { fetchPosts, fetchTags } from '../services/api';
import { Link } from 'react-router-dom';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [tags, setTags] = useState([]);
    const [selectedTag, setSelectedTag] = useState('');

    useEffect(() => {
        fetchTags().then(response => setTags(response.data));
        fetchPosts().then(response => setPosts(response.data.data));
    }, []);

    const handleTagClick = (tag) => {
        setSelectedTag(tag);
        fetchPostsByTag(tag);
    };

    const fetchPostsByTag = (tag) => {
        // Implementar la lógica para filtrar posts por tag
    };

    return (
        <div>
            <h1>Blog Posts</h1>
            <div>
                <h2>Tags</h2>
                <ul>
                    {tags.map(tag => (
                        <li key={tag} onClick={() => handleTagClick(tag)}>
                            {tag}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                {posts.map(post => (
                    <div key={post.id}>
                        <Link to={`/post/${post.id}`}>
                            <h3>{post.title}</h3>
                            <img src={post.image} alt={post.title} />
                            <p>{post.text}</p>
                            <p>Tags: {post.tags.join(', ')}</p>
                            <p>Author: {post.owner.firstName} {post.owner.lastName}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
