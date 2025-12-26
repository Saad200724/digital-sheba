import { Search, Globe, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const HeroBanner = () => {
  const [domain, setDomain] = useState('');

  return (
    <section className="bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 rounded-2xl p-6 md:p-10 text-white mb-8">
      <div className="max-w-3xl">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-yellow-300" />
          <span className="text-sm font-medium text-purple-200">Bangladesh's #1 Digital Store</span>
        </div>
        
        <h1 className="text-2xl md:text-4xl font-bold mb-3">
          Secure Your Perfect Domain Name
        </h1>
        <p className="text-purple-200 mb-6 text-sm md:text-base">
          Premium domains, lightning-fast hosting, and exclusive digital subscriptions at unbeatable prices.
        </p>

        {/* Domain Search */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />
            <input
              type="text"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              placeholder="Enter your domain name..."
              className="w-full bg-white/10 backdrop-blur border border-white/20 rounded-xl pl-12 pr-4 py-3 text-white placeholder:text-purple-300 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
          </div>
          <Button className="bg-white text-purple-700 hover:bg-purple-50 font-semibold px-6 py-3 h-auto">
            <Search className="w-5 h-5 mr-2" />
            Search Domain
          </Button>
        </div>

        {/* Domain Extensions */}
        <div className="flex flex-wrap gap-2 mt-4">
          {['.com', '.net', '.org', '.io', '.bd'].map((ext) => (
            <span
              key={ext}
              className="px-3 py-1 text-sm bg-white/10 rounded-full text-purple-200 hover:bg-white/20 cursor-pointer transition-colors"
            >
              {ext}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
