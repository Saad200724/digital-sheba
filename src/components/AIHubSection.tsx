import { motion } from "framer-motion";
import { Bot, Sparkles, Brain, Zap, MessageSquare, Search } from "lucide-react";
import ProductCard from "./ProductCard";

const aiProducts = [
  {
    id: "chatgpt-plus",
    name: "ChatGPT Plus",
    description: "Access GPT-4o, faster responses, and priority access during peak times.",
    price: 1999,
    originalPrice: 3500,
    image: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    category: "AI Assistant",
    features: ["GPT-4o Access", "Faster Response", "Priority Access", "Image Generation"],
    popular: true,
  },
  {
    id: "perplexity-pro",
    name: "Perplexity Pro",
    description: "Advanced AI search with unlimited Pro searches and file uploads.",
    price: 1799,
    originalPrice: 3000,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Perplexity_AI_Turquoise_on_White.png/960px-Perplexity_AI_Turquoise_on_White.png?20250123162739",
    category: "AI Search",
    features: ["Unlimited Pro Search", "File Analysis", "API Access", "No Ads"],
    badge: "New",
  },
  {
    id: "claude-pro",
    name: "Claude Pro",
    description: "Anthropic's most capable AI with 5x more usage and priority access.",
    price: 1899,
    originalPrice: 3200,
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Claude-ai-icon.png?20250728093931",
    category: "AI Assistant",
    features: ["5x More Usage", "Priority Access", "Early Features", "Claude 3 Opus"],
  },
  {
    id: "midjourney-standard",
    name: "Midjourney",
    description: "Create stunning AI artwork with fast GPU hours and relaxed mode.",
    price: 999,
    originalPrice: 1800,
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Midjourney_Emblem.png",
    category: "AI Art",
    features: ["15 Fast Hours", "Relaxed Mode", "Private Gallery", "Commercial License"],
    badge: "Creative",
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

const AIHubSection = () => {
  return (
    <section id="ai-hub" className="py-20 px-4 relative overflow-hidden">
      {/* Background with futuristic grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary) / 0.3) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[200px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4 animate-pulse-glow">
            <Bot className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Powered by AI</span>
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">AI Hub</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Supercharge your productivity with the world's leading AI tools. Premium subscriptions at the best prices.
          </p>
        </motion.div>

        {/* Animated Feature Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-8 mb-12"
        >
          {[
            { icon: MessageSquare, label: "Chat" },
            { icon: Search, label: "Search" },
            { icon: Sparkles, label: "Create" },
            { icon: Brain, label: "Think" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring" }}
              className="flex flex-col items-center gap-2"
            >
              <div className="p-4 rounded-2xl glass-card hover-scale cursor-pointer">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xs text-muted-foreground">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {aiProducts.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <ProductCard {...product} />
            </motion.div>
          ))}
        </motion.div>

        {/* AI Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 glass-card p-8 rounded-2xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "50K+", label: "AI Subscriptions Sold" },
              { value: "99.9%", label: "Activation Rate" },
              { value: "< 5min", label: "Delivery Time" },
              { value: "24/7", label: "Support Available" },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIHubSection;
