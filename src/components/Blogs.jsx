import React from "react";

const blogs = [
  {
    id: 1,
    title: "A Food Lover's Guide to Culinary Hotspots",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "June 25, 2018",
    excerpt: "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
    shares: 152,
  },
  {
    id: 2,
    title: "Hidden Gems: Off-the-Beaten-Path Destinations",
    image: "https://images.unsplash.com/photo-1547235001-d703406d3f17?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "June 28, 2018",
    excerpt: "Discover secret locations that most tourists never see. These hidden spots offer authentic experiences away from crowded attractions.",
    shares: 142,
  },
  {
    id: 3,
    title: "Sustainable Travel: How to Explore Responsibly",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "June 30, 2018",
    excerpt: "Learn how to minimize your environmental impact while traveling without sacrificing the quality of your experience.",
    shares: 130,
  },
];

const BlogCard = ({ blog }) => {
  return (
    
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-sm h-full hover:shadow-md transition-shadow duration-300"
      data-aos="fade-up"
      data-aos-duration="600"
    >
      <div className="relative">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
        />
        <button 
          className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-primary hover:text-white transition-colors"
          data-aos="zoom-in"
          data-aos-delay="300"
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
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
            />
          </svg>
        </button>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
        <p 
          className="text-gray-500 text-sm mb-4"
          data-aos="fade"
          data-aos-delay="200"
        >
          {blog.date}
        </p>
        <p className="text-gray-600 mb-4">{blog.excerpt}</p>
        <div 
          className="flex justify-between items-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <a
            href="#"
            className="text-primary font-medium hover:underline flex items-center"
          >
            Read More
            <svg 
              className="w-4 h-4 ml-1"
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <div className="flex items-center text-gray-500 text-sm">
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
            {blog.shares} shares
          </div>
        </div>
      </div>
    </div>
  );
};

const Blogs = () => {
  return (
    <section id="blog"
      className="py-16 bg-white"
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
            Blogs
          </h2>
          <h3 
            className="text-3xl font-bold text-center md:text-left"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            Our Latest News And Blogs
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div 
              key={blog.id}
              data-aos="fade-up"
              data-aos-delay={300 + (index * 100)}
            >
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;