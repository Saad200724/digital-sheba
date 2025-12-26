import { motion } from 'framer-motion';
import { Check, Zap, Shield, Globe, Server, HardDrive, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

const hostingPlans = [
  {
    id: 'hostinger-premium',
    name: 'Hostinger Premium',
    provider: 'Hostinger',
    price: 1499,
    originalPrice: 2999,
    period: '/month',
    description: 'Perfect for growing websites with premium features',
    popular: true,
    features: [
      '100 Websites',
      '100GB NVMe Storage',
      'Free Domain (1 Year)',
      'Unlimited Bandwidth',
      'Free SSL Certificate',
      'Weekly Backups',
      'Managed WordPress',
      '24/7 Support',
    ],
    icon: Server,
    color: 'primary',
  },
  {
    id: 'namecheap-stellar',
    name: 'Namecheap Stellar',
    provider: 'Namecheap',
    price: 999,
    originalPrice: 1999,
    period: '/month',
    description: 'Reliable hosting with excellent value',
    popular: false,
    features: [
      '3 Websites',
      '20GB SSD Storage',
      'Free Domain',
      'Unmetered Bandwidth',
      'Free SSL',
      'AutoBackup',
      'cPanel Access',
      '24/7 Support',
    ],
    icon: Globe,
    color: 'secondary',
  },
  {
    id: 'hosting-comparison',
    name: 'Compare Plans',
    provider: 'All Providers',
    price: null,
    description: 'Find the perfect hosting for your needs',
    popular: false,
    features: [
      'Side-by-side comparison',
      'Performance benchmarks',
      'Price analysis',
      'Feature matching',
    ],
    icon: HardDrive,
    color: 'accent',
    isComparison: true,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const HostingSection = () => {
  const { addItem } = useCart();

  return (
    <section id="hosting" className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />

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
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Lightning Fast Hosting</span>
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Premium </span>
            <span className="gradient-text">Web Hosting</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Blazing fast servers, 99.9% uptime guarantee, and world-class support from trusted providers
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {hostingPlans.map((plan, index) => {
            const IconComponent = plan.icon;
            const isComparison = 'isComparison' in plan && plan.isComparison;

            return (
              <motion.div
                key={plan.id}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`glass-card overflow-hidden group ${
                  plan.popular ? 'ring-2 ring-primary/50 lg:scale-105' : ''
                } ${isComparison ? 'lg:row-span-1' : ''}`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="bg-gradient-primary text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="p-6">
                  {/* Icon & Provider */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-${plan.color}/10`}>
                      <IconComponent className={`w-6 h-6 text-${plan.color}`} />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      {plan.provider}
                    </span>
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>

                  {/* Pricing */}
                  {plan.price !== null ? (
                    <div className="mb-6">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold gradient-text">৳{plan.price}</span>
                        <span className="text-muted-foreground">{plan.period}</span>
                      </div>
                      {plan.originalPrice && (
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-sm text-muted-foreground line-through">
                            ৳{plan.originalPrice}
                          </span>
                          <span className="text-xs font-medium text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">
                            Save {Math.round((1 - plan.price / plan.originalPrice) * 100)}%
                          </span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="mb-6">
                      <span className="text-2xl font-bold text-foreground">Free Tool</span>
                    </div>
                  )}

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    onClick={() => {
                      if (!isComparison && plan.price) {
                        addItem({
                          id: plan.id,
                          name: plan.name,
                          price: plan.price,
                          image: '/placeholder.svg',
                          category: 'Hosting',
                        });
                      }
                    }}
                    className={`w-full ${plan.popular ? 'btn-premium text-white' : 'bg-muted hover:bg-muted/80'}`}
                  >
                    {isComparison ? 'Compare All Plans' : 'Get Started'}
                  </Button>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 mt-12"
        >
          {[
            { icon: Shield, label: '100% Secure' },
            { icon: Clock, label: '24/7 Support' },
            { icon: Zap, label: 'Instant Setup' },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
              <item.icon className="w-4 h-4 text-primary" />
              <span>{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HostingSection;
