import { BsThreeDotsVertical } from "react-icons/bs";
import moment from "moment/moment";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { storeId } from "../redux/slices/userSlice";
const Post = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const handleClick = (userId) => {
    dispatch(storeId(userId));
  };
  const handleDelete = async (userId) => {
    try {
      const res = await fetch(`http://localhost:3000/posts/${userId}`, {
        method: "DELETE",
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return user.map((user, index) => (
    <div key={index} className="card glass relative w-full hover:opacity-85">
      <figure className="w-full">
        <img
          src={user.selectedFile}
          alt="memory-image!"
          className="w-full h-48 object-cover"
        />
      </figure>
      <div className=" absolute flex items-center justify-between px-8 py-4 w-full">
        <div>
          <h1 className=" text-2xl capitalize text-white font-bold">
            {user.title}
          </h1>
          <h2>{moment(user.createdAt).fromNow()}</h2>
        </div>
        <div
          onClick={() => handleClick(user)}
          className="min-h-12 min-w-12 rounded-full border-2 flex items-center justify-center cursor-pointer"
        >
          <BsThreeDotsVertical className=" text-4xl text-white " />
        </div>
      </div>
      <div className=" px-8 py-4">
        {user.tags.map((tag) => (
          <span key={tag}>#{tag}</span>
        ))}
      </div>

      <div className="px-8 py-4">
        <h1 className=" truncate">{user.message}</h1>
        <div className="flex items-center justify-between mt-4">
          <span>likes</span>
          <button
            onClick={() => handleDelete(user._id)}
            className="btn btn-primary w-2/5"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  ));
};

export default Post;
