import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const partners = [
  { name: "First Bank", initial: "FB" },
  { name: "GTBank", initial: "GT" },
  { name: "Access Bank", initial: "AB" },
  { name: "UBA", initial: "UBA" },
  { name: "Zenith Bank", initial: "ZB" },
  { name: "Stanbic IBTC", initial: "SI" },
  { name: "Fidelity Bank", initial: "FD" },
  { name: "Sterling Bank", initial: "ST" },
];

const PartnersSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener("scroll", checkScroll);
      return () => ref.removeEventListener("scroll", checkScroll);
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-10">
          <p className="text-muted-foreground font-medium mb-2">FEATURED PARTNERS</p>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            See our Partner Brands
          </h3>
        </div>
        
        <div className="relative">
          {/* Left Arrow */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border shadow-md flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors -ml-2 md:-ml-5"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {/* Slider */}
          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {partners.map((partner) => (
              <div 
                key={partner.name}
                className="flex-shrink-0 group flex items-center gap-3 bg-card px-6 py-4 rounded-2xl border border-border/50 shadow-sm hover:shadow-card hover:border-primary/20 transition-all duration-300 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="font-display font-bold text-primary text-sm">{partner.initial}</span>
                </div>
                <span className="font-medium text-foreground group-hover:text-primary transition-colors whitespace-nowrap">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border shadow-md flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors -mr-2 md:-mr-5"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
