const partners = [
  { name: "Jumia", initial: "J" },
  { name: "Konga", initial: "K" },
  { name: "Slot", initial: "S" },
  { name: "PayPorte", initial: "P" },
  { name: "Jiji", initial: "Ji" },
  { name: "Yudala", initial: "Y" },
];

const PartnersSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-10">
          <p className="text-muted-foreground font-medium mb-2">FEATURED STORES</p>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            Shop from 500+ Partner Stores
          </h3>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {partners.map((partner) => (
            <div 
              key={partner.name}
              className="group flex items-center gap-3 bg-card px-6 py-4 rounded-2xl border border-border/50 shadow-sm hover:shadow-card hover:border-primary/20 transition-all duration-300 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <span className="font-display font-bold text-primary">{partner.initial}</span>
              </div>
              <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8">
          <a href="#" className="text-primary font-semibold hover:underline">
            View all partner stores →
          </a>
        </p>
      </div>
    </section>
  );
};

export default PartnersSection;
