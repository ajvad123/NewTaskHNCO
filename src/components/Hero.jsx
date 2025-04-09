import React, { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from './ui/carousel';
import './HeroAnimation.css';

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState({
    isMobile: false,
    isTablet: false,
    isSmallMobile: false
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkDeviceType = () => {
      const width = window.innerWidth;
      setDeviceType({
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isSmallMobile: width < 480
      });
    };

    checkDeviceType();
    window.addEventListener('resize', checkDeviceType);
    return () => window.removeEventListener('resize', checkDeviceType);
  }, []);

  return deviceType;
};

const Hero = () => {
  const { isMobile, isSmallMobile } = useDeviceType();
  
  const services = [
    { 
      name: 'Holiday', 
      icon: (
        <div className="bg-pink-500 rounded-full p-3 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
          <svg className="h-6 w-6 sm:h-8 sm:w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </div>
      ) 
    },
    { 
      name: 'Visa', 
      icon: (
        <div className="bg-red-500 rounded-full p-3 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
          <svg className="h-6 w-6 sm:h-8 sm:w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
      ) 
    },
    { 
      name: 'City Tours', 
      icon: (
        <div className="bg-blue-500 rounded-full p-3 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
          <svg className="h-6 w-6 sm:h-8 sm:w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      ) 
    },
    { 
      name: 'Offers', 
      icon: (
        <div className="bg-yellow-500 rounded-full p-3 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
          <svg className="h-6 w-6 sm:h-8 sm:w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      ) 
    }
  ];

  const destinations = [
    {
      id: 1,
      name: 'USA',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      name: 'Salalah',
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb'
    },
    {
      id: 3,
      name: 'Thailand',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027'
    },
    {
      id: 4,
      name: 'Armenia',
      image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const userAvatars = [
    "https://randomuser.me/api/portraits/women/21.jpg",
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/women/45.jpg",
    "https://randomuser.me/api/portraits/men/67.jpg"
  ];

  return (
    <section className="relative hero-section" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: isSmallMobile ? "90vh" : "100vh",
    }}>
      <div className="container mx-auto px-4 sm:px-6 flex flex-col items-center justify-center h-full pt-16 sm:pt-24 lg:pt-32">
        <div className="text-center w-full max-w-4xl px-2 sm:px-0">
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 hero-title leading-tight"
            data-aos="fade-down"
            data-aos-duration="800"
          >
            Discover the world with citron tours, 
            <br className="hidden sm:block" /> your journey begins here
          </h1>
          
          {/* User Avatars */}
          <div 
            className="flex justify-center items-center space-x-2 my-6 sm:my-8 hero-avatars"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex -space-x-2">
              {userAvatars.map((avatar, index) => (
                <div 
                  key={index} 
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white overflow-hidden"
                  data-aos="zoom-in"
                  data-aos-delay={300 + (index * 100)}
                >
                  <img src={avatar} alt={`User ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="ml-3 text-white text-left">
              <div className="font-bold text-sm sm:text-base">5000+</div>
              <div className="text-xs sm:text-sm">Happy Customers</div>
            </div>
          </div>

          {/* Enquire Button */}
          <button 
            className="px-6 py-2 sm:px-8 sm:py-3 bg-white text-gray-800 rounded-full hover:bg-gray-100 transition-colors mb-8 sm:mb-12 hero-button pulse-animation text-sm sm:text-base"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Enquire
          </button>

          {/* Service Icons */}
          <div 
            className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-4 sm:p-6 mb-8 sm:mb-12 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 hero-services"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            {services.map((service, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-white hero-service-item"
                data-aos="zoom-in"
                data-aos-delay={600 + (index * 100)}
              >
                {service.icon}
                <span className="mt-2 text-xs sm:text-sm font-medium">{service.name}</span>
              </div>
            ))}
          </div>

          {/* Search Form */}
          <div 
            className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-3 sm:p-4 mb-12 sm:mb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 sm:gap-3 hero-search"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <div className="relative col-span-1 sm:col-span-2 lg:col-span-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-4 w-4 sm:h-5 sm:w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search destinations"
                className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 bg-white bg-opacity-20 border-0 rounded-full text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 text-xs sm:text-sm"
              />
            </div>
            
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-4 w-4 sm:h-5 sm:w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="From"
                className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 bg-white bg-opacity-20 border-0 rounded-full text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 text-xs sm:text-sm"
              />
            </div>
            
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-4 w-4 sm:h-5 sm:w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="To"
                className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 bg-white bg-opacity-20 border-0 rounded-full text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 text-xs sm:text-sm"
              />
            </div>
            
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-4 w-4 sm:h-5 sm:w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Travel Date"
                className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 bg-white bg-opacity-20 border-0 rounded-full text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 text-xs sm:text-sm"
              />
            </div>
            
            <button 
              className="bg-white text-blue-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium hover:bg-opacity-90 transition-all text-xs sm:text-sm col-span-1 sm:col-span-2 lg:col-span-1"
              data-aos="zoom-in"
              data-aos-delay="800"
            >
              Enquire
            </button>
          </div>
        </div>
        
        {/* Top Holiday Packages - Updated Carousel */}
        <div className="w-full mb-12 sm:mb-16 px-2 sm:px-4">
          <div 
            className="flex justify-between items-center mb-4 sm:mb-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-white">Top Holiday Packages</h2>
            {!isMobile && (
              <div className="flex space-x-2">
                <button className="bg-white bg-opacity-80 hover:bg-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors">
                  <svg className="h-4 w-4 sm:h-5 sm:w-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="bg-white bg-opacity-80 hover:bg-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors">
                  <svg className="h-4 w-4 sm:h-5 sm:w-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}
          </div>
          
          <Carousel 
            className="w-full"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <CarouselContent>
              {destinations.map((destination, index) => (
                <CarouselItem 
                  key={destination.id} 
                  className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 px-2"
                  data-aos="zoom-in"
                  data-aos-delay={500 + (index * 100)}
                >
                  <div className="relative overflow-hidden rounded-lg h-48 sm:h-56 md:h-64 group cursor-pointer">
                    <img 
                      src={destination.image} 
                      alt={destination.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3 sm:p-4">
                      <h3 className="text-white text-lg sm:text-xl font-semibold">{destination.name}</h3>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {isMobile && (
              <>
                <CarouselPrevious className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-white rounded-full z-10 w-8 h-8" />
                <CarouselNext className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-white rounded-full z-10 w-8 h-8" />
              </>
            )}
          </Carousel>
        </div>
      </div>
      
      {/* Social Media Icons */}
      <div 
        className={`fixed ${isMobile ? 'bottom-4 right-4 flex-row' : 'right-4 top-1/2 transform -translate-y-1/2 flex-col'} gap-3 z-50 flex`}
        data-aos="fade-left"
        data-aos-delay="600"
      >
        <a 
          href="#" 
          className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
          data-aos="zoom-in"
          data-aos-delay="700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
        <a 
          href="#" 
          className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors"
          data-aos="zoom-in"
          data-aos-delay="800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;