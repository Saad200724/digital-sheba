import { useState } from 'react';
import { Palette } from 'lucide-react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import ProductCard from '@/components/ProductCard';
import CartSidebar from '@/components/CartSidebar';
import Footer from '@/components/Footer';

const designProducts = [
  {
    id: 'canva-pro',
    name: 'Canva Pro',
    description: '100M+ assets with brand kit',
    price: 499,
    originalPrice: 999,
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg',
    category: 'Design',
    popular: true,
  },
  {
    id: 'figma-pro',
    name: 'Figma Professional',
    description: 'Unlimited projects & version history',
    price: 1299,
    originalPrice: 2499,
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
    category: 'Design',
  },
  {
    id: 'adobe-cc',
    name: 'Adobe Creative Cloud',
    description: 'All Adobe apps included',
    price: 2999,
    originalPrice: 5999,
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Creative_Cloud.svg',
    category: 'Design',
    badge: 'Best Value',
    badgeColor: 'bg-purple-500',
  },
  {
    id: 'capcut-pro',
    name: 'CapCut Pro',
    description: 'Premium video editing features',
    price: 399,
    originalPrice: 799,
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/CapCut_Logo.svg',
    category: 'Design',
  },
  {
    id: 'sketch',
    name: 'Sketch',
    description: 'Professional vector design tool',
    price: 999,
    originalPrice: 1800,
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Sketch_Logo.svg',
    category: 'Design',
  },
  {
    id: 'invision',
    name: 'InVision',
    description: 'Prototyping & collaboration',
    price: 799,
    originalPrice: 1500,
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/InVision_logo.svg',
    category: 'Design',
  },
];

const Design = () => {
  const [activeCategory, setActiveCategory] = useState('design');

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
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                  <Palette className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-foreground">Design Tools</h1>
                  <p className="text-muted-foreground">Create stunning visuals with premium design software</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {designProducts.map((product) => (
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

export default Design;
