import Category from "./components/Category";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import NewContent from "./components/NewContent";
import DiscoverContent from "./components/DiscoverContent";
import Instructor from "./components/Instructor";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Slider />
      <Category />
      <Content />
      <DiscoverContent />
      <NewContent />
      <Instructor />
      <Footer />
    </div>
  );
}

export default App;
