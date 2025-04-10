import React, { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Nora Acholo",
    role: "Tripster",
    avatar: "https://randomuser.me/api/portraits/women/79.jpg",
    content:
      "I had the most incredible vacation experience thanks to the amazing team at XYZ Travel Agency! From the moment I contacted them, their friendly and knowledgeable staff helped me plan the perfect itinerary.",
    rating: 5,
  },
  {
    id: 2,
    name: "John Smith",
    role: "Travel Enthusiast",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    content:
      "The attention to detail was impeccable. Every aspect of our trip was carefully curated to match our preferences. Will definitely book again!",
    rating: 5,
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Adventure Seeker",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    content:
      "Our family vacation was transformed into a magical experience. The kids still talk about it months later. Worth every penny!",
    rating: 5,
  },
  {
    id: 4,
    name: "Michael Brown",
    role: "Business Traveler",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    content:
      "As a frequent traveler, I'm impressed by their professionalism and local knowledge. They handle all the logistics seamlessly.",
    rating: 5,
  },
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <div 
      className="bg-white rounded-xl p-6 shadow-sm h-full hover:shadow-md transition-shadow"
      data-aos="zoom-in"
      data-aos-duration="600"
    >
      <div className="text-4xl text-primary font-serif mb-2">"</div>
      <p className="text-gray-600 mb-6">{testimonial.content}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full mr-4 object-cover"
          />
          <div>
            <h4 className="font-semibold">{testimonial.name}</h4>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
          </div>
        </div>
        <div className="star-rating flex">
          {[...Array(testimonial.rating)].map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(3);
      } else if (window.innerWidth >= 768) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => {
    setActiveIndex((prevIndex) =>
      prevIndex + visibleCount >= testimonials.length
        ? 0
        : prevIndex + visibleCount
    );
  };

  const prev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex - visibleCount < 0
        ? Math.max(testimonials.length - visibleCount, 0)
        : prevIndex - visibleCount
    );
  };

  return (
    <section 
    id="review"
      className="py-16 bg-light-gray"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <h2 
            className="text-xl font-semibold mb-2"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            Testimonials
          </h2>
          <h3 
            className="text-3xl font-bold text-center md:text-left"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            Our Customer Reviews
          </h3>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-all duration-500 ease-in-out"
              style={{
                transform: `translateX(-${activeIndex * (100 / visibleCount)}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
                  data-aos="fade-up"
                  data-aos-delay={300 + (index * 100)}
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          <div 
            className="flex justify-end mt-8 space-x-3"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <button
              onClick={prev}
              className="p-3 rounded-full border border-gray-300 hover:bg-primary hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
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
            <button
              onClick={next}
              className="p-3 rounded-full border border-gray-300 hover:bg-primary hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
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
      </div>
    </section>
  );
};

export default Testimonials;