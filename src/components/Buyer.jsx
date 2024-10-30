// components/BuyerSupplierSection.tsx
import React, { useState } from 'react';

export default function Buyer() {
  const [isBuyer, setIsBuyer] = useState(true);

  return (
    <div className="flex flex-col md:flex-row max-w-6xl mx-auto my-10 p-6 bg-[#072F57] text-white rounded-lg space-y-6 md:space-y-0 md:space-x-6">
      
      {/* Left Section with Image */}
      <div className="md:w-1/2 flex justify-center items-center">
        <img
          src="/path/to/your-image.jpg"
          alt="Product or Business Image"
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {/* Right Section with Buyer/Supplier Toggle */}
      <div className="md:w-1/2 p-6">
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={() => setIsBuyer(true)}
            className={`px-4 py-2 rounded-lg ${isBuyer ? 'bg-[#005092]' : 'bg-[#4C7089]'} transition-all duration-200`}
          >
            Buyer
          </button>
          <button
            onClick={() => setIsBuyer(false)}
            className={`px-4 py-2 rounded-lg ${!isBuyer ? 'bg-[#005092]' : 'bg-[#4C7089]'} transition-all duration-200`}
          >
            Supplier
          </button>
        </div>

        {/* Conditional Content */}
        {isBuyer ? (
          <div>
            <h3 className="text-xl font-bold mb-4">Buyer</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Post your requirements.</li>
              <li>Sit back for multiple suppliers to contact you.</li>
              <li>Choose among the suppliers based on the ratings and reviews.</li>
            </ul>
          </div>
        ) : (
          <div>
            <h3 className="text-xl font-bold mb-4">Supplier</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Post your requirements.</li>
              <li>Sit back for multiple suppliers to contact you.</li>
              <li>Choose among the suppliers based on the ratings and reviews.</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
