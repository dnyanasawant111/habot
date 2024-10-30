// components/HabotSection.tsx
export default function Location() {
    return (
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto my-10 p-6 space-y-6 md:space-y-0 md:space-x-6">
        
        {/* Left Section */}
        <div className="md:w-1/2 text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to dive into HABOT?</h2>
          <p className="text-gray-600 mb-6">
            Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. 
            Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first 
            step towards realizing your entrepreneurial dreams.
          </p>
          <button className="bg-[#00732F] text-white py-2 px-4 rounded-md hover:bg-[#005922]">
            Sign up Today! 
          </button>
        </div>
  
        {/* Right Section */}
        <div className="md:w-1/2 grid grid-cols-2 gap-4">
          {["Abu Dhabi ", "Dubai", "Sharjah & Ajman", "Fujairah", "Ras Al Khaimah", "Ras Al Khaimah"].map((country, index) => (
            <div
              key={index}
              className="flex items-center justify-center border border-[#E7760D] p-4 text-black font-semibold rounded-md text-center"
            >
              {country}
            </div>
          ))}
        </div>
      </div>
    );
  }
  