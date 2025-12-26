import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
