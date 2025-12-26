import { useState } from 'react';
import { Search, ShoppingCart, User, Menu, Heart, ChevronDown } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import telegramIcon from '@/assets/telegram.png';
import whatsappIcon from '@/assets/whatsapp.png';

interface HeaderProps {
  onMenuToggle: () => void;
}

const navLinks = [
  { label: 'Home', href: '#', active: true },
  { label: 'Promotions', href: '#' },
  { label: 'Shop', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Our Contacts', href: '#' },
];

const Header = ({ onMenuToggle }: HeaderProps) => {
  const { toggleCart, totalItems, totalPrice } = useCart();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      {/* Top Row - Logo, Search, Contact */}
      <div className="border-b border-border">
        <div className="flex items-center gap-4 px-4 py-3">
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-lg text-purple-700">DigitalSeba</h1>
              <p className="text-[10px] text-muted-foreground -mt-1">Empowering Your Digital Journey</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl hidden md:flex">
            <div className="flex w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for products"
                className="flex-1 bg-muted border border-border border-r-0 rounded-l-full pl-5 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <select className="bg-muted border border-border border-l-0 border-r-0 px-3 text-sm text-muted-foreground focus:outline-none appearance-none cursor-pointer">
                <option>SELECT CATEGORY</option>
                <option>Streaming</option>
                <option>AI Tools</option>
                <option>Design</option>
                <option>Software</option>
              </select>
              <Button className="rounded-l-none rounded-r-full bg-purple-600 hover:bg-purple-700 px-5">
                <Search className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Contact Section */}
          <div className="flex items-center gap-3 ml-auto">
            {/* Telegram */}
            <a href="https://t.me/digitalseba" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform">
              <img src={telegramIcon} alt="Telegram" className="w-10 h-10 rounded-xl" />
            </a>

            {/* WhatsApp */}
            <a href="https://wa.me/8801321363406" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform">
              <img src={whatsappIcon} alt="WhatsApp" className="w-10 h-10 rounded-xl" />
            </a>

            {/* Support Info */}
            <div className="hidden lg:block">
              <p className="text-sm font-semibold text-foreground">Tech - Chat Support</p>
              <a href="tel:+8801321363406" className="text-sm text-purple-600 hover:underline">
                +8801321363406
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row - Navigation */}
      <div className="bg-white border-b border-border">
        <div className="flex items-center gap-2 px-4 py-2">
          {/* All Categories Button */}
          <Button
            onClick={onMenuToggle}
            className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-4 gap-2"
          >
            <Menu className="w-4 h-4" />
            <span className="hidden sm:inline">All Categories</span>
          </Button>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-1 ml-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  link.active 
                    ? 'bg-purple-100 text-purple-700' 
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 ml-auto">
            {/* Mobile Search */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="w-5 h-5" />
            </Button>

            {/* User */}
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <User className="w-5 h-5 text-muted-foreground" />
            </Button>

            {/* Wishlist */}
            <Button variant="ghost" size="icon" className="relative hidden sm:flex">
              <Heart className="w-5 h-5 text-muted-foreground" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white rounded-full text-[10px] font-bold flex items-center justify-center">
                0
              </span>
            </Button>

            {/* Cart */}
            <Button
              variant="ghost"
              onClick={toggleCart}
              className="relative flex items-center gap-2 px-3"
            >
              <div className="relative">
                <ShoppingCart className="w-5 h-5 text-purple-600" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white rounded-full text-[10px] font-bold flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline text-sm font-medium text-foreground">
                {totalPrice > 0 ? `৳${totalPrice}` : '৳0.00'}
              </span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
