import Form from "../components/Form";
import Posts from "../components/Posts";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import UpdatePost from "../components/UpdatePost";
const Home = () => {
  const { userInfo, logedInUser } = useSelector((state) => state.user);
  return (
    <div className=" font-sans max-w-7xl mx-auto p-4 text-white">
      <Header />
      <div className=" flex sm:flex-row sm:items-start gap-4 mt-10 flex-col-reverse sm:max-w-7xl max-w-lg">
        <Posts />
        {logedInUser ? userInfo ? <UpdatePost /> : <Form /> : null}
      </div>
    </div>
  );
};

export default Home;
