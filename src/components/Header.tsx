import { useState } from "react";
import { Search, ShoppingBag, Heart, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(2);

  const navigation = [
    { name: "NEW DROPS", href: "/new" },
    { name: "MEN", href: "/men" },
    { name: "WOMEN", href: "/women" },
    { name: "STREETWEAR", href: "/streetwear" },
    { name: "TECH WEAR", href: "/tech" },
    { name: "FOOTWEAR", href: "/footwear" },
    { name: "SALE", href: "/sale" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-accent/20 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 shadow-electric">
      {/* Dynamic announcement bar */}
      <div className="bg-gradient-electric text-white px-4 py-2 text-center text-sm font-bold animate-electric-slide bg-size-200">
        🔥 NEW DROPS EVERY FRIDAY | FREE WORLDWIDE SHIPPING | ELECTRIC SUMMER SALE 🔥
      </div>

      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon-sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>

          {/* Bold Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-display font-black text-primary tracking-tight">
              DENVARA
              <span className="text-accent text-lg font-bold">& CO</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "text-foreground hover:text-accent transition-all duration-200 font-bold text-sm tracking-wide hover:scale-105",
                  index === 0 && "text-accent animate-pulse", // Highlight NEW DROPS
                  item.name === "SALE" && "text-warning hover:text-warning/80"
                )}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Search & Actions */}
          <div className="flex items-center space-x-4">
            {/* Search - Hidden on mobile */}
            <div className="hidden lg:flex items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search for products..."
                  className="w-64 pl-10"
                />
              </div>
            </div>

            {/* Action buttons */}
            <Button variant="ghost" size="icon-sm" className="hidden sm:flex">
              <Search className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="icon-sm">
              <User className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="icon-sm">
              <Heart className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="icon-sm" className="relative">
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center font-medium">
                  {cartCount}
                </span>
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <nav className="pb-4 pt-2 space-y-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-foreground hover:text-accent transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}