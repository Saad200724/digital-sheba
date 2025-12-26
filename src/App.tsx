import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Search, User, MessageCircle } from "lucide-react";
import { CartProvider } from "./contexts/CartContext";
import Index from "./pages/Index";
import Domain from "./pages/Domain";
import Streaming from "./pages/Streaming";
import AITools from "./pages/AITools";
import Design from "./pages/Design";
import Professional from "./pages/Professional";
import Software from "./pages/Software";
import Hosting from "./pages/Hosting";
import Domains from "./pages/Domains";
import Music from "./pages/Music";
import Documents from "./pages/Documents";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <div className="flex flex-col min-h-screen pb-16 md:pb-0">
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/domain" element={<Domain />} />
              <Route path="/streaming" element={<Streaming />} />
              <Route path="/ai-tools" element={<AITools />} />
              <Route path="/design" element={<Design />} />
              <Route path="/professional" element={<Professional />} />
              <Route path="/software" element={<Software />} />
              <Route path="/hosting" element={<Hosting />} />
              <Route path="/domains" element={<Domains />} />
              <Route path="/music" element={<Music />} />
              <Route path="/documents" element={<Documents />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
          <MobileBottomNav />
        </div>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

const MobileBottomNav = () => (
  <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 h-16 flex items-center justify-around md:hidden px-2">
    <Link to="/" className="flex flex-col items-center gap-1 text-gray-400">
      <Home className="w-6 h-6" />
      <span className="text-[10px]">Home</span>
    </Link>
    <button className="flex flex-col items-center gap-1 text-gray-400">
      <Search className="w-6 h-6" />
      <span className="text-[10px]">Search</span>
    </button>
    <div className="flex flex-col items-center -mt-8">
      <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
        <img src="/apple-touch-icon.png" className="w-8 h-8 invert brightness-0" alt="" />
      </div>
    </div>
    <button className="flex flex-col items-center gap-1 text-gray-400">
      <User className="w-6 h-6" />
      <span className="text-[10px]">Profile</span>
    </button>
    <button className="flex flex-col items-center gap-1 text-gray-400">
      <MessageCircle className="w-6 h-6" />
      <span className="text-[10px]">Chat</span>
    </button>
  </nav>
);

export default App;
