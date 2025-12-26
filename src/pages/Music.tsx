import { useState } from 'react';
import { Headphones } from 'lucide-react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import ProductCard from '@/components/ProductCard';
import CartSidebar from '@/components/CartSidebar';
import Footer from '@/components/Footer';

const musicProducts = [
  {
    id: 'spotify-premium',
    name: 'Spotify Premium',
    description: 'Ad-free music with offline mode',
    price: 149,
    originalPrice: 299,
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg',
    category: 'Music',
    popular: true,
  },
  {
    id: 'apple-music',
    name: 'Apple Music',
    description: '100M+ songs with lossless audio',
    price: 179,
    originalPrice: 350,
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Apple_Music_icon.svg',
    category: 'Music',
  },
  {
    id: 'youtube-music',
    name: 'YouTube Music Premium',
    description: 'Music videos & audio streaming',
    price: 129,
    originalPrice: 250,
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Youtube_Music_icon.svg',
    category: 'Music',
  },
  {
    id: 'tidal-hifi',
    name: 'TIDAL HiFi',
    description: 'Lossless & Dolby Atmos audio',
    price: 299,
    originalPrice: 500,
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/TIDAL_2023_logo.svg',
    category: 'Music',
    badge: 'HiFi',
    badgeColor: 'bg-emerald-500',
  },
  {
    id: 'deezer-premium',
    name: 'Deezer Premium',
    description: 'Personalized music streaming',
    price: 149,
    originalPrice: 280,
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Deezer_logo_2023.svg',
    category: 'Music',
  },
  {
    id: 'soundcloud-go',
    name: 'SoundCloud Go+',
    description: 'Indie & mainstream music',
    price: 199,
    originalPrice: 350,
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Antu_soundcloud.svg',
    category: 'Music',
  },
];

const Music = () => {
  const [activeCategory, setActiveCategory] = useState('music');

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
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <Headphones className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-foreground">Music Streaming</h1>
                  <p className="text-muted-foreground">Premium music subscriptions for every taste</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {musicProducts.map((product) => (
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

export default Music;
