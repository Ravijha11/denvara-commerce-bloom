import { ArrowRight, Star, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-urban.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-[75vh] lg:min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-accent/60 to-accent-vibrant/70" />
        <div className="absolute inset-0 bg-gradient-electric opacity-20 animate-electric-slide bg-size-400" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl">
          {/* Social Proof with Electric Energy */}
          <div className="flex items-center gap-3 mb-6 animate-fade-in">
            <div className="flex items-center gap-1">
              <Zap className="h-4 w-4 text-accent animate-pulse" />
              <TrendingUp className="h-4 w-4 text-accent-vibrant" />
            </div>
            <span className="text-white/90 text-sm font-bold tracking-wide uppercase">
              100K+ Gen-Z Fashion Lovers
            </span>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent animate-bounce-subtle" style={{ animationDelay: `${i * 0.1}s` }} />
              ))}
            </div>
          </div>

          {/* Bold Hero Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white mb-6 leading-[0.9] animate-fade-in-up">
            <span className="block">URBAN</span>
            <span className="block bg-gradient-neon bg-clip-text text-transparent animate-electric-slide bg-size-200">
              ELECTRIC
            </span>
            <span className="block text-accent-vibrant text-4xl md:text-5xl lg:text-6xl font-bold">
              FASHION
            </span>
          </h1>

          {/* Dynamic Tagline */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed animate-fade-in-up font-medium">
            Where <span className="text-accent font-bold">street meets luxury</span>. 
            Bold designs for fearless youth. <span className="text-accent-vibrant">Tech-forward fashion</span> that defines tomorrow.
          </p>

          {/* CTA Buttons with Electric Energy */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up">
            <Button variant="neon" size="xl" className="group font-black tracking-wide">
              <Zap className="h-5 w-5" />
              DROP INTO STYLE
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
            </Button>
            
            <Button variant="electric" size="xl" className="group">
              <TrendingUp className="h-5 w-5" />
              EXPLORE TRENDS
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Features with Youth Energy */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in">
            <div className="flex flex-col items-center text-center p-4 bg-white/10 backdrop-blur-md rounded-lg border border-accent/20 hover:bg-accent/20 transition-all duration-300 group">
              <Zap className="h-6 w-6 text-accent mb-2 group-hover:animate-pulse" />
              <span className="text-white font-bold text-sm">INSTANT</span>
              <span className="text-white/80 text-xs">Same Day</span>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-white/10 backdrop-blur-md rounded-lg border border-accent/20 hover:bg-accent/20 transition-all duration-300 group">
              <TrendingUp className="h-6 w-6 text-accent-vibrant mb-2 group-hover:animate-bounce-subtle" />
              <span className="text-white font-bold text-sm">TRENDING</span>
              <span className="text-white/80 text-xs">Daily Drops</span>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-white/10 backdrop-blur-md rounded-lg border border-accent/20 hover:bg-accent/20 transition-all duration-300 group">
              <Star className="h-6 w-6 text-warning mb-2 group-hover:animate-pulse" />
              <span className="text-white font-bold text-sm">EXCLUSIVE</span>
              <span className="text-white/80 text-xs">VIP Access</span>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-white/10 backdrop-blur-md rounded-lg border border-accent/20 hover:bg-accent/20 transition-all duration-300 group">
              <ArrowRight className="h-6 w-6 text-success mb-2 group-hover:animate-bounce-subtle" />
              <span className="text-white font-bold text-sm">RETURNS</span>
              <span className="text-white/80 text-xs">30 Days</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Tech Elements */}
      <div className="absolute top-20 right-10 hidden lg:block animate-fade-in">
        <div className="bg-accent/20 backdrop-blur-md rounded-lg p-4 border border-accent shadow-neon">
          <div className="text-white/90 text-sm font-bold mb-1 flex items-center gap-2">
            <Zap className="h-4 w-4 text-accent animate-pulse" />
            LIVE DROPS
          </div>
          <div className="text-white font-bold text-lg">NOW AVAILABLE</div>
        </div>
      </div>

      <div className="absolute bottom-20 left-10 hidden lg:block animate-fade-in">
        <div className="bg-accent-vibrant/20 backdrop-blur-md rounded-lg p-4 border border-accent-vibrant shadow-electric">
          <div className="text-white/90 text-sm font-bold mb-1 flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-accent-vibrant animate-bounce-subtle" />
            TRENDING
          </div>
          <div className="text-white font-bold">STREET STYLE</div>
        </div>
      </div>
    </section>
  );
}