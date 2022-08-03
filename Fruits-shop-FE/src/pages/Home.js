import React from "react";
import Navbar from "../components/Navbar";
import Product from "../components/Product";

import Footer from "../components/Footer";

const Home = ({ adminControl ,controlsAdmin }) => {
  return (
    <div>
      <Navbar adminControl={adminControl} controlsAdmin={controlsAdmin} />
      <Product adminControl={adminControl} controlsAdmin={controlsAdmin} />
      <Footer />
    </div>
  );
};

export default Home;
