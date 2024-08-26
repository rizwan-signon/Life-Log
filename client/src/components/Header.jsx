import logo from "../assets/images/logo.png";
import { useDispatch } from "react-redux";
import { showRegisterPage } from "../redux/slices/showModls";
const Header = () => {
  const dispatch = useDispatch();
  const handleShowModle = () => {
    setTimeout(() => {
      dispatch(showRegisterPage());
    }, 1000);
  };
  return (
    <div className="w-full rounded-lg bg-gray-800">
      <div className=" sm:max-w-4xl max-w-lg mx-auto flex items-center sm:justify-between justify-around py-2">
        <h1 className="text-4xl text- font-medium capitalize">LiFELog</h1>
        <img src={logo} alt="logo" className="min-w-12 min-h-12 rounded-full" />
        <div className="flex items-center gap-5">
          <button
            onClick={handleShowModle}
            className="p-2 border-2 hover:bg-blue-700 rounded-lg"
          >
            register
          </button>
          <button className="p-2 border-2 hover:bg-green-700 rounded-lg">
            login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
