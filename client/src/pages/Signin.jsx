import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { showRegisterPage } from "../redux/slices/showModls";
const Signin = () => {
  const { showLogin } = useSelector((state) => state.show);
  const dispatch = useDispatch();
  const [formData, setFromData] = useState({});
  const handleRegister = () => {
    dispatch(showRegisterPage());
  };
  const handleChange = (e) => {
    setFromData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = res.json();
      console.log(data);
      dispatch(showRegisterPage());
    } catch (error) {
      console.log(error);
    }
  };
  console.log(formData);
  return (
    showLogin && (
      <div className=" absolute top-[20%] left-[35%] text-black w-1/3 bg-white opacity-95 rounded-lg p-6 backdrop-blur-md">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <h1 className="text-center text-white text-2xl font-bold capitalize  ">
            Register
          </h1>
          <div className="w-full mx-auto flex flex-col gap-4">
            <input
              onChange={handleChange}
              type="text"
              placeholder="email"
              id="email"
              className=" p-3 outline-none bg-gray-300 rounded-md"
            />
            <input
              onChange={handleChange}
              type="text"
              placeholder="password"
              id="password"
              className=" p-3 outline-none bg-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="p-3 uppercase text-xl font-bold bg-blue-700 rounded-lg "
          >
            Login
          </button>
          <div className=" flex items-center justify-between">
            <p className="text-xl text-blue-500">already have an account?</p>
            <button
              onClick={handleRegister}
              className=" cursor-pointer hover:underline"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    )
  );
};

export default Signin;
