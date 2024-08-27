import logo from "../assets/images/logo.png";
import { useDispatch } from "react-redux";
import { showLoginPage, showRegisterPage } from "../redux/slices/showModls";
import { useSelector } from "react-redux";
const Header = () => {
  const { logedInUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleShowRegister = () => {
    dispatch(showRegisterPage());
  };
  const handleShowLogin = () => {
    dispatch(showLoginPage());
  };
  return (
    <div className="w-full rounded-lg bg-gray-800">
      <div className=" sm:max-w-4xl max-w-lg mx-auto flex items-center sm:justify-between justify-around py-2">
        <h1 className="text-4xl text- font-medium capitalize">LiFELog</h1>
        <img src={logo} alt="logo" className="min-w-12 min-h-12 rounded-full" />
        {logedInUser ? (
          <div className="flex items-center justify-center gap-1 min-w-16 min-h-16 rounded-full border-2">
            <h1 className=" font-bold text-3xl text-green-600">
              {logedInUser.firstName.charAt(0)}
            </h1>
            <h1 className=" font-bold text-3xl text-blue-600">
              {logedInUser.lastName.charAt(0)}
            </h1>
          </div>
        ) : (
          <div className="flex items-center gap-5">
            <button
              onClick={handleShowRegister}
              className="p-2 border hover:bg-blue-700 rounded-lg"
            >
              register
            </button>
            <button
              onClick={handleShowLogin}
              className="p-2 border hover:bg-green-700 rounded-lg"
            >
              login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
