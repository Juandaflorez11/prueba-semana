import axios from 'axios';

const API_URL = 'https://dummyapi.io/data/v1/';
const APP_ID = 'DUMMY_API';

const api = axios.create({
  baseURL: API_URL,
  headers: { 'app-id': APP_ID }
});

export const fetchPosts = () => api.get('/post');
export const fetchPostById = (id) => api.get(`/post/${id}`);
export const fetchComments = (postId) => api.get(`/post/${postId}/comment`);
export const fetchUsers = () => api.get('/user');
export const fetchTags = () => api.get('/tag');