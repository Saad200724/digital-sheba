import { 
  Globe, 
  Server, 
  Tv, 
  Bot, 
  Monitor, 
  Palette, 
  Linkedin, 
  MessageSquare,
  Briefcase,
  Shield,
  ChevronRight,
  Home
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: 'all', label: 'All Products', icon: Home, color: 'text-foreground' },
  { id: 'domains', label: 'Domains', icon: Globe, color: 'text-blue-600' },
  { id: 'hosting', label: 'Web Hosting', icon: Server, color: 'text-cyan-600' },
  { id: 'streaming', label: 'Streaming', icon: Tv, color: 'text-red-600' },
  { id: 'ai', label: 'AI Tools', icon: Bot, color: 'text-green-600' },
  { id: 'software', label: 'Software', icon: Monitor, color: 'text-orange-600' },
  { id: 'design', label: 'Design Tools', icon: Palette, color: 'text-purple-600' },
  { id: 'professional', label: 'Professional', icon: Briefcase, color: 'text-blue-700' },
];

const Sidebar = ({ activeCategory, onCategoryChange }: SidebarProps) => {
  return (
    <aside className="w-64 bg-muted/30 border-r border-border min-h-screen p-4 hidden lg:block sticky top-0">
      {/* Logo */}
      <div className="flex items-center gap-2 px-3 py-4 mb-4">
        <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
          <span className="text-white font-bold text-lg">D</span>
        </div>
        <div>
          <h1 className="font-bold text-lg text-foreground">DigitalSeba</h1>
          <p className="text-xs text-muted-foreground">Premium Digital Store</p>
        </div>
      </div>

      {/* Categories */}
      <div className="space-y-1">
        <p className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          Categories
        </p>
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={cn(
                'w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all',
                isActive 
                  ? 'bg-primary text-primary-foreground' 
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              )}
            >
              <Icon className={cn('w-5 h-5', isActive ? 'text-primary-foreground' : cat.color)} />
              <span className="flex-1 text-left">{cat.label}</span>
              {isActive && <ChevronRight className="w-4 h-4" />}
            </button>
          );
        })}
      </div>

      {/* Trust Badge */}
      <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-xl">
        <div className="flex items-center gap-2 mb-2">
          <Shield className="w-5 h-5 text-green-600" />
          <span className="font-semibold text-green-800 text-sm">DBID Verified</span>
        </div>
        <p className="text-xs text-green-700">
          Official digital seller verified by Bangladesh
        </p>
      </div>

      {/* Quick Stats */}
      <div className="mt-6 grid grid-cols-2 gap-3">
        <div className="bg-card border border-border rounded-lg p-3 text-center">
          <div className="text-xl font-bold text-primary">10K+</div>
          <div className="text-xs text-muted-foreground">Customers</div>
        </div>
        <div className="bg-card border border-border rounded-lg p-3 text-center">
          <div className="text-xl font-bold text-secondary">4.9</div>
          <div className="text-xs text-muted-foreground">Rating</div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
