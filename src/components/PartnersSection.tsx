import firstbankLogo from "@/assets/firstbank-logo.png";
import renmoneyLogo from "@/assets/renmoney-logo.png";
import creditdirectLogo from "@/assets/creditdirect-logo.png";

const partners = [
  { name: "First Bank", logo: firstbankLogo },
  { name: "Renmoney", logo: renmoneyLogo },
  { name: "Credit Direct", logo: creditdirectLogo },
];

const PartnersSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-10">
          <p className="text-muted-foreground font-medium mb-2">FEATURED PARTNERS</p>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            See our Partner Brands
          </h3>
        </div>
        
        {/* Static Grid Layout */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
        {partners.map((partner) => (
            <div 
              key={partner.name}
              className="flex items-center justify-center bg-card px-4 py-4 md:px-8 md:py-6 rounded-2xl border border-border/50 shadow-sm hover:shadow-card hover:border-primary/20 transition-all duration-300 cursor-pointer min-w-[140px] md:min-w-[200px]"
            >
              <img 
                src={partner.logo} 
                alt={`${partner.name} logo`}
                className="h-6 md:h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
