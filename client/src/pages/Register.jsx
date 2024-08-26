import { useState } from "react";
import { useSelector } from "react-redux";
const Register = () => {
  const { show } = useSelector((state) => state.show);
  const [formData, setFromData] = useState({});
  const handleChange = (e) => {
    setFromData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(formData);
  return (
    show && (
      <div className=" absolute top-[20%] left-[35%] text-black w-1/3 bg-white opacity-95 rounded-lg p-6 backdrop-blur-md">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <h1 className="text-center text-white text-2xl font-bold capitalize  ">
            Register
          </h1>
          <div className="w-full mx-auto flex flex-col gap-4">
            <div className="w-full flex items-center gap-3">
              <input
                onChange={handleChange}
                type="text"
                placeholder="first name"
                id="firstName"
                className=" p-3 outline-none bg-gray-300 rounded-md w-1/2"
              />
              <input
                onChange={handleChange}
                type="text"
                placeholder="lastName"
                id="lastName"
                className=" p-3 outline-none bg-gray-300 rounded-md w-1/2"
              />
            </div>

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
            Register
          </button>
        </form>
      </div>
    )
  );
};

export default Register;
