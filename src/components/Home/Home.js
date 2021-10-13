import React from "react";
import Menubar from "../Shared/Menubar/Menubar";
import "./Home.css";
import Banner from "./../Banner/Banner";
import Services from "./../Services/Services";
import About from "./../About/About";
import Category from "./../Category/Category";
import Customer from "./../Customer/Customer";
import Contact from "./../Contact/Contact";
import Footer from "./../Shared/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Menubar></Menubar>
      <Banner></Banner>
      <Services></Services>
      <About></About>
      <Category></Category>
      {/* <Customer></Customer> */}
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
