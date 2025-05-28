import Banner from "./Banner";
import "./home.css";
import React from "react";

import Cta from "../about/Cta";

import AboutCeramic from "./AboutHome/Home-ceramic";
import BestCeramic from "./BestCeramic/BestCeramic";
import MostPopular from "./MostPopular/MostPopular";

const Home = () => {
  return (
    <div>
      <Banner />

      <AboutCeramic />

      <BestCeramic />
      <MostPopular />

      <Cta />
    </div>
  );
};

export default Home;
