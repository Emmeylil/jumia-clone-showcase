import klumpLogo from "@/assets/klump-logo.png";

const PartnersSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center">
          <p className="text-muted-foreground font-medium mb-4">POWERED BY</p>
        <div className="flex justify-center items-center">
            <div className="gradient-hero px-10 py-6 rounded-2xl shadow-lg">
              <img 
                src={klumpLogo} 
                alt="Klump Logo"
                className="h-12 md:h-16 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
