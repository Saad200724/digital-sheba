import { motion } from 'framer-motion';
import { Tv, Linkedin, Palette, Crown } from 'lucide-react';
import ProductCard from './ProductCard';

const subscriptions = [
  {
    id: 'netflix-premium',
    name: 'Netflix Premium',
    description: 'Ultra HD streaming with 4 screens. Enjoy unlimited movies & shows.',
    price: 399,
    originalPrice: 650,
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
    category: 'Streaming',
    features: ['4K Ultra HD', '4 Screens', 'Download & Watch', 'Ad-Free'],
    popular: true,
  },
  {
    id: 'linkedin-premium',
    name: 'LinkedIn Premium',
    description: 'Unlock InMail, see who viewed your profile, and access learning courses.',
    price: 1499,
    originalPrice: 2500,
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
    category: 'Professional',
    features: ['InMail Credits', 'Profile Insights', 'LinkedIn Learning', 'Job Insights'],
    badge: 'Career Boost',
  },
  {
    id: 'canva-pro',
    name: 'Canva Pro',
    description: 'Premium design tools with 100M+ assets, templates, and brand kits.',
    price: 499,
    originalPrice: 999,
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg',
    category: 'Design',
    features: ['100M+ Assets', 'Brand Kit', 'Background Remover', 'Magic Resize'],
    badge: 'Best Value',
  },
  {
    id: 'spotify-premium',
    name: 'Spotify Premium',
    description: 'Ad-free music, offline listening, and unlimited skips.',
    price: 149,
    originalPrice: 299,
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg',
    category: 'Music',
    features: ['Ad-Free Music', 'Offline Mode', 'High Quality Audio', 'Unlimited Skips'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const SubscriptionsSection = () => {
  return (
    <section id="subscriptions" className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-card/30" />
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4">
            <Crown className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-muted-foreground">Premium Access</span>
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Digital </span>
            <span className="gradient-text">Subscriptions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Unlock premium features at unbeatable prices. All subscriptions are genuine and instantly delivered.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {subscriptions.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <ProductCard {...product} />
            </motion.div>
          ))}
        </motion.div>

        {/* Categories Quick Access */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mt-12"
        >
          {[
            { icon: Tv, label: 'Streaming', count: 5 },
            { icon: Linkedin, label: 'Professional', count: 3 },
            { icon: Palette, label: 'Design', count: 4 },
          ].map((cat, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-5 py-3 glass-card rounded-full hover-scale cursor-pointer"
            >
              <cat.icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">{cat.label}</span>
              <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                {cat.count}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SubscriptionsSection;
