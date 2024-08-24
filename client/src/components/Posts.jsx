import Post from "./Post";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userDetails } from "../redux/slices/userSlice";
import { useSelector } from "react-redux";
const Posts = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    const response = await fetch("http://localhost:3000/posts");
    const data = await response.json();
    // setPosts(data);
    dispatch(userDetails(data));
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div className="sm:w-2/3 w-full grid sm:grid-cols-2 grid-cols-1 gap-4 p-2">
      {!user.length ? (
        <div className=" flex w-full col-span-2 p-4 flex-col gap-4 h-96">
          <div className="skeleton h-56 w-full"></div>
          <div className="skeleton h-8 w-28"></div>
          <div className="skeleton h-6 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      ) : (
        <Post />
        // posts.map((post, index) => <Post key={index} post={post} />)
      )}
    </div>
  );
};

export default Posts;
