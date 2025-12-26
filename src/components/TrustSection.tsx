import { motion } from 'framer-motion';
import { Shield, Award, BadgeCheck, Star, Users, Clock } from 'lucide-react';

const TrustSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

      <div className="relative max-w-7xl mx-auto">
        {/* DBID Verified Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-20" />
            
            {/* Certificate Card */}
            <div className="relative glass-card p-8 md:p-12 rounded-3xl glow-border">
              <div className="flex flex-col items-center">
                {/* Badge Icon */}
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative mb-6"
                >
                  <div className="w-24 h-24 rounded-full bg-gradient-primary flex items-center justify-center">
                    <Shield className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                    <BadgeCheck className="w-5 h-5 text-white" />
                  </div>
                </motion.div>

                {/* Certificate Text */}
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  <span className="gradient-text">DBID Verified</span> Seller
                </h3>
                <p className="text-muted-foreground text-center max-w-md mb-6">
                  Officially verified by the Digital Business Identity Database of Bangladesh
                </p>

                {/* Verification Details */}
                <div className="flex flex-wrap justify-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">License #DSB-2024-0892</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="text-muted-foreground">5-Star Rating</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">10,000+ Customers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Authorized Partner Ticker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-center text-sm text-muted-foreground mb-6 uppercase tracking-wider">
            Authorized Partner of
          </p>

          {/* Infinite Scroll Ticker */}
          <div className="relative overflow-hidden py-4">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
            
            <div className="flex animate-scroll-x">
              {/* First set */}
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex gap-16 px-8">
                  {[
                    { name: 'Hostinger', logo: '🌐' },
                    { name: 'Namecheap', logo: '🔒' },
                    { name: 'Microsoft', logo: '🪟' },
                    { name: 'Netflix', logo: '🎬' },
                    { name: 'OpenAI', logo: '🤖' },
                    { name: 'Anthropic', logo: '🧠' },
                    { name: 'Canva', logo: '🎨' },
                    { name: 'LinkedIn', logo: '💼' },
                  ].map((partner, idx) => (
                    <div
                      key={`${setIndex}-${idx}`}
                      className="flex items-center gap-3 px-6 py-3 glass-card rounded-full whitespace-nowrap hover-scale"
                    >
                      <span className="text-2xl">{partner.logo}</span>
                      <span className="text-lg font-semibold text-foreground">{partner.name}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Trust Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { icon: Shield, value: '100%', label: 'Genuine Products' },
            { icon: Clock, value: '< 5min', label: 'Instant Delivery' },
            { icon: Users, value: '10K+', label: 'Happy Customers' },
            { icon: Star, value: '4.9/5', label: 'Customer Rating' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="glass-card p-6 text-center hover:ring-1 hover:ring-primary/50 transition-all"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
