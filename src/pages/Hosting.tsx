import { useState } from 'react';
import { Server } from 'lucide-react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import ProductCard from '@/components/ProductCard';
import CartSidebar from '@/components/CartSidebar';
import Footer from '@/components/Footer';

const hostingProducts = [
  {
    id: 'hostinger-premium',
    name: 'Hostinger Premium',
    description: '100 websites with free domain',
    price: 1499,
    originalPrice: 2999,
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Hostinger_logo.svg',
    category: 'Hosting',
    popular: true,
  },
  {
    id: 'namecheap-stellar',
    name: 'Namecheap Stellar',
    description: 'Reliable hosting with cPanel',
    price: 999,
    originalPrice: 1999,
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Namecheap_Logo.svg',
    category: 'Hosting',
  },
  {
    id: 'bluehost-plus',
    name: 'Bluehost Plus',
    description: 'Unlimited websites & storage',
    price: 1299,
    originalPrice: 2499,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Bluehost-logo.svg/512px-Bluehost-logo.svg.png',
    category: 'Hosting',
  },
  {
    id: 'siteground-grow',
    name: 'SiteGround GrowBig',
    description: 'Managed WordPress hosting',
    price: 1799,
    originalPrice: 3200,
    image: 'https://upload.wikimedia.org/wikipedia/en/a/a1/Siteground_Logo.png',
    category: 'Hosting',
    badge: 'Premium',
    badgeColor: 'bg-cyan-500',
  },
  {
    id: 'cloudflare-pro',
    name: 'Cloudflare Pro',
    description: 'CDN & security for websites',
    price: 1999,
    originalPrice: 3500,
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Cloudflare_Logo.png',
    category: 'Hosting',
  },
  {
    id: 'digitalocean',
    name: 'DigitalOcean Credits',
    description: '$100 cloud hosting credits',
    price: 799,
    originalPrice: 1500,
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/DigitalOcean_logo.svg',
    category: 'Hosting',
  },
];

const Hosting = () => {
  const [activeCategory, setActiveCategory] = useState('hosting');

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
                <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
                  <Server className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-foreground">Web Hosting</h1>
                  <p className="text-muted-foreground">Blazing fast servers for your websites</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {hostingProducts.map((product) => (
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

export default Hosting;
