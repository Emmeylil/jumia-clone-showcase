import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart, CreditCard, UserCheck, FileText, Wallet } from "lucide-react";

const steps = [
  {
    icon: ShoppingCart,
    title: "Add Items & Select Klump",
    description: "Add items to cart and select \"Buy Now, Pay Later – Klump\" at checkout.",
  },
  {
    icon: CreditCard,
    title: "Choose Your Lender",
    description: "Choose your preferred lender from the list.",
  },
  {
    icon: UserCheck,
    title: "Provide Required Details",
    description: "Provide required banking and ID details for quick eligibility.",
  },
  {
    icon: FileText,
    title: "Make First Payment",
    description: "If approved, make your first payment (typically 20%–30%; some lenders require no deposit).",
  },
  {
    icon: Wallet,
    title: "Complete Checkout",
    description: "Accept loan terms and complete checkout. Future installments are automatically deducted by the lender.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Paying With Klump on Jumia <span className="text-gradient">Is Easy</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Quick Eligibility • Transparent Pricing • Complete Checkout in 5 Minutes
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            {/* Steps */}
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="relative flex gap-6 md:gap-8 items-start opacity-0 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
                >
                  {/* Step Number Circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-lg">
                      <step.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-card rounded-2xl p-6 border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-bold text-primary">STEP {index + 1}</span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 lg:mt-20">
          <a href="https://www.jumia.com.ng/" target="_blank" rel="noopener noreferrer">
            <Button size="xl" className="group">
              Get Started with Klump
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
