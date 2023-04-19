import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AllPosts = () => {
  const [postData, setPostData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const { data } = await axios.get('http://localhost:8080/posts');
        console.log(data);
        setPostData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllPosts();
  }, []);

  return (
    <div>
      <h1>All Posts</h1>

      {postData.map((post) => (
        <>
          <p key={post.id}>{post.content}</p>
          <button onClick={() => {navigate(`/posts/${post.id}`)}}>View</button>
        </>
      ))}
    </div>
  );
};

export default AllPosts;
