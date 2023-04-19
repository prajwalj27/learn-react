import React from 'react';
import { useParams } from 'react-router-dom';

const SinglePost = () => {
  const params = useParams();
  const postId = params.id;


  console.log(postId);
  return <div>SinglePost ID: {postId}</div>;
};

export default SinglePost;
