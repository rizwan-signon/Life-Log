import logo from "../assets/images/logo.png";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const { logedInUser } = useSelector((state) => state.user);

  return (
    <div className="w-full rounded-lg bg-gray-800">
      <div className=" sm:max-w-4xl max-w-lg mx-auto flex items-center sm:justify-between justify-around py-2">
        <div className="flex items-center gap-2">
          <h1 className="text-4xl text- font-medium capitalize">LiFELog</h1>
          <img
            src={logo}
            alt="logo"
            className="min-w-12 min-h-12 rounded-full"
          />
        </div>
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
              onClick={() => {
                navigate("/register");
              }}
              className="p-2 border hover:bg-blue-700 rounded-lg"
            >
              register
            </button>
            <button
              onClick={() => {
                navigate("/login");
              }}
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
