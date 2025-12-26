import { useState } from 'react';
import { Search, ShoppingCart, User, Heart, Menu } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';

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
        <div className="flex items-center justify-between gap-4">
          {/* Menu Button - Mobile only */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={onMenuToggle}>
            <Menu className="w-6 h-6" />
          </Button>

          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-purple-200/50 transition-all border-2 border-white">
              <img src="/apple-touch-icon.png" className="w-6 h-6 invert brightness-0" alt="" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-800 hidden sm:inline">
              DigitalSeba
            </span>
          </a>

          {/* Cart - Mobile view right aligned */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleCart} className="relative">
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-purple-600 text-white rounded-full text-[10px] font-bold flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Button>
          </div>
          
          {/* Search Bar - Desktop */}
          <div className="flex-1 max-w-2xl hidden md:block">
            <div className="flex items-center bg-gray-50 rounded-full border border-gray-200 overflow-hidden focus-within:border-purple-400 focus-within:ring-2 focus-within:ring-purple-100 transition-all">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for products..."
                className="flex-1 bg-transparent px-5 py-2.5 text-sm focus:outline-none"
              />
              <Button className="bg-purple-600 hover:bg-purple-700 rounded-full m-1 px-5">
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Actions - Desktop */}
          <div className="hidden md:flex items-center gap-1">
            <Button variant="ghost" size="icon" className="text-gray-600 hover:text-purple-600 hover:bg-purple-50">
              <User className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-600 hover:text-purple-600 hover:bg-purple-50">
              <Heart className="w-5 h-5" />
            </Button>
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
    </header>
  );
};

export default Header;
