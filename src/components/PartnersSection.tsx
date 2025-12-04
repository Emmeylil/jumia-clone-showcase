import { useEffect, useRef, useState } from "react";

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

// Duplicate for seamless loop
const duplicatedPartners = [...partners, ...partners];

const PartnersSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const animate = () => {
      if (!isPaused && scrollContainer) {
        scrollPosition += scrollSpeed;
        
        // Reset scroll when we've scrolled through the first set
        const halfWidth = scrollContainer.scrollWidth / 2;
        if (scrollPosition >= halfWidth) {
          scrollPosition = 0;
        }
        
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-10">
          <p className="text-muted-foreground font-medium mb-2">FEATURED PARTNERS</p>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            See our Partner Brands
          </h3>
        </div>
        
        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {duplicatedPartners.map((partner, index) => (
              <div 
                key={`${partner.name}-${index}`}
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
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
