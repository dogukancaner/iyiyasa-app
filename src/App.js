import { BrowserRouter } from "react-router-dom";
import Category from "./components/Category";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";

function App() {
  return (
    <div>
      <Navbar />
      <Slider />
      <Category />
    </div>
  );
}

export default App;
