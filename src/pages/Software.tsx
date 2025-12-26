import { useState } from 'react';
import { Monitor } from 'lucide-react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import ProductCard from '@/components/ProductCard';
import CartSidebar from '@/components/CartSidebar';
import Footer from '@/components/Footer';

const softwareProducts = [
  {
    id: 'windows-11-pro',
    name: 'Windows 11 Pro',
    description: 'Lifetime license with official activation',
    price: 1299,
    originalPrice: 2999,
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Windows_11_logo.svg',
    category: 'Software',
    popular: true,
  },
  {
    id: 'office-365',
    name: 'Microsoft 365',
    description: 'Complete Office suite with 1TB storage',
    price: 799,
    originalPrice: 1499,
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_365_%282022%29.svg',
    category: 'Software',
  },
  {
    id: 'grammarly',
    name: 'Grammarly Premium',
    description: 'Advanced writing suggestions',
    price: 899,
    originalPrice: 1799,
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Grammarly_Logo.svg',
    category: 'Software',
  },
  {
    id: 'nordvpn',
    name: 'NordVPN',
    description: 'Secure & fast VPN service',
    price: 499,
    originalPrice: 999,
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/NordVPN_logo.svg',
    category: 'Software',
    badge: 'Best Seller',
    badgeColor: 'bg-orange-500',
  },
  {
    id: 'malwarebytes',
    name: 'Malwarebytes Premium',
    description: 'Advanced malware protection',
    price: 399,
    originalPrice: 799,
    image: 'https://upload.wikimedia.org/wikipedia/en/6/6a/Malwarebytes_Logo_%282016%29.svg',
    category: 'Software',
  },
  {
    id: 'lastpass',
    name: 'LastPass Premium',
    description: 'Secure password manager',
    price: 299,
    originalPrice: 599,
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/LastPass_logo.svg',
    category: 'Software',
  },
];

const Software = () => {
  const [activeCategory, setActiveCategory] = useState('software');

  return (
    <div className="min-h-screen bg-muted/30 flex flex-col">
      <div className="md:ml-20">
        <Header onMenuToggle={() => {}} />
      </div>
      <div className="flex flex-1">
        <Sidebar activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
        <div className="flex-1 md:ml-20 flex flex-col">
          <main className="flex-1 p-4 md:p-6">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Monitor className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-foreground">Software & Licenses</h1>
                  <p className="text-muted-foreground">Genuine keys with lifetime support</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {softwareProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </main>
          <Footer />
        </div>
      </div>
      <CartSidebar />
    </div>
  );
};

export default Software;
