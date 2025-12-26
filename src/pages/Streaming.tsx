import { useState } from 'react';
import { Tv } from 'lucide-react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import ProductCard from '@/components/ProductCard';
import CartSidebar from '@/components/CartSidebar';
import Footer from '@/components/Footer';

const streamingProducts = [
  {
    id: 'netflix-premium',
    name: 'Netflix Premium',
    description: '4K Ultra HD streaming with 4 screens',
    price: 399,
    originalPrice: 650,
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
    category: 'Streaming',
    popular: true,
  },
  {
    id: 'spotify-premium',
    name: 'Spotify Premium',
    description: 'Ad-free music with offline mode',
    price: 149,
    originalPrice: 299,
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg',
    category: 'Streaming',
  },
  {
    id: 'youtube-premium',
    name: 'YouTube Premium',
    description: 'Ad-free videos + YouTube Music',
    price: 199,
    originalPrice: 399,
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg',
    category: 'Streaming',
    badge: 'Hot Deal',
    badgeColor: 'bg-red-500',
  },
  {
    id: 'disney-plus',
    name: 'Disney+ Premium',
    description: 'Stream Disney, Marvel, Star Wars',
    price: 299,
    originalPrice: 499,
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg',
    category: 'Streaming',
  },
  {
    id: 'hbo-max',
    name: 'HBO Max',
    description: 'Premium movies and series',
    price: 349,
    originalPrice: 599,
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg',
    category: 'Streaming',
  },
  {
    id: 'prime-video',
    name: 'Amazon Prime Video',
    description: 'Movies, series & exclusive content',
    price: 249,
    originalPrice: 450,
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg',
    category: 'Streaming',
  },
];

const Streaming = () => {
  const [activeCategory, setActiveCategory] = useState('streaming');

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
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <Tv className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-foreground">Streaming Services</h1>
                  <p className="text-muted-foreground">Premium entertainment subscriptions at unbeatable prices</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {streamingProducts.map((product) => (
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

export default Streaming;
