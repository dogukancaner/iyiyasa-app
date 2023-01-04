import { BrowserRouter, Route, Routes } from "react-router-dom";

import Category from "./components/Category";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import NewContent from "./components/NewContent";
import DiscoverContent from "./components/DiscoverContent";
import Instructor from "./components/Instructor";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import InstructorPages from "./pages/InstructorPages";
import SpecialSeriesPage from "./pages/SpecialSeriesPage";
import Blog from "./pages/Blog";
import SpecialMe from "./pages/SpecialMe";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/instructor" element={<InstructorPages />} />
          <Route path="/specialseries" element={<SpecialSeriesPage />} />
          <Route path="/specialme" element={<SpecialMe />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <Navbar />
       <Slider />
      <Category />
      <Content />
      <DiscoverContent />
      <NewContent />
      <Instructor /> 
      <Footer /> */}
    </div>
  );
}

export default App;
