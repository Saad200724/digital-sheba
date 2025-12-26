import ProductCard from './ProductCard';
import { ChevronRight } from 'lucide-react';
import { ReactNode } from 'react';

interface ProductSectionProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  products: Array<{
    id: string;
    name: string;
    description: string;
    price: number;
    originalPrice?: number;
    image: string;
    category: string;
    badge?: string;
    badgeColor?: string;
    popular?: boolean;
  }>;
  showViewAll?: boolean;
}

const ProductSection = ({ title, subtitle, icon, products, showViewAll = true }: ProductSectionProps) => {
  return (
    <section className="mb-10">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          {icon}
          <div>
            <h2 className="text-xl font-bold text-foreground">{title}</h2>
            {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
          </div>
        </div>
        {showViewAll && (
          <button className="flex items-center gap-1 text-sm font-medium text-primary hover:underline">
            View All <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
