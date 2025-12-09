import { Button } from "@/components/ui/button";
import { ArrowRight, Store, CreditCard, UserCheck, FileText, Wallet } from "lucide-react";

const steps = [
  {
    icon: Store,
    title: "Select Your Product",
    description: "Choose the item you want and add it to your cart",
  },
  {
    icon: CreditCard,
    title: "Choose Pay with Klump",
    description: "Select Pay with Klump as desired checkout method",
  },
  {
    icon: UserCheck,
    title: "Verification of Information",
    description: "Fill required details and pause for a quick verification",
  },
  {
    icon: FileText,
    title: "Review Payment Term",
    description: "Evaluate the terms & conditions of your payment schedule",
  },
  {
    icon: Wallet,
    title: "Pay With Klump",
    description: "Make your initial 25% of your purchase and spread the balance over a 12-month period",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Paying With Klump <span className="text-gradient">Is Easy</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Quick Integration, No Application, No Hidden Fees. The Easy Life
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
