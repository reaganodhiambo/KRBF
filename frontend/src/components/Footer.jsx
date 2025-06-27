import { Trophy, Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';
import { navItems } from '../assets/data';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-sky-500 to-fuchsia-500 p-2 rounded-xl">
                <Trophy className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">KRBF</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              The premier rollball league bringing together the best teams and players from around the world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-sky-600 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-sky-600 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-fuchsia-600 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-red-600 transition-colors duration-200">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {navItems.map(link => (
                <li key={link.id}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* League Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">League Info</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Rules & Regulations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Player Registration</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Team Registration</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Officials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Academy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and match results.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-sky-500 to-fuchsia-500 px-4 py-2 rounded-r-lg hover:from-sky-600 hover:to-fuchsia-600 transition-all duration-200">
                <Mail className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 KRBF. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;