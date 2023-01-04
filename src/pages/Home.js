import React from "react";
import Slider from "../components/Slider";
import Category from "../components/Category";
import Content from "../components/Content";
import DiscoverContent from "../components/DiscoverContent";
import NewContent from "../components/NewContent";
import Instructor from "../components/Instructor";

const Home = () => {
  return (
    <div>
      <Slider />
      <Category />
      <Content />
      <DiscoverContent />
      <NewContent />
      <Instructor />
    </div>
  );
};

export default Home;
