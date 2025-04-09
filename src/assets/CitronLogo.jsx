
import React from "react";

const CitronLogo = ({ className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25 0C38.8071 0 50 11.1929 50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0Z"
          fill="#0E79D9"
        />
        <path
          d="M37.5 24.0385C37.5 23.0769 37.0312 22.5 35.9375 22.5H28.125V17.5C28.125 16.7308 27.8125 16.25 27.0312 16.25C26.3062 16.25 25.9375 16.7308 25.9375 17.5V22.5H19.0625C17.8125 22.5 17.5 23.0769 17.5 24.0385C17.5 25 17.8125 25.625 19.0625 25.625H25.9375V27.5H19.0625C17.8125 27.5 17.5 28.0769 17.5 29.0385C17.5 30 17.8125 30.625 19.0625 30.625H25.9375V33.75C25.9375 34.5192 26.3062 35 27.0312 35C27.8125 35 28.125 34.5192 28.125 33.75V30.625H35.9375C37.0312 30.625 37.5 30.0481 37.5 29.0385C37.5 28.0769 37.0312 27.5 35.9375 27.5H28.125V25.625H35.9375C37.0312 25.625 37.5 25.0481 37.5 24.0385Z"
          fill="white"
        />
      </svg>
      <span className="ml-2 text-xl font-semibold text-primary">
        Citron
        <span className="block text-xs text-gray-500">Your travel partner</span>
      </span>
    </div>
  );
};

export default CitronLogo;
