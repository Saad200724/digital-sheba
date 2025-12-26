import { CartProvider } from '@/contexts/CartContext';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HostingSection from '@/components/HostingSection';
import SubscriptionsSection from '@/components/SubscriptionsSection';
import AIHubSection from '@/components/AIHubSection';
import SoftwareSection from '@/components/SoftwareSection';
import TrustSection from '@/components/TrustSection';
import Footer from '@/components/Footer';
import CartSidebar from '@/components/CartSidebar';

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <CartSidebar />
        <main>
          <HeroSection />
          <HostingSection />
          <SubscriptionsSection />
          <AIHubSection />
          <SoftwareSection />
          <TrustSection />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default Index;
