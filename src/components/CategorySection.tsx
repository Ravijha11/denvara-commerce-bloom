import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CategorySection() {
  const categories = [
    {
      name: "Men's Collection",
      description: "Sophisticated styles for the modern gentleman",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=center",
      link: "/men",
      featured: true,
    },
    {
      name: "Women's Fashion",
      description: "Elegant pieces for every occasion",
      image: "https://images.unsplash.com/photo-1494790108755-2616c71a87c9?w=500&h=600&fit=crop&crop=center", 
      link: "/women",
      featured: true,
    },
    {
      name: "Premium Shirts",
      description: "Crafted with attention to detail",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop&crop=center",
      link: "/shirts",
    },
    {
      name: "Footwear",
      description: "Step up your style game",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop&crop=center",
      link: "/footwear",
    },
    {
      name: "Accessories",
      description: "Complete your look",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=500&fit=crop&crop=center",
      link: "/accessories",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collections designed for every style and occasion.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Featured Categories - Larger Cards */}
          {categories.filter(cat => cat.featured).map((category, index) => (
            <div 
              key={category.name}
              className="md:col-span-1 lg:col-span-2 group relative overflow-hidden rounded-lg bg-card shadow-soft hover:shadow-medium transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="aspect-[4/3] lg:aspect-[5/3] relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl lg:text-3xl font-serif font-bold text-background mb-2">
                    {category.name}
                  </h3>
                  <p className="text-background/90 mb-4 text-sm lg:text-base">
                    {category.description}
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="bg-background/10 border-background/30 text-background hover:bg-background hover:text-primary backdrop-blur-sm group-hover:translate-x-1 transition-all duration-300"
                  >
                    Explore
                    <ArrowUpRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          ))}

          {/* Regular Categories */}
          {categories.filter(cat => !cat.featured).map((category, index) => (
            <div 
              key={category.name}
              className="group relative overflow-hidden rounded-lg bg-card shadow-soft hover:shadow-medium transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${(index + 2) * 200}ms` }}
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-serif font-bold text-background mb-1">
                    {category.name}
                  </h3>
                  <p className="text-background/80 text-sm mb-3">
                    {category.description}
                  </p>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="p-0 h-auto text-background hover:text-accent font-medium group-hover:translate-x-1 transition-all duration-300"
                  >
                    Shop Now
                    <ArrowUpRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}