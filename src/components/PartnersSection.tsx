import { useEffect, useRef, useState } from "react";
import firstbankLogo from "@/assets/firstbank-logo.png";
import renmoneyLogo from "@/assets/renmoney-logo.png";
import creditdirectLogo from "@/assets/creditdirect-logo.png";

const partners = [
  { name: "First Bank", logo: firstbankLogo },
  { name: "Renmoney", logo: renmoneyLogo },
  { name: "Credit Direct", logo: creditdirectLogo },
];

// Duplicate for seamless loop
const duplicatedPartners = [...partners, ...partners, ...partners, ...partners];

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
            className="flex gap-6 md:gap-10 overflow-x-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {duplicatedPartners.map((partner, index) => (
              <div 
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 group flex items-center justify-center bg-card px-8 py-6 rounded-2xl border border-border/50 shadow-sm hover:shadow-card hover:border-primary/20 transition-all duration-300 cursor-pointer min-w-[200px]"
              >
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`}
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
