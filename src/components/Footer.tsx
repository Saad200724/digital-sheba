import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logoImage from '@/assets/logo.png';
import { 
  Facebook, 
  Instagram, 
  Youtube, 
  Send, 
  Mail, 
  Phone, 
  MapPin,
  CheckCircle,
  Shield,
  MessageCircle
} from 'lucide-react';

const categories = [
  { label: 'Streaming', href: '/streaming', badge: 'Popular' },
  { label: 'AI Tools', href: '/ai-tools', badge: 'Hot' },
  { label: 'Design Tools', href: '/design' },
  { label: 'Software', href: '/software' },
  { label: 'Web Hosting', href: '/hosting' },
];

const usefulLinks = [
  { label: 'About', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Contact Us', href: '#' },
  { label: 'Promotions', href: '#' },
  { label: 'My Account', href: '#' },
  { label: 'Orders', href: '#' },
];

const siteLinks = [
  { label: 'FAQ', href: '#' },
  { label: 'Return and Refund Policy', href: '#' },
  { label: 'Terms and Conditions', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Order Cancellation Policy', href: '#' },
  { label: 'Order Tracking', href: '#' },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:bg-blue-600' },
  { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:bg-red-600' },
  { icon: MessageCircle, href: 'https://wa.me/8801746462630', label: 'WhatsApp', color: 'hover:bg-green-600' },
  { icon: Send, href: 'https://t.me/digitalseba', label: 'Telegram', color: 'hover:bg-sky-500' },
];

const paymentMethods = [
  'VISA', 'Mastercard', 'AMEX', 'bKash', 'Nagad', 'Rocket', 'DBBL', 'Upay', 'SureCash', 'Binance'
];

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                <img src="/apple-touch-icon.png" className="w-8 h-8 invert brightness-0" alt="DigitalSeba" />
              </div>
            </Link>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Our motive is to provide digital service or original license to the customer at a relatively low price.{' '}
              <a href="#" className="text-purple-600 hover:underline font-medium">Read More...</a>
            </p>
            
            <h4 className="text-purple-600 font-semibold mb-3">Subscribe us</h4>
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center transition-all ${social.color} hover:text-white`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-purple-600 font-semibold mb-4">Categories</h4>
            <ul className="space-y-2.5">
              {categories.map((link) => (
                <li key={link.label} className="flex items-center gap-2">
                  <Link
                    to={link.href}
                    className="text-sm text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                  {link.badge && (
                    <span className="text-[10px] bg-orange-500 text-white px-1.5 py-0.5 rounded font-medium">
                      {link.badge}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-purple-600 font-semibold mb-4">Useful Links</h4>
            <ul className="space-y-2.5">
              {usefulLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Site Links */}
          <div>
            <h4 className="text-purple-600 font-semibold mb-4">Site Links</h4>
            <ul className="space-y-2.5">
              {siteLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Need Help + Verification */}
          <div>
            <h4 className="text-purple-600 font-semibold mb-4">Need Help?</h4>
            <ul className="space-y-3 mb-6">
              <li>
                <a href="mailto:info@digitalseba.com.bd" className="flex items-start gap-2 text-sm text-gray-600 hover:text-purple-600 transition-colors">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  info@digitalseba.com.bd
                </a>
              </li>
              <li>
                <a href="https://wa.me/8801746462630" className="flex items-start gap-2 text-sm text-gray-600 hover:text-purple-600 transition-colors">
                  <MessageCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  WhatsApp/Telegram: +8801746462630
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                Dhaka, Bangladesh
              </li>
            </ul>

            {/* Verification Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-xl p-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">We're Govt. Certified</p>
                  <p className="text-xs text-purple-600 font-medium">Digital Business Provider</p>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-600" />
                <span className="text-xs text-gray-600">DBID Verified Seller</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Payment Methods Bar */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-sm text-gray-500 font-medium mr-2">Pay with</span>
            {paymentMethods.map((method) => (
              <span 
                key={method}
                className="px-3 py-1.5 bg-white border border-gray-200 rounded-md text-xs font-medium text-gray-700 shadow-sm"
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500 text-center md:text-left">
              © {new Date().getFullYear()} digitalseba.com.bd All rights reserved
            </p>
            
            {/* Floating Contact Button */}
            <a 
              href="https://wa.me/8801746462630"
              target="_blank"
              rel="noopener noreferrer"
              className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition-all hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm font-medium">Contact us</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
