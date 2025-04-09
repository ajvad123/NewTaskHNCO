
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import Blogs from "../components/Blogs";
import FAQ from "../components/FAQ";
import Offers from "../components/Offers";
import Stats from "../components/Stats";
import Footer from "../components/Footer";

const index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Offers />
      <WhyChooseUs />
      <Testimonials />
      <Blogs />
      <FAQ />
      <Footer />
    </div>
  );
};

export default index;
