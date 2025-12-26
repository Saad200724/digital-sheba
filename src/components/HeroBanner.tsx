import { Search, Globe, Sparkles, Check, X, Loader2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const HeroBanner = () => {
  const [domain, setDomain] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const [availability, setAvailability] = useState<'available' | 'taken' | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      title: "Get All Microsoft Licensing product's Key at Best Price",
      subtitle: "Office 365, Windows 11, and more with lifetime support",
      gradient: "from-purple-700 via-purple-800 to-indigo-900",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_365_%282022%29.svg",
    },
    {
      title: "Save Big on LinkedIn Premium Up to 90% Off!",
      subtitle: "Unlock InMail, Learning, Job Insights & more at the best price!",
      gradient: "from-amber-600 via-amber-700 to-orange-800",
      image: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
    },
    {
      title: "Premium Streaming at Lowest Prices",
      subtitle: "Netflix, Spotify, Disney+ and more subscriptions",
      gradient: "from-red-600 via-red-700 to-rose-800",
      image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    },
  ];

  const checkDomainAvailability = async () => {
    if (!domain.trim()) return;
    
    setIsChecking(true);
    setAvailability(null);
    
    const domainName = domain.includes('.') ? domain.toLowerCase().trim() : `${domain.toLowerCase().trim()}.com`;
    
    try {
      const response = await fetch(`https://rdap.org/domain/${domainName}`);
      
      if (response.status === 404) {
        setAvailability('available');
      } else if (response.status === 200) {
        setAvailability('taken');
      } else {
        setAvailability('taken');
      }
    } catch (error) {
      console.error('RDAP lookup failed:', error);
      setAvailability('available');
    } finally {
      setIsChecking(false);
    }
  };

  const handleClaimNow = () => {
    const fullDomain = domain.includes('.') ? domain : `${domain}.com`;
    navigate(`/domain?name=${encodeURIComponent(fullDomain)}`);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      checkDomainAvailability();
    }
  };

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Main Carousel - Left Side */}
        <div className="lg:col-span-2 relative rounded-2xl overflow-hidden h-[320px] md:h-[380px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].gradient} p-6 md:p-10 flex flex-col justify-center`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1 max-w-lg">
                  <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                    {slides[currentSlide].title}
                  </h2>
                  <p className="text-white/80 mb-6 text-sm md:text-base">
                    {slides[currentSlide].subtitle}
                  </p>
                  <Button className="bg-white text-purple-700 hover:bg-purple-50 font-semibold px-6 py-3 h-auto rounded-lg shadow-lg">
                    Grab Now
                  </Button>
                </div>
                <div className="hidden md:block w-40 h-40 flex-shrink-0">
                  <img
                    src={slides[currentSlide].image}
                    alt="Product"
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  idx === currentSlide ? 'bg-white' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right Side Cards */}
        <div className="flex flex-col gap-4">
          {/* Domain Search Card */}
          <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-700 rounded-2xl p-5 text-white flex-1">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span className="text-xs font-medium text-purple-200">Premium Domains</span>
            </div>
            <h3 className="text-lg font-bold mb-2">Secure Your Perfect Domain Name</h3>
            
            <div className="flex gap-2 mb-3">
              <div className="relative flex-1">
                <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400" />
                <input
                  type="text"
                  value={domain}
                  onChange={(e) => {
                    setDomain(e.target.value);
                    setAvailability(null);
                  }}
                  onKeyPress={handleKeyPress}
                  placeholder="yourdomain.com"
                  className="w-full bg-white/10 backdrop-blur border border-white/20 rounded-lg pl-9 pr-3 py-2 text-sm text-white placeholder:text-purple-300 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>
              <Button
                onClick={checkDomainAvailability}
                disabled={isChecking || !domain.trim()}
                size="sm"
                className="bg-white text-purple-700 hover:bg-purple-50 font-semibold px-3"
              >
                {isChecking ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
              </Button>
            </div>

            {availability && (
              <div className={`p-2 rounded-lg flex items-center gap-2 text-xs ${
                availability === 'available' 
                  ? 'bg-green-500/20 border border-green-400/30' 
                  : 'bg-red-500/20 border border-red-400/30'
              }`}>
                {availability === 'available' ? (
                  <>
                    <Check className="w-4 h-4 text-green-400" />
                    <span>{domain.includes('.') ? domain : `${domain}.com`} is available!</span>
                    <Button onClick={handleClaimNow} size="sm" className="ml-auto bg-green-500 hover:bg-green-600 h-6 px-2 text-xs">
                      Claim
                    </Button>
                  </>
                ) : (
                  <>
                    <X className="w-4 h-4 text-red-400" />
                    <span>{domain.includes('.') ? domain : `${domain}.com`} is taken</span>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Quick Product Cards */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gradient-to-br from-cyan-500 to-teal-600 rounded-xl p-4 text-white">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="font-bold text-sm">Perplexity Pro</h4>
                  <p className="text-xs text-white/80">Up to 95% OFF</p>
                </div>
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <img src="https://cdn.prod.website-files.com/6565e9e76af51dc1e42dd4b9/656cc71f8cd53b47cb1e56b1_perplexity_favicon.webp" alt="Perplexity" className="w-5 h-5" />
                </div>
              </div>
              <Button size="sm" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-xs h-7 px-3">
                View Details
              </Button>
            </div>

            <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl p-4 text-white">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="font-bold text-sm">ChatGPT Plus</h4>
                  <p className="text-xs text-white/80">Be Faster</p>
                </div>
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" alt="ChatGPT" className="w-5 h-5" />
                </div>
              </div>
              <Button size="sm" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-xs h-7 px-3">
                View Details
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
