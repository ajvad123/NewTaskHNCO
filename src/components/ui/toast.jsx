
import React from "react";

export const ToastProvider = ({ children }) => {
  return <>{children}</>;
};

export const ToastViewport = () => {
  return <div id="toast-viewport" className="fixed top-0 right-0 p-4 z-50" />;
};

export const Toast = ({ children, ...props }) => {
  return (
    <div
      className="bg-white shadow-lg rounded-lg p-4 mb-2 flex justify-between items-start"
      {...props}
    >
      {children}
    </div>
  );
};

export const ToastTitle = ({ children }) => {
  return <div className="font-medium">{children}</div>;
};

export const ToastDescription = ({ children }) => {
  return <div className="text-sm text-gray-500 mt-1">{children}</div>;
};

export const ToastClose = () => {
  return (
    <button className="ml-4 text-gray-400 hover:text-gray-600">
      ✕
    </button>
  );
};
