import { useState } from "react";
import { Menu, X } from "lucide-react";
import KlumpLogo from "./KlumpLogo";
import JumiaLogo from "./JumiaLogo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logos */}
          <a href="/" className="flex items-center gap-3">
            <KlumpLogo className="h-7" />
            <span className="text-muted-foreground font-medium">×</span>
            <JumiaLogo className="h-7" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-foreground font-medium">
              How it works
            </a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              About us
            </a>
            <a 
              href="https://www.jumia.com.ng/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
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
              <a href="#how-it-works" className="text-foreground font-medium py-2">
                How it works
              </a>
              <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2">
                About us
              </a>
              <a 
                href="https://www.jumia.com.ng/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
              >
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
