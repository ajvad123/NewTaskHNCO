import React from "react";

const Stats = () => {
  return (
    <section id="about" className="py-16 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          {/* Left Column - Text Content */}
          <div 
            className="md:w-1/2 mb-8 md:mb-0"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <h2 
              className="text-xl font-semibold mb-2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              About Us
            </h2>
            <h3 
              className="text-3xl font-bold mb-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Your trusted partner in curating unforgettable
              <br />
              travel experiences
            </h3>
            <p 
              className="text-gray-600 mb-8"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Founded in 2015, Citron Tourism is a Destination Management Company based in UAE licensed by the Government of Dubai. Our team of Tourism and Culinary Minded Experts has a singular perfection to transform ordinary trips into extraordinary ones. We are your guide, bringing you personal experiences. Wherever your travels take you, we'll show you the unique and unmissable things to do in your destination. With Citron Tourism on your side (and in your pocket), creating memorable experiences just got a lot easier.
            </p>
            <button 
              className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Know More
            </button>
          </div>
          
          {/* Right Column - Stats Grid */}
          <div 
            className="md:w-1/2 grid grid-cols-3 gap-8"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            {/* Stat 1 */}
            <div 
              className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <h4 className="text-4xl font-bold text-primary">25k<span className="text-blue-400">+</span></h4>
              <p className="text-gray-600 mt-2">Happy Travelers</p>
            </div>
            
            {/* Stat 2 */}
            <div 
              className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <h4 className="text-4xl font-bold text-primary">4.8<span className="text-blue-400">/5</span></h4>
              <p className="text-gray-600 mt-2">Rating On Google</p>
            </div>
            
            {/* Stat 3 */}
            <div 
              className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <h4 className="text-4xl font-bold text-primary">10<span className="text-blue-400">+</span></h4>
              <p className="text-gray-600 mt-2">Years Of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;