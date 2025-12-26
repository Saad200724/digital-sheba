import { motion } from 'framer-motion';
import { ShoppingCart, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useState } from 'react';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  features?: string[];
  badge?: string;
  popular?: boolean;
}

const ProductCard = ({
  id,
  name,
  description,
  price,
  originalPrice,
  image,
  category,
  features = [],
  badge,
  popular = false,
}: ProductCardProps) => {
  const { addItem } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addItem({ id, name, price, image, category });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`relative glass-card overflow-hidden group ${popular ? 'ring-2 ring-primary/50' : ''}`}
    >
      {/* Popular Badge */}
      {popular && (
        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1 text-xs font-semibold bg-gradient-primary text-white rounded-full">
            Popular
          </span>
        </div>
      )}

      {/* Custom Badge */}
      {badge && !popular && (
        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1 text-xs font-semibold bg-secondary/20 text-secondary rounded-full">
            {badge}
          </span>
        </div>
      )}

      {/* Image Container */}
      <div className="relative h-40 flex items-center justify-center bg-gradient-card p-6">
        <motion.img
          src={image}
          alt={name}
          className="h-20 w-20 object-contain"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-5">
        <span className="text-xs font-medium text-primary uppercase tracking-wider">
          {category}
        </span>
        <h3 className="text-lg font-semibold text-foreground mt-1 mb-2">{name}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>

        {/* Features */}
        {features.length > 0 && (
          <ul className="space-y-1.5 mb-4">
            {features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-primary flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Price & CTA */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-foreground">৳{price}</span>
              {originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ৳{originalPrice}
                </span>
              )}
            </div>
            {originalPrice && (
              <span className="text-xs text-green-400">
                Save {Math.round((1 - price / originalPrice) * 100)}%
              </span>
            )}
          </div>
          
          <Button
            onClick={handleAddToCart}
            disabled={isAdded}
            className={`${
              isAdded
                ? 'bg-green-500 hover:bg-green-500'
                : 'btn-premium'
            } text-white transition-all duration-300`}
          >
            {isAdded ? (
              <>
                <Check className="w-4 h-4 mr-1" />
                Added
              </>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4 mr-1" />
                Add
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      </div>
    </motion.div>
  );
};

export default ProductCard;
