import React, { useEffect, useState } from 'react';
import { fetchPostById, fetchComments } from '../services/api';

const PostDetails = ({ id }) => {

  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const postId = id;
  console.log(postId);
  useEffect(() => {
    fetchPostById(postId).then(response => setPost(response.data));
    fetchComments(postId).then(response => setComments(response.data.data));
  }, [postId]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>{post.text}</h1>
      <img src={post.image} alt={""} />
      <p>{post.text}</p>
      <h2>Comments</h2>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            <p>{comment.message}</p>
            <p>By: {comment.owner.firstName} {comment.owner.lastName}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostDetails;
