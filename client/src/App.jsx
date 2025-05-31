import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Register from "./pages/Register";
import UpdatePost from "./components/UpdatePost";
import Form from "./components/Form";

const App = () => {
  return (
    <div className="w-[100vw] h-[100vh]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<Form />} />
        <Route path="/update" element={<UpdatePost />} />
      </Routes>
    </div>
  );
};

export default App;
