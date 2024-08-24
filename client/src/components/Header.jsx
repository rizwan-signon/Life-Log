import logo from "../assets/images/logo.png";
const Header = () => {
  return (
    <div className="w-full rounded-lg bg-gray-800">
      <div className=" sm:max-w-4xl max-w-lg mx-auto flex items-center sm:justify-between justify-around py-2">
        <h1 className="text-4xl text- font-medium capitalize">LiFELog</h1>
        <img src={logo} alt="logo" className="min-w-12 min-h-12 rounded-full" />
      </div>
    </div>
  );
};

export default Header;
