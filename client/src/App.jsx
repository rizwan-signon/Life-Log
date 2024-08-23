import Form from "./components/Form";
import Header from "./components/Header";
import Posts from "./components/Posts";
const App = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 text-white">
      <Header />
      <div className=" flex items-start gap-4 mt-10">
        <Posts />
        <Form />
      </div>
    </div>
  );
};

export default App;
