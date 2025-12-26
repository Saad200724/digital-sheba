import { useState } from 'react';
import { Briefcase } from 'lucide-react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import ProductCard from '@/components/ProductCard';
import CartSidebar from '@/components/CartSidebar';

const professionalProducts = [
  {
    id: 'linkedin-premium',
    name: 'LinkedIn Premium',
    description: 'InMail credits & profile insights',
    price: 1499,
    originalPrice: 2500,
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
    category: 'Professional',
    popular: true,
  },
  {
    id: 'zoom-pro',
    name: 'Zoom Pro',
    description: 'Unlimited meetings & cloud storage',
    price: 899,
    originalPrice: 1599,
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Zoom_Logo_2022.svg',
    category: 'Professional',
  },
  {
    id: 'slack-pro',
    name: 'Slack Pro',
    description: 'Unlimited message history & apps',
    price: 799,
    originalPrice: 1400,
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg',
    category: 'Professional',
  },
  {
    id: 'notion-plus',
    name: 'Notion Plus',
    description: 'Unlimited blocks & file uploads',
    price: 599,
    originalPrice: 1100,
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg',
    category: 'Professional',
    badge: 'Popular',
    badgeColor: 'bg-blue-500',
  },
  {
    id: 'asana-premium',
    name: 'Asana Premium',
    description: 'Advanced project management',
    price: 999,
    originalPrice: 1800,
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Asana_logo.svg',
    category: 'Professional',
  },
  {
    id: 'monday-pro',
    name: 'Monday.com Pro',
    description: 'Team collaboration & workflows',
    price: 1199,
    originalPrice: 2200,
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Monday_logo.svg',
    category: 'Professional',
  },
];

const Professional = () => {
  const [activeCategory, setActiveCategory] = useState('professional');

  return (
    <div className="min-h-screen bg-muted/30 flex flex-col">
      <Header onMenuToggle={() => {}} />
      <div className="flex flex-1">
        <Sidebar activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
        <main className="flex-1 ml-0 md:ml-20 p-4 md:p-6">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-foreground">Professional Tools</h1>
                <p className="text-muted-foreground">Enterprise-grade tools for business success</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {professionalProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </main>
      </div>
      <CartSidebar />
    </div>
  );
};

export default Professional;
