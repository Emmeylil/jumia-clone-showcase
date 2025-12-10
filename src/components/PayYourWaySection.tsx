import { CreditCard, Calendar, PiggyBank } from "lucide-react";

const features = [
  {
    icon: CreditCard,
    title: "Pay how you like",
    description: "Enjoy the freedom to choose how you want to pay for purchases",
  },
  {
    icon: Calendar,
    title: "Flexible Payment Terms",
    description: "Spread payments between 3 to 12 months depending on the selected lender",
  },
  {
    icon: PiggyBank,
    title: "Variable Initial Deposit",
    description: "Initial deposit required may vary from 0% to 50%, depending on the lender",
  },
];

const PayYourWaySection = () => {
  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Pay <span className="text-gradient">Your Way</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover new ways to pay at your convenience on the Klump Buy Now Pay Later plan.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PayYourWaySection;
