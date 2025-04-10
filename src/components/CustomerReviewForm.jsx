import { useState } from 'react';

const CustomerReviewForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
    setSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 py-10 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
          Share Your Feedback
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Your Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all h-32 resize-none"
              placeholder="Write your review here..."
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-full shadow-md transition-all duration-300 w-full sm:w-auto"
            >
              Submit Review
            </button>
          </div>
        </form>

        {submitted && (
          <div className="mt-6 p-4 bg-green-100 border border-green-300 text-green-800 rounded-xl text-center font-medium shadow-sm">
            ✅ Thank you for your feedback!
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerReviewForm;
