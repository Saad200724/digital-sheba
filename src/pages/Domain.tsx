import { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ExternalLink, ArrowLeft, Globe, Shield, Zap, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

const domainProviders = [
  {
    name: 'Hostinger',
    logo: 'https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=100&h=100&fit=crop',
    description: 'Affordable domains with free WHOIS privacy',
    price: 'From $9.99/year',
    features: ['Free WHOIS Privacy', '24/7 Support', 'Easy DNS Management'],
    color: 'from-purple-500 to-purple-600',
    url: 'https://www.hostinger.com/domain-name-search'
  },
  {
    name: 'Namecheap',
    logo: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=100&h=100&fit=crop',
    description: 'Best value domain registrar with excellent support',
    price: 'From $8.88/year',
    features: ['Free WhoisGuard', 'DNS Management', 'Domain Forwarding'],
    color: 'from-orange-500 to-red-500',
    url: 'https://www.namecheap.com/domains/'
  },
  {
    name: 'Name.com',
    logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop',
    description: 'Simple and reliable domain registration',
    price: 'From $10.99/year',
    features: ['Free URL Forwarding', 'DNS Templates', 'Email Forwarding'],
    color: 'from-blue-500 to-blue-600',
    url: 'https://www.name.com/domain/search'
  },
  {
    name: '.TECH Domains',
    logo: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&h=100&fit=crop',
    description: 'Perfect for tech startups and developers',
    price: 'From $49.99/year',
    features: ['Tech-focused TLD', 'Startup Discounts', 'Premium Support'],
    color: 'from-cyan-500 to-teal-500',
    url: 'https://get.tech/'
  },
  {
    name: 'GoDaddy',
    logo: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=100&h=100&fit=crop',
    description: 'World\'s largest domain registrar',
    price: 'From $11.99/year',
    features: ['Domain Auctions', '24/7 Phone Support', 'Domain Broker'],
    color: 'from-green-500 to-emerald-500',
    url: 'https://www.godaddy.com/domains'
  },
  {
    name: 'Google Domains',
    logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100&h=100&fit=crop',
    description: 'Simple pricing with Google integration',
    price: 'From $12/year',
    features: ['Privacy Protection', 'Google Workspace', 'Cloud DNS'],
    color: 'from-yellow-500 to-orange-500',
    url: 'https://domains.google/'
  }
];

const Domain = () => {
  const [searchParams] = useSearchParams();
  const domain = searchParams.get('name') || '';
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header onMenuToggle={() => {}} />
      <div className="flex flex-1">
        <Sidebar activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
        <main className="flex-1 ml-0 md:ml-20 pt-4 pb-12 px-4 md:px-8">
          {/* Back Button */}
          <Link to="/">
            <Button variant="ghost" className="mb-6 gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>

          {/* Domain Info Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 md:p-10 text-white mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <p className="text-green-100 text-sm">Domain Available!</p>
                <h1 className="text-2xl md:text-3xl font-bold">{domain || 'yourdomain.com'}</h1>
              </div>
            </div>
            <p className="text-green-100 mb-6">
              Great news! This domain is available for registration. Choose from our trusted partners below.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                <Shield className="w-5 h-5" />
                <span className="text-sm">Verified Registrars</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                <Zap className="w-5 h-5" />
                <span className="text-sm">Instant Activation</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                <Clock className="w-5 h-5" />
                <span className="text-sm">24/7 Support</span>
              </div>
            </div>
          </motion.div>

          {/* Domain Providers */}
          <h2 className="text-xl font-bold text-foreground mb-6">Choose Your Domain Registrar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {domainProviders.map((provider, index) => (
              <motion.div
                key={provider.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all group"
              >
                <div className={`bg-gradient-to-r ${provider.color} p-4`}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                      <img 
                        src={provider.logo} 
                        alt={provider.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{provider.name}</h3>
                      <p className="text-white/80 text-sm">{provider.price}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-muted-foreground text-sm mb-4">{provider.description}</p>
                  <ul className="space-y-2 mb-4">
                    {provider.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                        <Check className="w-4 h-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href={`${provider.url}?domain=${encodeURIComponent(domain)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full gap-2 group-hover:bg-primary">
                      Register at {provider.name}
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tips Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-10 bg-muted/50 rounded-xl p-6"
          >
            <h3 className="font-bold text-foreground mb-4">💡 Tips for Choosing a Domain Registrar</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>• Compare renewal prices, not just initial registration costs</li>
              <li>• Look for free WHOIS privacy protection</li>
              <li>• Check if DNS management and email forwarding are included</li>
              <li>• Consider the quality of customer support</li>
              <li>• Ensure easy domain transfer options if needed</li>
            </ul>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Domain;
