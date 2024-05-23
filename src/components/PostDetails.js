import React, { useEffect, useState } from 'react';
import { fetchPostById, fetchComments } from '../services/api';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const PostDetails = () => {

  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const postId = useParams().id;
  useEffect(() => {
    fetchPostById(postId).then(response => setPost(response.data));
    fetchComments(postId).then(response => setComments(response.data.data));
  }, [postId]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>{post.text}</h1>
      <img src={post.image} alt={""} />
      <p>Tags: {post.tags.join(' | ')}</p>
      <h2>Comments</h2>
      <ul>
        {
          comments.length > 0 ?
            comments.map(comment => (
              <li key={comment.id}>
                <p>{comment.message}</p>
                <p>By: {comment.owner.firstName} {comment.owner.lastName}</p>
              </li>
            )) : "No comments"}
      </ul>
      <Link to={`/`}>Volver</Link>
    </div>
  );
};

export default PostDetails;
