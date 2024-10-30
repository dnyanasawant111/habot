// components/Footer.tsx
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import logo from '/images/headerlogo.png';

export default function Footer() {
  return (
    <footer className="bg-[#123557] text-white py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-8">

        {/* Left Section with Logo and Links */}
        <div className="flex flex-col md:flex-row gap-8 w-full md:w-auto">
          
          {/* Company Logo */}
          <div className="flex items-center mb-6 md:mb-0">
            <img src={logo} alt="Company Logo" className="h-20 w-auto" /> 
          </div>

          {/* Links Section */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Company Section */}
            <div className="text-left">
              <h3 className="text-lg font-semibold mb-2">Company</h3>
              <ul className="space-y-1">
                <li><a href="#" className="text-gray-300 hover:text-white">About</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">FAQ</a></li>
              </ul>
            </div>

            {/* Terms Section */}
            <div className="text-left">
              <h3 className="text-lg font-semibold mb-2">Terms</h3>
              <ul className="space-y-1">
                <li><a href="#" className="text-gray-300 hover:text-white">Data Privacy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Terms</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Accessibility</a></li>
              </ul>
            </div>

            {/* Related Section */}
            <div className="text-left">
              <h3 className="text-lg font-semibold mb-2">Related</h3>
              <ul className="space-y-1">
                <li><a href="#" className="text-gray-300 hover:text-white">Find Buyers</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Feedback</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Section with Social Media Icons */}
        <div className="flex space-x-4 mt-8 md:mt-12">
          <a href="#" className="p-2 rounded-full bg-white text-[#123557] hover:bg-gray-300">
            <FaLinkedinIn />
          </a>
          <a href="#" className="p-2 rounded-full bg-white text-[#123557] hover:bg-gray-300">
            <FaTwitter />
          </a>
          <a href="#" className="p-2 rounded-full bg-white text-[#123557] hover:bg-gray-300">
            <FaFacebookF />
          </a>
          <a href="#" className="p-2 rounded-full bg-white text-[#123557] hover:bg-gray-300">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
