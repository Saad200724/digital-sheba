import { useState } from "react";
import { CartProvider } from "@/contexts/CartContext";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import TrustBadge from "@/components/TrustBadge";
import ProductSection from "@/components/ProductSection";
import CartSidebar from "@/components/CartSidebar";
import Footer from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { Tv, Bot, Monitor, Palette, Server } from "lucide-react";

// Product Data
const streamingProducts = [
  {
    id: "netflix-premium",
    name: "Netflix Premium",
    description: "4K Ultra HD streaming with 4 screens",
    price: 399,
    originalPrice: 650,
    image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    category: "Streaming",
    popular: true,
  },
  {
    id: "spotify-premium",
    name: "Spotify Premium",
    description: "Ad-free music with offline mode",
    price: 149,
    originalPrice: 299,
    image: "https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg",
    category: "Streaming",
  },
  {
    id: "youtube-premium",
    name: "YouTube Premium",
    description: "Ad-free videos + YouTube Music",
    price: 199,
    originalPrice: 399,
    image: "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg",
    category: "Streaming",
    badge: "Hot Deal",
    badgeColor: "bg-red-500",
  },
  {
    id: "disney-plus",
    name: "Disney+ Premium",
    description: "Stream Disney, Marvel, Star Wars",
    price: 299,
    originalPrice: 499,
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg",
    category: "Streaming",
  },
];

const aiProducts = [
  {
    id: "chatgpt-plus",
    name: "ChatGPT Plus",
    description: "GPT-4o access with faster responses",
    price: 1999,
    originalPrice: 3500,
    image: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    category: "AI Tools",
    popular: true,
  },
  {
    id: "perplexity-pro",
    name: "Perplexity Pro",
    description: "Advanced AI search with file uploads",
    price: 1799,
    originalPrice: 3000,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Perplexity_AI_Turquoise_on_White.png/960px-Perplexity_AI_Turquoise_on_White.png?20250123162739",
    category: "AI Tools",
    badge: "New",
    badgeColor: "bg-green-500",
  },
  {
    id: "midjourney",
    name: "Midjourney",
    description: "Create stunning AI artwork",
    price: 999,
    originalPrice: 1800,
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Midjourney_Emblem.png",
    category: "AI Tools",
  },
  {
    id: "claude-pro",
    name: "Claude Pro",
    description: "5x more usage with priority access",
    price: 1899,
    originalPrice: 3200,
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Claude-ai-icon.png?20250728093931",
    category: "AI Tools",
  },
];

const designProducts = [
  {
    id: "canva-pro",
    name: "Canva Pro",
    description: "100M+ assets with brand kit",
    price: 499,
    originalPrice: 999,
    image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg",
    category: "Design",
    popular: true,
  },
  {
    id: "figma-pro",
    name: "Figma Professional",
    description: "Unlimited projects & version history",
    price: 1299,
    originalPrice: 2499,
    image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    category: "Design",
  },
  {
    id: "adobe-cc",
    name: "Adobe Creative Cloud",
    description: "All Adobe apps included",
    price: 2999,
    originalPrice: 5999,
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Creative_Cloud.svg",
    category: "Design",
    badge: "Best Value",
    badgeColor: "bg-purple-500",
  },
  {
    id: "capcut-pro",
    name: "CapCut Pro",
    description: "Premium video editing features",
    price: 399,
    originalPrice: 799,
    image:
      "https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/websites/capcut_creative_suite/capcut_icon.svg",
    category: "Design",
  },
];

const softwareProducts = [
  {
    id: "windows-11-pro",
    name: "Windows 11 Pro",
    description: "Lifetime license with official activation",
    price: 1299,
    originalPrice: 2999,
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Windows_11_logo.svg",
    category: "Software",
  },
  {
    id: "office-365",
    name: "Microsoft 365",
    description: "Complete Office suite with 1TB storage",
    price: 799,
    originalPrice: 1499,
    image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_365_%282022%29.svg",
    category: "Software",
    popular: true,
  },
  {
    id: "linkedin-premium",
    name: "LinkedIn Premium",
    description: "InMail credits & profile insights",
    price: 1499,
    originalPrice: 2500,
    image: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
    category: "Professional",
  },
  {
    id: "grammarly",
    name: "Grammarly Premium",
    description: "Advanced writing suggestions",
    price: 899,
    originalPrice: 1799,
    image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Grammarly_Logo.svg",
    category: "Software",
  },
];

const hostingProducts = [
  {
    id: "hostinger-premium",
    name: "Hostinger Premium",
    description: "100 websites with free domain",
    price: 1499,
    originalPrice: 2999,
    image: "https://www.hostinger.com/themes/flavor/assets/favicon/android-chrome-192x192.png",
    category: "Hosting",
    popular: true,
  },
  {
    id: "namecheap-stellar",
    name: "Namecheap Stellar",
    description: "Reliable hosting with cPanel",
    price: 999,
    originalPrice: 1999,
    image: "https://www.namecheap.com/assets/img/nc-icon/favicon.ico",
    category: "Hosting",
  },
];

const MainContent = () => {
  return (
    <main className="flex-1 p-4 md:p-6 overflow-y-auto">
      <HeroBanner />
      <TrustBadge />

      <ProductSection
        title="Streaming Services"
        subtitle="Premium entertainment subscriptions"
        icon={<Tv className="w-6 h-6 text-red-500" />}
        products={streamingProducts}
      />

      <ProductSection
        title="AI Tools"
        subtitle="Supercharge your productivity"
        icon={<Bot className="w-6 h-6 text-green-500" />}
        products={aiProducts}
      />

      <ProductSection
        title="Design Tools"
        subtitle="Create stunning visuals"
        icon={<Palette className="w-6 h-6 text-purple-500" />}
        products={designProducts}
      />

      <ProductSection
        title="Software & Licenses"
        subtitle="Genuine keys with lifetime support"
        icon={<Monitor className="w-6 h-6 text-orange-500" />}
        products={softwareProducts}
      />

      <ProductSection
        title="Web Hosting"
        subtitle="Blazing fast servers"
        icon={<Server className="w-6 h-6 text-cyan-500" />}
        products={hostingProducts}
      />
    </main>
  );
};

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <CartProvider>
      <div className="min-h-screen bg-muted/30 flex flex-col">
        {/* Header - Full width at top, offset by sidebar */}
        <div className="md:ml-20">
          <Header onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
        </div>

        {/* Spacer for fixed header */}
        <div className="h-[140px] md:h-[110px]" />

        {/* Content area with sidebar */}
        <div className="flex flex-1">
          {/* Desktop Sidebar */}
          <Sidebar activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

          {/* Mobile Sidebar Overlay */}
          {isMobileMenuOpen && (
            <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsMobileMenuOpen(false)}>
              <div className="w-64 bg-background h-full" onClick={(e) => e.stopPropagation()}>
                <Sidebar activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
              </div>
            </div>
          )}

          {/* Main Content Area - offset by sidebar width */}
          <div className="flex-1 md:ml-20">
            <MainContent />
            <Footer />
            <div className="h-16 md:hidden" /> {/* Mobile nav spacer */}
          </div>
        </div>

        <MobileNav />
        <CartSidebar />
      </div>
    </CartProvider>
  );
};

export default Index;
