import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-300"> {/* Light blue background */}
      <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">Welcome to the World of Learning</h1>
        <p className="text-xl text-teal-600 mb-6">Register for Classes</p>
        
        <div className="flex justify-center gap-4">
          <Link
            to="/login"
            className="py-3 px-6 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="py-3 px-6 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
