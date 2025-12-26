import { useState } from 'react';
import { 
  Globe, 
  Server, 
  Tv, 
  Bot, 
  Monitor, 
  Palette, 
  Briefcase,
  Shield,
  ChevronRight,
  Home,
  Menu,
  Headphones,
  FileText,
  X,
  type LucideIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

interface CategoryItem {
  id: string;
  label: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
}

const categories: CategoryItem[] = [
  { id: 'all', label: 'All Products', icon: Home, color: 'text-purple-600', bgColor: 'bg-purple-100' },
  { id: 'streaming', label: 'Streaming', icon: Tv, color: 'text-red-600', bgColor: 'bg-red-100' },
  { id: 'ai', label: 'AI Tools', icon: Bot, color: 'text-green-600', bgColor: 'bg-green-100' },
  { id: 'design', label: 'Design', icon: Palette, color: 'text-pink-600', bgColor: 'bg-pink-100' },
  { id: 'professional', label: 'Professional', icon: Briefcase, color: 'text-blue-600', bgColor: 'bg-blue-100' },
  { id: 'software', label: 'Software', icon: Monitor, color: 'text-orange-600', bgColor: 'bg-orange-100' },
  { id: 'hosting', label: 'Hosting', icon: Server, color: 'text-cyan-600', bgColor: 'bg-cyan-100' },
  { id: 'domains', label: 'Domains', icon: Globe, color: 'text-indigo-600', bgColor: 'bg-indigo-100' },
  { id: 'music', label: 'Music', icon: Headphones, color: 'text-emerald-600', bgColor: 'bg-emerald-100' },
  { id: 'documents', label: 'Documents', icon: FileText, color: 'text-amber-600', bgColor: 'bg-amber-100' },
];

const Sidebar = ({ activeCategory, onCategoryChange }: SidebarProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <aside 
      className={cn(
        'bg-white border-r border-border h-screen py-4 hidden md:flex flex-col transition-all duration-300 ease-in-out fixed left-0 top-0 z-30 overflow-y-auto',
        isExpanded ? 'w-56' : 'w-20'
      )}
    >
      {/* Toggle Button */}
      <div className="px-4 mb-6">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-105"
        >
          {isExpanded ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Categories */}
      <div className="flex-1 px-2 space-y-1 overflow-y-auto">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.id;
          
          return (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={cn(
                'w-full flex items-center gap-3 rounded-xl transition-all duration-200 group',
                isExpanded ? 'px-3 py-2.5' : 'px-0 py-2 justify-center',
                isActive 
                  ? 'bg-purple-50' 
                  : 'hover:bg-muted'
              )}
              title={!isExpanded ? cat.label : undefined}
            >
              <div className={cn(
                'w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105',
                isActive ? cat.bgColor : 'bg-muted/50'
              )}>
                <Icon className={cn('w-5 h-5', isActive ? cat.color : 'text-muted-foreground')} />
              </div>
              
              {isExpanded && (
                <span className={cn(
                  'text-sm font-medium flex-1 text-left truncate',
                  isActive ? 'text-purple-700' : 'text-muted-foreground'
                )}>
                  {cat.label}
                </span>
              )}
              
              {isExpanded && isActive && (
                <ChevronRight className="w-4 h-4 text-purple-600" />
              )}
            </button>
          );
        })}
      </div>

      {/* Trust Badge - Only show when expanded */}
      {isExpanded && (
        <div className="mx-3 mt-4 p-3 bg-green-50 border border-green-200 rounded-xl flex-shrink-0">
          <div className="flex items-center gap-2 mb-1">
            <Shield className="w-4 h-4 text-green-600" />
            <span className="font-semibold text-green-800 text-xs">DBID Verified</span>
          </div>
          <p className="text-[10px] text-green-700">
            Official verified seller
          </p>
        </div>
      )}

      {/* Collapsed Trust Badge */}
      {!isExpanded && (
        <div className="px-2 mt-4 flex-shrink-0">
          <div className="w-12 h-12 mx-auto rounded-xl bg-green-50 border border-green-200 flex items-center justify-center" title="DBID Verified">
            <Shield className="w-5 h-5 text-green-600" />
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
