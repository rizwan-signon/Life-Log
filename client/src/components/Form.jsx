import { useState } from "react";
import FileBase from "react-file-base64";
const Form = () => {
  const [formData, setFormData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: [],
  });
  const handleChange = (e) => {
    const { id, value } = e.target;

    if (id === "tags") {
      const tagsArray = value
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag.length > 0);
      setFormData({ ...formData, [id]: tagsArray });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  console.log(formData);
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-blue-600 w-1/3 p-4 flex flex-col gap-6"
    >
      <h1 className="text-center text-2xl font-bold capitalize  ">
        lets create your memory
      </h1>
      <div className="w-full mx-auto flex flex-col gap-4">
        <input
          onChange={handleChange}
          type="text"
          placeholder="creator/owenor"
          id="creator"
          className=" p-3 outline-none bg-gray-300 rounded-md"
        />
        <input
          onChange={handleChange}
          type="text"
          placeholder="title"
          id="title"
          className=" p-3 outline-none bg-gray-300 rounded-md"
        />

        <input
          onChange={handleChange}
          type="text"
          placeholder="message"
          id="message"
          className=" p-3 outline-none bg-gray-300 rounded-md"
        />
        <input
          onChange={handleChange}
          type="text"
          placeholder="tags"
          id="tags"
          className=" p-3 outline-none bg-gray-300 rounded-md"
        />
      </div>
      <div className=" border-2 p-2 rounded-lg">
        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) =>
            setFormData({ ...formData, selectedFile: base64 })
          }
        />
      </div>
      <div className="flex flex-col gap-5">
        <button
          type="submit"
          className="p-3 uppercase text-xl bg-green-700 rounded-lg hover:opacity-85"
        >
          Submit
        </button>
        <button className="p-3 uppercase text-xl bg-red-700 rounded-lg hover:opacity-85">
          clear
        </button>
      </div>
    </form>
  );
};

export default Form;
