import React from "react";
import Navbar from "../components/Navbar";
import Product from "../components/Product";

import Footer from "../components/Footer";
import { useState } from "react";

const Home = () => {
      const [user,setUser]=useState(null);
  return (
    <div>
      <Navbar  user={user} setUser={setUser}/>
      <Product user={user} setUser={setUser} />
      <Footer />
    </div>
  );
};

export default Home;
