// components/BuyerSupplierSection.tsx
import React, { useState } from 'react';
import youtube from '/images/youtube.jpg';
import { FaYoutube } from 'react-icons/fa';

export default function Buyer() {
  const [isBuyer, setIsBuyer] = useState(true);

  return (
    <div className="flex flex-col md:flex-row max-w-6xl mx-auto my-10 p-6 bg-[#072F57] text-white rounded-lg space-y-6 md:space-y-0 md:space-x-6">
      
      {/* Left Section with Image */}
      <div className="md:w-1/3 flex justify-center items-center relative">
        <img
          src={youtube}
          alt="Product or Business Image"
          className="w-3/4 h-auto object-cover rounded-md"
        />
        <FaYoutube className="absolute text-red-600 text-6xl" />
      </div>

      {/* Right Section with Buyer/Supplier Toggle */}
      <div className="md:w-2/3 p-6">
        <div className="flex justify-between items-center mb-4 relative">
          <div
            onClick={() => setIsBuyer(true)}
            className={`cursor-pointer px-4 py-2 text-lg font-semibold ${
              isBuyer ? 'text-[#EB7150]' : 'text-white'
            }`}
          >
            Buyer
          </div>
          <div
            onClick={() => setIsBuyer(false)}
            className={`cursor-pointer px-4 py-2 text-lg font-semibold ${
              !isBuyer ? 'text-[#EB7150]' : 'text-white'
            }`}
          >
            Supplier
          </div>
          {/* Active Tab Line Indicator */}
          <div
            className={`absolute bottom-0 h-1 bg-[#EB7150] transition-all duration-300 ${
              isBuyer ? 'left-0 w-[50px]' : 'right-0 w-[65px]'
            }`}
          ></div>
        </div>

        {/* Conditional Content */}
        {isBuyer ? (
          <div>
            
            <ul className="list-none space-y-3">
              <li className="flex items-center space-x-2">
                <span className="w-6 h-6 bg-[#0AA06E] rounded-full flex items-center justify-center text-white">✓</span>
                <span>Post your requirements.</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-6 h-6 bg-[#0AA06E] rounded-full flex items-center justify-center text-white">✓</span>
                <span>Sit back for multiple suppliers to contact you.</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-6 h-6 bg-[#0AA06E] rounded-full flex items-center justify-center text-white">✓</span>
                <span>Choose among the suppliers based on the ratings and reviews.</span>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            
            <ul className="list-none space-y-3">
              <li className="flex items-center space-x-2">
                <span className="w-6 h-6 bg-[#0AA06E] rounded-full flex items-center justify-center text-white">✓</span>
                <span>Complte your profile and get verified.</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-6 h-6 bg-[#0AA06E] rounded-full flex items-center justify-center text-white">✓</span>
                <span>Select services tags for relevent opportunity</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-6 h-6 bg-[#0AA06E] rounded-full flex items-center justify-center text-white">✓</span>
                <span>Choose among the suppliers based on the ratings and reviews.</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
