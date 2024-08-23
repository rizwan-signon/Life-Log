import { BsThreeDotsVertical } from "react-icons/bs";
import moment from "moment/moment";
const Post = ({ post }) => {
  console.log("post of posts" + post);
  return (
    <div className="card glass relative w-full ">
      <figure className="w-full">
        <img
          src={post.selectedFile}
          alt="memory-image!"
          className="w-full h-48 object-cover"
        />
      </figure>
      <div className=" absolute flex items-center justify-between px-8 py-4 w-full">
        <div>
          <h1 className=" text-2xl capitalize text-white font-bold">
            {post.title}
          </h1>
          <h2>{moment(post.createdAt).fromNow()}</h2>
        </div>
        <div>
          <BsThreeDotsVertical className=" text-4xl text-white cursor-pointer" />
        </div>
      </div>
      <div className=" px-8 py-4">
        {post.tags.map((tag) => (
          <span key={tag}>#{tag}</span>
        ))}
      </div>

      <div className="px-8 py-4">
        <h1 className=" truncate">{post.message}</h1>
        <div className="flex items-center justify-between mt-4">
          <span>likes</span>
          <button className="btn btn-primary w-2/5">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Post;
