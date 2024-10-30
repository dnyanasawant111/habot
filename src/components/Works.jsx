// components/HowItWorksSection.tsx
import { FaUserAlt, FaClipboardList, FaHandshake, FaUserCheck, FaCommentDots, FaExchangeAlt } from 'react-icons/fa';

export default function Works() {
  return (
    <div className="max-w-6xl mx-auto my-10 p-6">
      
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">How it works?</h2>
        <p className="text-gray-600">
          Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, 
          and build successful business relationships, sharing valuable feedback.
        </p>
      </div>

      {/* Boxes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0"> {/* Set gap-0 to remove space between boxes */}
        
        {/* Box 1 */}
        <div className="flex flex-col items-center p-6 bg-white shadow-md text-center"> {/* Removed rounded-lg */}
          <FaUserAlt className="text-black text-3xl mb-4" />
          <h3 className="text-lg font-semibold">Select Your Role and Sign Up</h3>
        </div>
        
        {/* Box 2 */}
        <div className="flex flex-col items-center p-6 bg-[#E8FBFF] shadow-md text-center"> {/* Removed rounded-lg */}
          <FaClipboardList className="text-black text-3xl mb-4" />
          <h3 className="text-lg font-semibold">Buyers Post Your Requirements</h3>
        </div>
        
        {/* Box 3 */}
        <div className="flex flex-col items-center p-6 bg-white shadow-md text-center"> {/* Removed rounded-lg */}
          <FaHandshake className="text-black text-3xl mb-4" />
          <h3 className="text-lg font-semibold">Review, Select, and Contact the Best Suppliers</h3>
        </div>
        
        {/* Box 4 */}
        <div className="flex flex-col items-center p-6 bg-[#E8FBFF] shadow-md text-center"> {/* Removed rounded-lg */}
          <FaUserCheck className="text-black text-3xl mb-4" />
          <h3 className="text-lg font-semibold">Suppliers Complete Your Profile and Get Notified for Opportunities</h3>
        </div>
        
        {/* Box 5 */}
        <div className="flex flex-col items-center p-6 bg-white shadow-md text-center"> {/* Removed rounded-lg */}
          <FaCommentDots className="text-black text-3xl mb-4" />
          <h3 className="text-lg font-semibold">Contact Buyers and Share Your Quote for the Service</h3>
        </div>
        
        {/* Box 6 */}
        <div className="flex flex-col items-center p-6 bg-[#E8FBFF] shadow-md text-center"> {/* Removed rounded-lg */}
          <FaExchangeAlt className="text-black text-3xl mb-4" />
          <h3 className="text-lg font-semibold">Both Parties Connect and Make Business, Leave Feedback</h3>
        </div>

      </div>
    </div>
  );
}
