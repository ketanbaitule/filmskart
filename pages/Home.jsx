import React from "react";
import Banner from "../src/components/Banner/banner.jsx";
import Hero from "../src/components/Hero/hero.jsx";
import Navbar from "../src/components/Navbar/navbar.jsx";
import Footer from "../src/components/Footer/footer.jsx";

const Home = () => {
  return (
    <div>
      <Navbar />

      <Banner />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;