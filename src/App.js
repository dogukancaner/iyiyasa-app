import Category from "./components/Category";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import NewContent from "./components/NewContent";

function App() {
  return (
    <div>
      <Navbar />
      <Slider />
      <Category />
      <Content />
      <NewContent />
    </div>
  );
}

export default App;
