import React, { useEffect, useState } from 'react';
import { fetchPosts, fetchTags } from '../services/api';
import { Link } from 'react-router-dom';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [searched, setSearched] = useState([]);
    const [tags, setTags] = useState([]);
    const [selectedTag, setSelectedTag] = useState('');

    useEffect(() => {
        fetchTags().then(response => setTags(removeDuplicateTags(response.data.data)));
        fetchPosts().then(response => setPosts(removeDuplicatePosts(response.data.data)));
        fetchPosts().then(response => setSearched(removeDuplicatePosts(response.data.data)));
    }, []);

    const removeDuplicateTags = (tagNames) => {
        const uniqueTags = [];
        const tags = new Set();
        tagNames.forEach(tag => {
            if (!tags.has(tag)) {
                uniqueTags.push(tag);
                tags.add(tag);
            }
        });

        return uniqueTags;
    };

    const removeDuplicatePosts = (posts) => {
        const uniquePosts = [];
        const postIds = new Set();
        posts.forEach(post => {
            if (!postIds.has(post.id)) {
                uniquePosts.push(post);
                postIds.add(post.id);
            }
        });

        return uniquePosts;
    };

    const handleTagClick = (tag) => {
        setSelectedTag(tag);
        fetchPostsByTag(tag);
    };

    const fetchPostsByTag = (selectedTag) => {

        var temp = [];
        if (selectedTag == null || selectedTag === "") {
            temp = posts;
        }
        else {
            temp = posts.filter(post => {
                return post.tags.some(tag => selectedTag.includes(tag));
            });
        }
        setSearched(temp);
    };

    const handleTagChange = (event) => {
        const selectedTag = event.target.value;
        setSelectedTag(selectedTag);
        console.log(selectedTag);
        fetchPostsByTag(selectedTag);
    };

    return (
        <div>
            <h1>Blog Posts</h1>
            <div>
                <h2>Tags</h2>
                <ul>
                    <input
                        list="tags"
                        id="tagSelector"
                        value={selectedTag}
                        onChange={handleTagChange}
                        placeholder="Escribe un tag..."
                    />
                    <datalist id="tags">
                        {tags.map(tag => (
                            <option key={tag} value={tag} />
                        ))}
                    </datalist>
                </ul>
            </div>
            <div>
                {searched.map(post => (
                    < div key={post.id} >
                        <Link to={`/post/${post.id}`}>

                            <img src={post.image} alt={post.title} />
                            <p>{post.text}</p>
                            <p>Tags: {post.tags.join(' | ')}</p>
                            <p>Author: {post.owner.firstName} {post.owner.lastName}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default Home;
