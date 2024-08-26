import Home from "./pages/Home";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
import Signin from "./pages/Signin";
const App = () => {
  const { show, showLogin } = useSelector((state) => state.show);
  return (
    <div className=" relative">
      <Home />
      {show && <Register />}
      {showLogin && <Signin />}
    </div>
  );
};

export default App;
