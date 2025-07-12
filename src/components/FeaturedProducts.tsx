import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  // Mock product data - in a real app, this would come from an API
  const featuredProducts = [
    {
      id: "1",
      name: "Premium Cotton Shirt",
      price: 89,
      originalPrice: 120,
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=600&fit=crop&crop=center",
      category: "Shirts",
      rating: 4.8,
      reviews: 124,
      colors: ["#2563eb", "#ffffff", "#1f2937"],
      isNew: true,
      isSale: true,
    },
    {
      id: "2", 
      name: "Classic Denim Jacket",
      price: 145,
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=600&fit=crop&crop=center",
      category: "Jackets",
      rating: 4.6,
      reviews: 89,
      colors: ["#1e40af", "#374151"],
      isNew: false,
    },
    {
      id: "3",
      name: "Sneakers Collection",
      price: 129,
      originalPrice: 160,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=600&fit=crop&crop=center",
      category: "Footwear", 
      rating: 4.9,
      reviews: 256,
      colors: ["#ffffff", "#000000", "#ef4444"],
      isSale: true,
    },
    {
      id: "4",
      name: "Luxury Watch",
      price: 299,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=600&fit=crop&crop=center",
      category: "Accessories",
      rating: 4.7,
      reviews: 78,
      colors: ["#d97706", "#374151"],
      isNew: true,
    },
    {
      id: "5",
      name: "Casual Hoodie",
      price: 75,
      originalPrice: 95,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=600&fit=crop&crop=center",
      category: "Hoodies",
      rating: 4.5,
      reviews: 167,
      colors: ["#1f2937", "#6b7280", "#ffffff"],
      isSale: true,
    },
    {
      id: "6",
      name: "Designer Handbag",
      price: 189,
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=600&fit=crop&crop=center",
      category: "Accessories",
      rating: 4.8,
      reviews: 93,
      colors: ["#92400e", "#000000"],
      isNew: false,
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Featured Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked favorites from our latest arrivals. Discover pieces that define modern style.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="group">
            View All Products
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}