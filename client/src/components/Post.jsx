import { BsThreeDotsVertical } from "react-icons/bs";
import moment from "moment/moment";
import { useSelector } from "react-redux";
const Post = () => {
  const { user } = useSelector((state) => state.user);
  return user.map((user, index) => (
    <div key={index} className="card glass relative w-full ">
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
        <div>
          <BsThreeDotsVertical className=" text-4xl text-white cursor-pointer" />
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
          <button className="btn btn-primary w-2/5">Delete</button>
        </div>
      </div>
    </div>
  ));
};

export default Post;
