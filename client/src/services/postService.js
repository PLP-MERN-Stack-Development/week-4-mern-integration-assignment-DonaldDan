import axios from 'axios';

export const createPost = async (postData, token) => {
  return axios.post(
    'http://localhost:5000/api/posts',
    postData,
    {
      headers: {
        Authorization: `Bearer ${token}`,  // ✅ include token
      },
    }
  );
};
