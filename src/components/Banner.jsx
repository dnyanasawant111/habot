import React from 'react';
import { FaMapMarkerAlt, FaShoppingBag } from 'react-icons/fa'; // Import the chosen icons
import banner from '/images/banner.png';

const Banner = () => {
  return (
    <div className="relative w-full h-[450px] md:h-[550px] overflow-hidden">
      {/* Banner Image with Black Overlay */}
      <img src={banner} alt="Banner" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Are You a Supplier?</h2>
        <p className="text-lg mb-6">Explore Matching Opportunities.</p>

        {/* Input Boxes and Search Button */}
        <div className="flex flex-col md:flex-row gap-4 items-center w-full md:w-auto mb-6">
          {/* Service Input */}
          <div className="relative w-full md:w-80">
            <span className="absolute inset-y-0 left-3 flex items-center text-[#E7760D]">
              <FaShoppingBag />
            </span>
            <input
              type="text"
              placeholder="Search your required service here"
              className="pl-10 py-2 px-3 rounded-md w-full text-black"
            />
          </div>

          {/* Location Input */}
          <div className="relative w-full md:w-80">
            <span className="absolute inset-y-0 left-3 flex items-center text-[#E7760D]">
              <FaMapMarkerAlt />
            </span>
            <input
              type="text"
              placeholder="Search your desired location here"
              className="pl-10 py-2 px-3 rounded-md w-full text-black"
            />
          </div>

          {/* Search Button */}
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md">
            Search
          </button>
        </div>

        {/* Buyer Info */}
        <p className="text-sm">
          Are you a buyer?{' '}
          <a href="#" className="underline hover:text-green-300">Click here if you are looking to post a requirement</a>
        </p>
      </div>
    </div>
  );
};

export default Banner;
