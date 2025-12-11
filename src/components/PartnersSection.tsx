import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const partners = [
  { name: "First Bank" },
  { name: "Renmoney" },
  { name: "Credit Direct" },
];

const PartnersSection = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPartners = partners.filter((partner) =>
    partner.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-8">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
            Eligible Financial Institutions
          </h3>
          <p className="text-muted-foreground text-sm">more to come</p>
        </div>
        
        {/* Partners List */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8">
          {filteredPartners.map((partner) => (
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

        {/* Search */}
        <div className="max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by bank name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-5 rounded-xl border-border/50 focus:border-primary"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
