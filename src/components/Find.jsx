// components/SupplierSection.tsx
import React from 'react';

export default function Find() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-[#E8FBFF] p-6 rounded-lg max-w-6xl mx-auto my-10">
      
      {/* Left Side Text */}
      <div className="flex flex-col items-start space-y-2">
        <h2 className="text-2xl font-semibold text-[#072F57]">Let Suppliers Find You</h2>
       
      </div>
      
      {/* Right Side Button */}
      <div className="mt-4 md:mt-0">
        <button className="px-6 py-3 bg-[#EB7150] text-white font-semibold rounded-lg transition duration-300 hover:bg-[#d9603f]">
          Get Verified
        </button>
      </div>
    </div>
  );
}
