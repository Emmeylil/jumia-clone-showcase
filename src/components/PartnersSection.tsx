const partners = [
  { name: "First Bank" },
  { name: "Renmoney" },
  { name: "Credit Direct" },
];

const PartnersSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5">
      <div className="container">
        <div className="text-center mb-8">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
            Eligible Financial Institutions
          </h3>
          <p className="text-primary font-medium text-sm">more to come</p>
        </div>
        
        {/* Partners List */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {partners.map((partner) => (
            <div 
              key={partner.name}
              className="flex items-center justify-center bg-card px-6 py-4 md:px-8 md:py-5 rounded-2xl border border-border/50 shadow-sm hover:shadow-card hover:border-primary/20 transition-all duration-300"
            >
              <span className="font-medium text-foreground text-base md:text-lg">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
