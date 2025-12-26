import { Search, Globe, Sparkles, Check, X, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HeroBanner = () => {
  const [domain, setDomain] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const [availability, setAvailability] = useState<'available' | 'taken' | null>(null);
  const navigate = useNavigate();

  const checkDomainAvailability = async () => {
    if (!domain.trim()) return;
    
    setIsChecking(true);
    setAvailability(null);
    
    // Simulate API call - in production, integrate with a real domain API
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock availability check (random for demo, or based on common patterns)
    const takenDomains = ['google', 'facebook', 'amazon', 'microsoft', 'apple'];
    const domainName = domain.toLowerCase().replace(/\.(com|net|org|io|bd)$/i, '');
    const isAvailable = !takenDomains.some(taken => domainName.includes(taken));
    
    setAvailability(isAvailable ? 'available' : 'taken');
    setIsChecking(false);
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

  return (
    <section className="bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 rounded-2xl p-6 md:p-10 text-white mb-8">
      <div className="max-w-3xl">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-yellow-300" />
          <span className="text-sm font-medium text-purple-200">Bangladesh's #1 Digital Store</span>
        </div>
        
        <h1 className="text-2xl md:text-4xl font-bold mb-3">
          Secure Your Perfect Domain Name
        </h1>
        <p className="text-purple-200 mb-6 text-sm md:text-base">
          Premium domains, lightning-fast hosting, and exclusive digital subscriptions at unbeatable prices.
        </p>

        {/* Domain Search */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />
            <input
              type="text"
              value={domain}
              onChange={(e) => {
                setDomain(e.target.value);
                setAvailability(null);
              }}
              onKeyPress={handleKeyPress}
              placeholder="Enter your domain name..."
              className="w-full bg-white/10 backdrop-blur border border-white/20 rounded-xl pl-12 pr-4 py-3 text-white placeholder:text-purple-300 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
          </div>
          <Button 
            onClick={checkDomainAvailability}
            disabled={isChecking || !domain.trim()}
            className="bg-white text-purple-700 hover:bg-purple-50 font-semibold px-6 py-3 h-auto disabled:opacity-50"
          >
            {isChecking ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Checking...
              </>
            ) : (
              <>
                <Search className="w-5 h-5 mr-2" />
                Search Domain
              </>
            )}
          </Button>
        </div>

        {/* Availability Result */}
        {availability && (
          <div className={`mt-4 p-4 rounded-xl flex items-center justify-between ${
            availability === 'available' 
              ? 'bg-green-500/20 border border-green-400/30' 
              : 'bg-red-500/20 border border-red-400/30'
          }`}>
            <div className="flex items-center gap-3">
              {availability === 'available' ? (
                <>
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">
                      {domain.includes('.') ? domain : `${domain}.com`} is available!
                    </p>
                    <p className="text-green-200 text-sm">Grab it before someone else does</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                    <X className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">
                      {domain.includes('.') ? domain : `${domain}.com`} is taken
                    </p>
                    <p className="text-red-200 text-sm">Try a different name or extension</p>
                  </div>
                </>
              )}
            </div>
            {availability === 'available' && (
              <Button 
                onClick={handleClaimNow}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6"
              >
                Claim Now
              </Button>
            )}
          </div>
        )}

        {/* Domain Extensions */}
        <div className="flex flex-wrap gap-2 mt-4">
          {['.com', '.net', '.org', '.io', '.bd'].map((ext) => (
            <span
              key={ext}
              onClick={() => {
                const baseDomain = domain.replace(/\.(com|net|org|io|bd)$/i, '');
                setDomain(baseDomain + ext);
                setAvailability(null);
              }}
              className="px-3 py-1 text-sm bg-white/10 rounded-full text-purple-200 hover:bg-white/20 cursor-pointer transition-colors"
            >
              {ext}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
