import React from "react";
import Navbar from "../components/Navbar";
import Product from "../components/Product";

import Footer from "../components/Footer";

const Home = ({ adminControl }) => {
  return (
    <div>
      <Navbar adminControl={adminControl} />
      <Product adminControl={adminControl} />
      <Footer />
    </div>
  );
};

export default Home;
