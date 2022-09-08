import React from "react";
import Navbar from "./navbar";
import Container from "./container";
import Footer from "./footer";

const style = {
  width: "18rem",
};



//create your first component
const Home = () => {
  return (
    <>
      <Navbar />
      <Container />     
      <Footer />
    </>
  );
};

export default Home;
