import React from "react";
import logo from "../../assets/fevicon.png";

function LogIn({ onClose }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4">

      {/* Login Popup */}
      <div className="bg-white w-full max-w-2xl min-h-[500px] rounded-2xl shadow-2xl p-8 relative">

        {/* Cancel / Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-5 text-3xl text-gray-500 hover:text-black cursor-pointer"
        >
          ×
        </button>

        {/* Logo */}
        <div className="flex justify-center mb-5">
          <img
            className="w-28 h-28 object-contain"
            src={logo}
            alt="EloraMart Logo"
          />
        </div>

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            India's Last Minute App
          </h1>

          <p className="text-gray-500 mt-2">
            Log in or Sign up
          </p>
        </div>

        {/* Login Form */}
        <div className="max-w-md mx-auto space-y-5">

          {/* Mobile Number */}
          <div>
            <label className="block text-left text-sm font-medium text-gray-700 mb-2">
              Mobile Number
            </label>

            <input
              type="number"
              placeholder="Enter your mobile number"
              className="w-full h-12 border border-gray-300 rounded-lg px-4 outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-left text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full h-12 border border-gray-300 rounded-lg px-4 outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Login Button */}
          <button
            type="button"
            className="w-full h-12 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition"
          >
            Login
          </button>

          {/* Sign Up */}
          <p className="text-center text-gray-600">
            Don't have an account?{" "}
            <span className="text-amber-600 font-semibold cursor-pointer hover:underline">
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
