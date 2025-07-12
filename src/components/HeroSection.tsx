import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-fashion.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4 animate-fade-in">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-background/90 text-sm font-medium">
              Trusted by 50,000+ customers
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-background mb-6 leading-tight animate-fade-in-up">
            Premium Fashion
            <span className="block text-accent">Redefined</span>
          </h1>

          <p className="text-lg md:text-xl text-background/90 mb-8 max-w-lg leading-relaxed animate-fade-in-up">
            Discover the latest in contemporary fashion. From trendy shirts to premium accessories, 
            elevate your style with our curated collection.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
            <Button variant="hero" size="xl" className="group">
              Shop New Collection
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button variant="outline" size="xl" className="bg-background/10 border-background/30 text-background hover:bg-background hover:text-primary backdrop-blur-sm">
              Explore Categories
            </Button>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-6 mt-12 animate-fade-in">
            <div className="flex items-center gap-2 text-background/80">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-sm font-medium">Free Shipping</span>
            </div>
            <div className="flex items-center gap-2 text-background/80">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-sm font-medium">Easy Returns</span>
            </div>
            <div className="flex items-center gap-2 text-background/80">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-sm font-medium">Premium Quality</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 right-10 hidden lg:block animate-fade-in">
        <div className="bg-background/10 backdrop-blur-md rounded-lg p-4 border border-background/20">
          <div className="text-background/90 text-sm font-medium mb-1">New Arrivals</div>
          <div className="text-background font-semibold">Weekly Drops</div>
        </div>
      </div>
    </section>
  );
}