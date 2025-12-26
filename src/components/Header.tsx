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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm md:h-[110px]">
      {/* Top Banner - Mobile optimized */}
      <div className="bg-purple-600 text-white py-1.5 px-4 text-[10px] md:text-xs text-center font-medium">
        সকাল ৯টা থেকে রাত ৯টা পর্যন্ত কল করুন <a href="tel:+8801746462630" className="underline">+৮৮০ ১৭৪৬-৪৬২৬৩০</a>
      </div>
      
      {/* Main Header */}
      <div className="px-4 py-3 border-b border-gray-100 flex flex-col gap-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img src={logoImage} alt="DigitalSeba" className="h-7 md:h-8" />
          </a>

          {/* Search Bar - Desktop */}
          <div className="flex-1 max-w-2xl hidden md:block">
            <div className="flex items-center bg-gray-50 rounded-full border border-gray-200 overflow-hidden focus-within:border-purple-400 focus-within:ring-2 focus-within:ring-purple-100 transition-all">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="What can we help you find?"
                className="flex-1 bg-transparent px-5 py-2.5 text-sm focus:outline-none"
              />
              <Button className="bg-purple-600 hover:bg-purple-700 rounded-full m-1 px-5">
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* User Actions - Desktop */}
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-gray-600 hover:text-purple-600">
              <User className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              onClick={toggleCart}
              className="text-gray-600 hover:text-purple-600 relative flex items-center gap-2"
            >
              <div className="relative">
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 w-4 h-4 bg-purple-600 text-white rounded-full text-[10px] font-bold flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </div>
            </Button>
          </div>

          {/* Mobile Cart Trigger */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleCart}
            className="md:hidden text-gray-600 relative"
          >
            <ShoppingCart className="w-6 h-6" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-purple-600 text-white rounded-full text-[10px] font-bold flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Button>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden">
          <div className="flex items-center bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="What can we help you find?"
              className="flex-1 bg-transparent px-4 py-2 text-sm focus:outline-none"
            />
            <Button variant="ghost" className="text-purple-600 p-2">
              <Search className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
