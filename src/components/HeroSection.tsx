import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Globe, Server, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [domain, setDomain] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (domain) {
      console.log('Searching for domain:', domain);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px]" />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground) / 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground) / 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-muted-foreground">
            Bangladesh's #1 Digital Services Provider
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="text-foreground">Secure Your Identity.</span>
          <br />
          <span className="gradient-text text-shadow-glow">Empower Your Digital Life.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Premium domains, lightning-fast hosting, and exclusive digital subscriptions — 
          all in one trusted marketplace.
        </motion.p>

        {/* Domain Search Bar */}
        <motion.form
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          onSubmit={handleSearch}
          className="relative max-w-2xl mx-auto mb-8"
        >
          <div className="relative glass-card p-2 glow-border animate-pulse-glow">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-12 h-12">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <input
                type="text"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                placeholder="Find your perfect domain name..."
                className="flex-1 bg-transparent border-none outline-none text-lg text-foreground placeholder:text-muted-foreground px-2"
              />
              <Button
                type="submit"
                size="lg"
                className="btn-premium px-6 md:px-8 h-12 text-white rounded-lg"
              >
                <Search className="w-5 h-5 md:mr-2" />
                <span className="hidden md:inline">Search</span>
              </Button>
            </div>
          </div>

          {/* Domain Extensions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mt-4"
          >
            {['.com', '.net', '.org', '.io', '.co', '.bd'].map((ext) => (
              <span
                key={ext}
                className="px-3 py-1 text-sm text-muted-foreground bg-muted/30 rounded-full hover:bg-muted/50 hover:text-foreground transition-colors cursor-pointer"
              >
                {ext}
              </span>
            ))}
          </motion.div>
        </motion.form>

        {/* Partner Quick Access */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <div className="flex items-center gap-2 px-4 py-2 glass-card rounded-full hover-scale cursor-pointer">
            <Server className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Hostinger</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 glass-card rounded-full hover-scale cursor-pointer">
            <Globe className="w-5 h-5 text-secondary" />
            <span className="text-sm font-medium">Namecheap</span>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16 mt-16"
        >
          {[
            { label: 'Happy Customers', value: '10,000+' },
            { label: 'Domains Registered', value: '25,000+' },
            { label: 'Uptime Guarantee', value: '99.9%' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
