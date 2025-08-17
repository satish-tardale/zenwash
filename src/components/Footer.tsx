import React from 'react';
import { Droplets, Mail, Phone, MapPin, Twitter, Instagram, Linkedin, Facebook } from 'lucide-react';

interface FooterProps {
  onComingSoonClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onComingSoonClick }) => {
  const footerSections = [
    {
      title: 'Services',
      links: ['Wash & Fold', 'Dry Cleaning', 'Alterations', 'Stain Removal', 'Express Service']
    },
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Press', 'Partnerships', 'Investors']
    },
    {
      title: 'Support',
      links: ['Help Center', 'Contact Us', 'Order Tracking', 'Pricing', 'Service Areas']
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Disclaimer']
    }
  ];

  const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, name: 'Twitter', href: '#' },
    { icon: <Instagram className="h-5 w-5" />, name: 'Instagram', href: '#' },
    { icon: <Linkedin className="h-5 w-5" />, name: 'LinkedIn', href: '#' },
    { icon: <Facebook className="h-5 w-5" />, name: 'Facebook', href: '#' }
  ];

  return (
    <footer className="py-24 relative bg-black text-white overflow-hidden">
       <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-cyan-400 to-blue-300 p-2 rounded-lg">
                <Droplets className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Zen Wash</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              The future of laundry delivery is here. Experience premium care, 
              eco-friendly processes, and unmatched convenience.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <Mail className="h-4 w-4 text-cyan-400" />
                <span>hello@zenwash.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <Phone className="h-4 w-4 text-cyan-400" />
                <span>+1 (555) ZEN-WASH</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <MapPin className="h-4 w-4 text-cyan-400" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button
                      onClick={onComingSoonClick}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Be the first to know when Zen Wash launches in your area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full text-gray-900 placeholder-gray-500 bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 disabled:opacity-50"
                disabled
              />
              <button
                onClick={onComingSoonClick}
                className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-400/25 transform hover:scale-105 transition-all duration-300 whitespace-nowrap"
              >
                Join Waitlist
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-3">Newsletter signup available at launch</p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2025 Zen Wash. All rights reserved. | Launching Soon
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">Follow us:</span>
              {socialLinks.map((social, index) => (
                <button
                  key={index}
                  onClick={onComingSoonClick}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Launch Status */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-cyan-400/20 border border-cyan-400/30 rounded-full px-4 py-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-cyan-400 font-medium text-sm">Coming March 2025</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;