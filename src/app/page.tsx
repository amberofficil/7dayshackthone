import React from "react";
import TopHeader from "./components/topheader";
import Header from "./components/header";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Product from "./products/page";







export default function Home() {
  return (
    <div>
      <TopHeader/>
      <Header/>
      <Hero/>
      <Product/>
      <Footer/>
    </div>
  );
}
