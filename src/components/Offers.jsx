import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const offers = [
  {
    id: 1,
    title: "Deal Of The Day",
    subtitle: "Plan your next trip",
    image: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: "AED 4335",
  },
  {
    id: 2,
    title: "Luxury Packages",
    subtitle: "Plan your next trip",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: "AED 4335",
  },
  {
    id: 3,
    title: "Best Seller Packages",
    subtitle: "Plan your next trip",
    image: "https://images.unsplash.com/photo-1547235001-d703406d3f17?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: "AED 4335",
  },
];

const flightOffers = [
  {
    id: 1,
    title: "Huge savings on flight with trxvl.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Domestic Flights",
    description: "Book domestic flights starting @ just ₹1459",
  },
  {
    id: 2,
    title: "Huge savings on flight with trxvl.",
    image: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Domestic Flights",
    description: "Book domestic flights starting @ just ₹1459",
  },
];

const OfferCard = ({ offer }) => {
  return (
    <div className="relative rounded-xl overflow-hidden h-full">
      <img
        src={offer.image}
        alt={offer.title}
        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 p-5 flex flex-col justify-end">
        <h3 className="text-white font-bold text-lg">{offer.title}</h3>
        <p className="text-white text-sm mb-2">{offer.subtitle}</p>
        <div className="flex justify-between items-center">
          <p className="text-white text-xs">From</p>
          <p className="text-white font-bold">{offer.price}</p>
        </div>
      </div>
    </div>
  );
};

const FlightOfferCard = ({ offer }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm flex flex-col md:flex-row h-full">
      <div className="md:w-1/3">
        <img
          src={offer.image}
          alt={offer.title}
          className="w-full h-32 md:h-full object-cover"
        />
      </div>
      <div className="p-5 md:w-2/3">
        <p className="text-sm text-gray-500 mb-1">{offer.category}</p>
        <h3 className="text-lg font-bold mb-2">{offer.title}</h3>
        <p className="text-sm text-gray-600 mb-4">{offer.description}</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
          Book Now
        </button>
      </div>
    </div>
  );
};

const Offers = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section id="offer" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Animated Title */}
        <div className="flex justify-between items-center mb-8">
          <h2 
            className="text-2xl md:text-3xl font-bold text-gray-800"
            data-aos="fade-down"
          >
            Exclusive Travel Offers
          </h2>
        </div>

        {/* Animated Flight Offers (Staggered) */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          data-aos="fade-up"
        >
          {flightOffers.map((offer, index) => (
            <div 
              key={offer.id}
              data-aos="fade-up"
              data-aos-delay={100 * index}
            >
              <FlightOfferCard offer={offer} />
            </div>
          ))}
        </div>

        {/* Animated Offer Cards (Staggered) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <div
              key={offer.id}
              data-aos="fade-up"
              data-aos-delay={150 * index}
            >
              <OfferCard offer={offer} />
            </div>
          ))}
        </div>

        {/* Animated Navigation Buttons */}
        <div 
          className="flex justify-end mt-8 space-x-3"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <button className="p-2 rounded-full border border-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all">
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="p-2 rounded-full border border-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all">
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Offers;