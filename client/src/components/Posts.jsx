import Post from "./Post";
import { useState, useEffect } from "react";
const Posts = () => {
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    const response = await fetch("http://localhost:3000/posts");
    const data = await response.json();
    setPosts(data);
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div className="w-2/3 grid grid-cols-2 gap-4 p-2">
      {!posts.length ? (
        <div className=" flex w-full col-span-2 p-4 flex-col gap-4 h-96">
          <div className="skeleton h-56 w-full"></div>
          <div className="skeleton h-8 w-28"></div>
          <div className="skeleton h-6 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      ) : (
        posts.map((post, index) => <Post key={index} post={post} />)
      )}
    </div>
  );
};

export default Posts;
