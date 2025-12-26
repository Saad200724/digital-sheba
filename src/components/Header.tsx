import { useState } from 'react';
import { Search, ShoppingCart, User, Heart, Phone, MessageCircle } from 'lucide-react';
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
    <header className="sticky top-0 z-40 bg-white">
      {/* Main Header Row */}
      <div className="bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 px-4 py-3">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <a href="/" className="flex-shrink-0 bg-white rounded-lg px-2 py-1">
            <img src={logoImage} alt="DigitalSeba" className="h-6 md:h-7" />
          </a>

          {/* Search Bar - Unique rounded style */}
          <div className="flex-1 max-w-xl hidden md:block">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="What are you looking for today?"
                className="w-full bg-white/95 rounded-lg pl-4 pr-12 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-white/50 shadow-lg"
              />
              <Button 
                size="sm" 
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-purple-600 hover:bg-purple-700 rounded-md h-8 w-8 p-0"
              >
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right Section - Contact & Actions */}
          <div className="flex items-center gap-2 ml-auto">
            {/* Support Contact */}
            <div className="hidden lg:flex items-center gap-3 bg-white/10 backdrop-blur rounded-lg px-3 py-2">
              <div className="flex items-center gap-2">
                <a href="https://t.me/digitalseba" target="_blank" rel="noopener noreferrer">
                  <img src={telegramIcon} alt="Telegram" className="w-8 h-8 rounded-lg hover:scale-110 transition-transform" />
                </a>
                <a href="https://wa.me/8801746462630" target="_blank" rel="noopener noreferrer">
                  <img src={whatsappIcon} alt="WhatsApp" className="w-8 h-8 rounded-lg hover:scale-110 transition-transform" />
                </a>
              </div>
              <div className="border-l border-white/20 pl-3">
                <p className="text-xs text-white/80">24/7 Support</p>
                <a href="tel:+8801746462630" className="text-sm font-semibold text-white hover:text-purple-200">
                  +880 1746-462630
                </a>
              </div>
            </div>

            {/* Mobile Contact Icons */}
            <div className="flex lg:hidden items-center gap-1">
              <a href="https://t.me/digitalseba" target="_blank" rel="noopener noreferrer">
                <img src={telegramIcon} alt="Telegram" className="w-9 h-9 rounded-lg" />
              </a>
              <a href="https://wa.me/8801746462630" target="_blank" rel="noopener noreferrer">
                <img src={whatsappIcon} alt="WhatsApp" className="w-9 h-9 rounded-lg" />
              </a>
            </div>

            {/* User Actions */}
            <div className="flex items-center">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hidden sm:flex">
                <User className="w-5 h-5" />
              </Button>

              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 relative hidden sm:flex">
                <Heart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white rounded-full text-[10px] font-bold flex items-center justify-center">
                  0
                </span>
              </Button>

              {/* Cart */}
              <Button
                variant="ghost"
                onClick={toggleCart}
                className="text-white hover:bg-white/10 relative flex items-center gap-2"
              >
                <div className="relative">
                  <ShoppingCart className="w-5 h-5" />
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white rounded-full text-[10px] font-bold flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </div>
                <span className="hidden sm:inline text-sm font-medium">
                  ৳{totalPrice > 0 ? totalPrice : '0'}
                </span>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="mt-3 md:hidden">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full bg-white/95 rounded-lg pl-4 pr-12 py-2.5 text-sm focus:outline-none shadow-lg"
            />
            <Button 
              size="sm" 
              className="absolute right-1 top-1/2 -translate-y-1/2 bg-purple-600 hover:bg-purple-700 rounded-md h-8 w-8 p-0"
            >
              <Search className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Info Bar */}
      <div className="bg-gradient-to-r from-amber-400 to-orange-400 px-4 py-1.5">
        <div className="flex items-center justify-center gap-6 text-sm font-medium text-amber-900 overflow-x-auto whitespace-nowrap">
          <span className="flex items-center gap-1">
            🔥 Hot Deals Available
          </span>
          <span className="hidden sm:flex items-center gap-1">
            ⚡ Instant Delivery
          </span>
          <span className="hidden md:flex items-center gap-1">
            ✅ 100% Genuine Products
          </span>
          <span className="hidden lg:flex items-center gap-1">
            🛡️ DBID Verified Seller
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
