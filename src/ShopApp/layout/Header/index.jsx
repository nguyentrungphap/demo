import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between py-3 text-sm">
          <p>Free International Shipping for Orders above $100 USD. Shop Now</p>
          <p>Free Shipping for all orders!</p>
        </div>
        <div className="flex items-center justify-between py-4">
          <div className="flex border-2 border-white rounded overflow-hidden">
            <input
              type="search"
              className="px-4 py-2 w-80"
              placeholder="Enter your keyword ..."
            />
            <button className="px-3 text-black bg-white">
              <img className="h-5 w-5" src="./image/logo.png" />
            </button>
          </div>
          <div>
            <img
              src="/path-to-kala-logo.png"
              alt="KALA Logo"
              className="h-12"
            />
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/collections" className="hover:text-gray-300">
              ALL COLLECTIONS
            </Link>
            <Link to="/contact" className="hover:text-gray-300">
              CONTACT US
            </Link>
            <div className="flex space-x-4">
              <Link to="/login" className="hover:text-gray-300">
                LOGIN
              </Link>
              <Link to="/register" className="hover:text-gray-300">
                REGISTER
              </Link>
              <img className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
