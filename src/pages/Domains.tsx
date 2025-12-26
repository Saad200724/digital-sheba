import { useState } from 'react';
import { Globe } from 'lucide-react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import ProductCard from '@/components/ProductCard';
import CartSidebar from '@/components/CartSidebar';
import HeroBanner from '@/components/HeroBanner';
import Footer from '@/components/Footer';

const domainProducts = [
  {
    id: 'com-domain',
    name: '.COM Domain',
    description: 'Most popular domain extension',
    price: 999,
    originalPrice: 1499,
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Domain_name_space.svg',
    category: 'Domains',
    popular: true,
  },
  {
    id: 'net-domain',
    name: '.NET Domain',
    description: 'Perfect for tech companies',
    price: 899,
    originalPrice: 1299,
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Domain_name_space.svg',
    category: 'Domains',
  },
  {
    id: 'org-domain',
    name: '.ORG Domain',
    description: 'Ideal for organizations',
    price: 899,
    originalPrice: 1299,
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Domain_name_space.svg',
    category: 'Domains',
  },
  {
    id: 'io-domain',
    name: '.IO Domain',
    description: 'Popular for startups & tech',
    price: 2999,
    originalPrice: 4999,
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Domain_name_space.svg',
    category: 'Domains',
    badge: 'Tech Choice',
    badgeColor: 'bg-indigo-500',
  },
  {
    id: 'bd-domain',
    name: '.BD Domain',
    description: 'Bangladesh country domain',
    price: 1499,
    originalPrice: 2500,
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Domain_name_space.svg',
    category: 'Domains',
  },
  {
    id: 'dev-domain',
    name: '.DEV Domain',
    description: 'Made for developers',
    price: 1299,
    originalPrice: 2200,
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Domain_name_space.svg',
    category: 'Domains',
  },
];

const Domains = () => {
  const [activeCategory, setActiveCategory] = useState('domains');

  return (
    <div className="min-h-screen bg-muted/30 flex flex-col">
      <div className="md:ml-20">
        <Header onMenuToggle={() => {}} />
      </div>
      <div className="flex flex-1">
        <Sidebar activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
        <div className="flex-1 md:ml-20 flex flex-col">
          <main className="flex-1 p-4 md:p-6">
            <HeroBanner />
            
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-foreground">Domain Names</h1>
                  <p className="text-muted-foreground">Secure your perfect domain name today</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {domainProducts.map((product) => (
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

export default Domains;
