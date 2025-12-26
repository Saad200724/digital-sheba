import { useState } from 'react';
import { Search, ShoppingCart, User, Heart, ChevronDown } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import telegramIcon from '@/assets/telegram.png';
import whatsappIcon from '@/assets/whatsapp.png';
import logoImage from '@/assets/logo.png';

interface HeaderProps {
  onMenuToggle: () => void;
}

const Header = ({ onMenuToggle }: HeaderProps) => {
  const { toggleCart, totalItems, totalPrice } = useCart();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      {/* Main Header */}
      <div className="px-4 py-3 border-b border-gray-100">
        <div className="flex items-center gap-6">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img src={logoImage} alt="DigitalSeba" className="h-8" />
          </a>

          {/* Search Bar - Clean minimal style */}
          <div className="flex-1 max-w-2xl hidden md:block">
            <div className="flex items-center bg-gray-50 rounded-full border border-gray-200 overflow-hidden focus-within:border-purple-400 focus-within:ring-2 focus-within:ring-purple-100 transition-all">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for products..."
                className="flex-1 bg-transparent px-5 py-2.5 text-sm focus:outline-none"
              />
              <div className="h-6 w-px bg-gray-200" />
              <select className="bg-transparent px-4 py-2.5 text-sm text-gray-600 focus:outline-none cursor-pointer appearance-none pr-8 relative">
                <option>All Categories</option>
                <option>Streaming</option>
                <option>AI Tools</option>
                <option>Design</option>
                <option>Software</option>
              </select>
              <Button className="bg-purple-600 hover:bg-purple-700 rounded-full m-1 px-5">
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Contact & Actions */}
          <div className="flex items-center gap-4 ml-auto">
            {/* Contact Icons */}
            <div className="flex items-center gap-2">
              <a 
                href="https://t.me/digitalseba" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <img src={telegramIcon} alt="Telegram" className="w-9 h-9 rounded-xl shadow-sm" />
              </a>
              <a 
                href="https://wa.me/8801746462630" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <img src={whatsappIcon} alt="WhatsApp" className="w-9 h-9 rounded-xl shadow-sm" />
              </a>
            </div>

            {/* Support Info */}
            <div className="hidden lg:block border-l border-gray-200 pl-4">
              <p className="text-xs text-gray-500">Need Help? Call Us</p>
              <a href="tel:+8801746462630" className="text-sm font-bold text-gray-800 hover:text-purple-600">
                +880 1746-462630
              </a>
            </div>

            {/* Divider */}
            <div className="hidden sm:block h-8 w-px bg-gray-200" />

            {/* User Actions */}
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-purple-600 hover:bg-purple-50">
                <User className="w-5 h-5" />
              </Button>

              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-purple-600 hover:bg-purple-50 relative">
                <Heart className="w-5 h-5" />
              </Button>

              {/* Cart */}
              <Button
                variant="ghost"
                onClick={toggleCart}
                className="text-gray-600 hover:text-purple-600 hover:bg-purple-50 relative flex items-center gap-2"
              >
                <div className="relative">
                  <ShoppingCart className="w-5 h-5" />
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 w-5 h-5 bg-purple-600 text-white rounded-full text-[10px] font-bold flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </div>
                <span className="hidden sm:inline text-sm font-semibold">
                  ৳{totalPrice > 0 ? totalPrice.toLocaleString() : '0'}
                </span>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="mt-3 md:hidden">
          <div className="flex items-center bg-gray-50 rounded-full border border-gray-200 overflow-hidden">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="flex-1 bg-transparent px-4 py-2.5 text-sm focus:outline-none"
            />
            <Button className="bg-purple-600 hover:bg-purple-700 rounded-full m-1 px-4">
              <Search className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="bg-gray-50 px-4 py-2 border-b border-gray-100">
        <div className="flex items-center justify-center gap-4 md:gap-8 text-xs md:text-sm text-gray-600 overflow-x-auto whitespace-nowrap">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Instant Delivery
          </span>
          <span className="hidden sm:flex items-center gap-1.5">
            <span className="text-purple-600">✓</span>
            100% Genuine
          </span>
          <span className="hidden md:flex items-center gap-1.5">
            <span className="text-purple-600">✓</span>
            DBID Verified Seller
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-purple-600">✓</span>
            24/7 Support
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
