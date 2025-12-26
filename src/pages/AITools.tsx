import { useState } from 'react';
import { Bot } from 'lucide-react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import ProductCard from '@/components/ProductCard';
import CartSidebar from '@/components/CartSidebar';

const aiProducts = [
  {
    id: 'chatgpt-plus',
    name: 'ChatGPT Plus',
    description: 'GPT-4o access with faster responses',
    price: 1999,
    originalPrice: 3500,
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg',
    category: 'AI Tools',
    popular: true,
  },
  {
    id: 'perplexity-pro',
    name: 'Perplexity Pro',
    description: 'Advanced AI search with file uploads',
    price: 1799,
    originalPrice: 3000,
    image: 'https://cdn.prod.website-files.com/6565e9e76af51dc1e42dd4b9/656cc71f8cd53b47cb1e56b1_perplexity_favicon.webp',
    category: 'AI Tools',
    badge: 'New',
    badgeColor: 'bg-green-500',
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    description: 'Create stunning AI artwork',
    price: 999,
    originalPrice: 1800,
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Midjourney_Emblem.png',
    category: 'AI Tools',
  },
  {
    id: 'claude-pro',
    name: 'Claude Pro',
    description: '5x more usage with priority access',
    price: 1899,
    originalPrice: 3200,
    image: 'https://www.anthropic.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4zrzovbb%2Fwebsite%2F9e5b206a31c5bc2f0a01baa7b8b9db4ed5cfdd48-2560x2560.png&w=640&q=75',
    category: 'AI Tools',
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    description: 'AI pair programmer for coding',
    price: 999,
    originalPrice: 1900,
    image: 'https://github.githubassets.com/images/modules/site/copilot/copilot.png',
    category: 'AI Tools',
  },
  {
    id: 'jasper-ai',
    name: 'Jasper AI',
    description: 'AI content writing assistant',
    price: 2499,
    originalPrice: 4500,
    image: 'https://assets-global.website-files.com/60e5f2de011b86acebc30db7/6426a3d7a9c7413e15eb5668_Jasper-Favicon-32x32.png',
    category: 'AI Tools',
  },
];

const AITools = () => {
  const [activeCategory, setActiveCategory] = useState('ai');

  return (
    <div className="min-h-screen bg-muted/30 flex flex-col">
      <Header onMenuToggle={() => {}} />
      <div className="flex flex-1">
        <Sidebar activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
        <main className="flex-1 ml-0 md:ml-20 p-4 md:p-6">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Bot className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-foreground">AI Tools</h1>
                <p className="text-muted-foreground">Supercharge your productivity with cutting-edge AI</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {aiProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </main>
      </div>
      <CartSidebar />
    </div>
  );
};

export default AITools;
