import React from "react";

export const NotFound = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="floating">
            <svg className="w-24 h-24 mx-auto text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L15 12m0 0l-5.25-5m5.25 5H3"></path>
            </svg>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mt-4">404</h1>
          <p className="text-lg text-gray-600 mt-2">Page Not Found</p>
          <a href="/" className="mt-4 inline-block px-4 py-2 bg-green text-white rounded hover:bg-green transition duration-300">
            Go Back Home
          </a>
        </div>
      </div>
    </>
  );
};
