import { ShoppingCart, Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ProductCardProps {
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
  rating?: number;
}

const ProductCard = ({
  id,
  name,
  description,
  price,
  originalPrice,
  image,
  category,
  badge,
  badgeColor = 'bg-primary',
  popular = false,
  rating = 4.8,
}: ProductCardProps) => {
  const { addItem } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addItem({ id, name, price, image, category });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  const discount = originalPrice ? Math.round((1 - price / originalPrice) * 100) : 0;

  return (
    <div className={cn(
      'bg-card border border-border rounded-2xl overflow-hidden card-hover group',
      popular && 'ring-2 ring-primary'
    )}>
      {/* Image Container */}
      <div className="relative bg-muted/30 p-6 flex items-center justify-center h-40">
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {popular && (
            <span className="px-2 py-1 text-xs font-semibold bg-gradient-primary text-white rounded-full">
              🔥 Popular
            </span>
          )}
          {badge && (
            <span className={cn('px-2 py-1 text-xs font-semibold rounded-full text-white', badgeColor)}>
              {badge}
            </span>
          )}
        </div>

        {discount > 0 && (
          <span className="absolute top-3 right-3 px-2 py-1 text-xs font-bold bg-red-500 text-white rounded-full">
            -{discount}%
          </span>
        )}

        <img
          src={image}
          alt={name}
          className="h-20 w-20 object-contain transition-transform group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Category & Rating */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-primary uppercase tracking-wide">
            {category}
          </span>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs text-muted-foreground">{rating}</span>
          </div>
        </div>

        <h3 className="font-semibold text-foreground mb-1 line-clamp-1">{name}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>

        {/* Price & CTA */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-foreground">৳{price}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through ml-2">
                ৳{originalPrice}
              </span>
            )}
          </div>
          
          <Button
            onClick={handleAddToCart}
            disabled={isAdded}
            size="sm"
            className={cn(
              'transition-all',
              isAdded ? 'bg-green-500 hover:bg-green-500' : 'btn-premium text-white'
            )}
          >
            {isAdded ? (
              <Check className="w-4 h-4" />
            ) : (
              <ShoppingCart className="w-4 h-4" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
