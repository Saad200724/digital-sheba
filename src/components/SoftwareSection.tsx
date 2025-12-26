import { motion } from 'framer-motion';
import { Monitor, FileText, Key, Shield, Check, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

const softwareProducts = [
  {
    id: 'windows-11-pro',
    name: 'Windows 11 Pro',
    description: 'Original license key with lifetime validity',
    price: 1299,
    originalPrice: 2999,
    features: ['Lifetime License', 'Official Activation', '64-bit Support', 'Free Updates'],
    icon: Monitor,
  },
  {
    id: 'windows-10-pro',
    name: 'Windows 10 Pro',
    description: 'Genuine activation key for Windows 10',
    price: 999,
    originalPrice: 2499,
    features: ['Lifetime License', 'Official Activation', '32/64-bit', 'Free Updates'],
    icon: Monitor,
  },
  {
    id: 'office-365',
    name: 'Microsoft 365',
    description: 'Complete Office suite with cloud storage',
    price: 799,
    originalPrice: 1499,
    features: ['1 Year License', 'All Office Apps', '1TB OneDrive', '5 Devices'],
    icon: FileText,
    popular: true,
  },
  {
    id: 'office-2021',
    name: 'Office 2021 Pro',
    description: 'One-time purchase, lifetime license',
    price: 1499,
    originalPrice: 3499,
    features: ['Lifetime License', 'Word, Excel, PPT', 'Outlook Included', 'No Subscription'],
    icon: FileText,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const SoftwareSection = () => {
  const { addItem } = useCart();

  return (
    <section id="software" className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-card/30" />

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
            <Key className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Genuine Licenses</span>
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Software </span>
            <span className="gradient-text">Licenses</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            100% genuine Microsoft licenses with instant delivery and lifetime support
          </p>
        </motion.div>

        {/* Products List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4 max-w-4xl mx-auto"
        >
          {softwareProducts.map((product) => {
            const IconComponent = product.icon;
            const isPopular = 'popular' in product && product.popular;

            return (
              <motion.div
                key={product.id}
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
                className={`glass-card p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 group ${
                  isPopular ? 'ring-2 ring-primary/50' : ''
                }`}
              >
                {/* Icon */}
                <div className="flex-shrink-0 p-3 rounded-xl bg-primary/10">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-semibold text-foreground">{product.name}</h3>
                    {isPopular && (
                      <span className="px-2 py-0.5 text-xs font-medium bg-gradient-primary text-white rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-full"
                      >
                        <Check className="w-3 h-3 text-primary" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center gap-4 w-full md:w-auto">
                  <div className="text-right">
                    <div className="text-2xl font-bold text-foreground">৳{product.price}</div>
                    {product.originalPrice && (
                      <div className="text-sm text-muted-foreground line-through">
                        ৳{product.originalPrice}
                      </div>
                    )}
                  </div>
                  <Button
                    onClick={() =>
                      addItem({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: '/placeholder.svg',
                        category: 'Software',
                      })
                    }
                    className="btn-premium text-white whitespace-nowrap"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Buy Now
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Trust Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-2 mt-8 text-sm text-muted-foreground"
        >
          <Shield className="w-4 h-4 text-green-400" />
          <span>All licenses are genuine and verified by Microsoft</span>
        </motion.div>
      </div>
    </section>
  );
};

export default SoftwareSection;
