import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-xl">K</span>
            </div>
            <span className="font-display font-bold text-xl text-foreground">
              Klump <span className="text-primary">× Jumia</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Products
            </a>
            <a href="#how-it-works" className="text-foreground font-medium">
              How it works
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              About us
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Shop
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2">
                Products
              </a>
              <a href="#how-it-works" className="text-foreground font-medium py-2">
                How it works
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2">
                About us
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2">
                Shop
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
