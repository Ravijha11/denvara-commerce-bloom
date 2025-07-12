import { Heart, Star, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  colors?: string[];
  isNew?: boolean;
  isSale?: boolean;
  className?: string;
}

export default function ProductCard({
  id,
  name,
  price,
  originalPrice,
  image,
  category,
  rating,
  reviews,
  colors = [],
  isNew = false,
  isSale = false,
  className,
}: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <div 
      className={cn(
        "group relative bg-card rounded-lg border border-border hover:shadow-medium transition-all duration-300 overflow-hidden",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <Badge variant="secondary" className="bg-accent text-accent-foreground font-medium">
              New
            </Badge>
          )}
          {isSale && discount > 0 && (
            <Badge variant="destructive" className="font-medium">
              -{discount}%
            </Badge>
          )}
        </div>

        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="icon-sm"
          className={cn(
            "absolute top-3 right-3 bg-background/80 backdrop-blur-sm hover:bg-background transition-all duration-200",
            isWishlisted && "text-red-500 hover:text-red-600"
          )}
          onClick={() => setIsWishlisted(!isWishlisted)}
        >
          <Heart className={cn("h-4 w-4", isWishlisted && "fill-current")} />
        </Button>

        {/* Quick Actions - Show on Hover */}
        <div className={cn(
          "absolute inset-x-3 bottom-3 transition-all duration-300",
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <Button variant="cart" size="sm" className="w-full">
            <ShoppingBag className="h-4 w-4" />
            Quick Add
          </Button>
        </div>

        {/* Color Variants */}
        {colors.length > 0 && (
          <div className="absolute bottom-3 left-3 flex gap-1">
            {colors.slice(0, 3).map((color, index) => (
              <div
                key={index}
                className="w-3 h-3 rounded-full border border-background/50"
                style={{ backgroundColor: color }}
              />
            ))}
            {colors.length > 3 && (
              <div className="w-3 h-3 rounded-full bg-background/80 border border-background/50 flex items-center justify-center">
                <span className="text-[8px] font-medium text-foreground">+{colors.length - 3}</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-1">
          {category}
        </div>
        
        <h3 className="font-medium text-foreground mb-2 line-clamp-2 group-hover:text-accent transition-colors duration-200">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={cn(
                  "h-3 w-3",
                  i < Math.floor(rating) 
                    ? "fill-accent text-accent" 
                    : "text-muted-foreground"
                )} 
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold text-foreground">
            ${price}
          </span>
          {originalPrice && originalPrice > price && (
            <span className="text-sm text-muted-foreground line-through">
              ${originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}