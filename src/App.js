import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import InstructorPages from "./pages/InstructorPages";
import SpecialSeriesPage from "./pages/SpecialSeriesPage";
import Blog from "./pages/Blog";
import SpecialMe from "./pages/SpecialMe";
import SıgnUp from "./pages/SignUp";
import SıgnIn from "./pages/SignIn";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/instructor" element={<InstructorPages />} />
          <Route path="/specialseries" element={<SpecialSeriesPage />} />
          <Route path="/specialme" element={<SpecialMe />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/signup" element={<SıgnUp />} />
          <Route path="/signin" element={<SıgnIn />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      d
    </div>
  );
}

export default App;
