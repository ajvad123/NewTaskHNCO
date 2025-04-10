
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial-card">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={20} fill="#FFCC00" color="#FFCC00" />
        ))}
      </div>
      <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
      <div className="flex items-center">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.name} 
          className="w-12 h-12 rounded-full mr-4 object-cover"
        />
        <div>
          <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
          <p className="text-sm text-gray-500">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

const Reviews = () => {
  const testimonials = [
    {
      id: 1,
      quote: "I had the most incredible vacation experience thanks to this travel agency! From the moment I contacted them, their friendly and knowledgeable staff helped me plan the perfect itinerary for Paris.",
      name: "Sarah Johnson",
      role: "Adventure Traveler",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 2,
      quote: "The European tour exceeded all my expectations. Every detail was perfectly arranged, from the hotel accommodations to the guided city tours. I'll definitely book with them again!",
      name: "Michael Chen",
      role: "Business Traveler",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    },
    {
      id: 3,
      quote: "Our family vacation to Amsterdam was simply amazing! The kids loved the interactive museums and bike tours. The travel agency took care of everything, making it stress-free for us.",
      name: "Emma Rodriguez",
      role: "Family Traveler",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
    },
    {
      id: 4,
      quote: "As a solo traveler, I was looking for a safe and enjoyable European experience. This travel agency created a perfect blend of guided tours and free time for personal exploration.",
      name: "James Wilson",
      role: "Solo Explorer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 2 : prevIndex - 2));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= testimonials.length - 2 ? 0 : prevIndex + 2));
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.slice(currentIndex, currentIndex + 2).map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
        <div className="flex justify-center mt-8 space-x-4">
          <button 
            onClick={handlePrev}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={handleNext}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
            aria-label="Next testimonials"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
