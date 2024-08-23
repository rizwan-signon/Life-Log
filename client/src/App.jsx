import Form from "./components/Form";
import Header from "./components/Header";
import Posts from "./components/Posts";
const App = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Header />
      <div className=" flex items-center gap-4">
        <Posts />
        <Form />
      </div>
    </div>
  );
};

export default App;
