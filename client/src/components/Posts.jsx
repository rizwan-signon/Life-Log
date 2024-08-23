import Post from "./Post";
import { useState, useEffect } from "react";
const Posts = () => {
  // const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    const response = await fetch("http://localhost:3000/posts");
    const data = await response.json();
    console.log(data);
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div className="w-2/3 bg-green-300">
      <h1>posts</h1>
      <Post />
    </div>
  );
};

export default Posts;
