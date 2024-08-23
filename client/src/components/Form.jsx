import { useState } from "react";
import FileBase from "react-file-base64";
const Form = () => {
  const [formData, setFormData] = useState({});
  return (
    <form className="bg-blue-600 w-1/3">
      <h1>lets create your memory</h1>
      <div className="">
        <input type="text" placeholder="creator/owenor" id="creator" />
        <input type="text" placeholder="title" id="title" />
        <input type="text" placeholder="message" id="message" />
        <input type="text" placeholder="tags" id="tags" />
      </div>
      <div>
        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) =>
            setFormData({ ...formData, selectedFile: base64 })
          }
        />
      </div>
    </form>
  );
};

export default Form;
