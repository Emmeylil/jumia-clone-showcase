import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-foreground rounded-full blur-3xl opacity-20" />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container relative z-10 text-center px-4 pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-8 animate-fade-up">
          <Sparkles className="w-4 h-4 text-primary-foreground" />
          <span className="text-primary-foreground text-sm font-medium">How it works</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-up stagger-1 leading-tight">
          Buy Anything Now,
          <br />
          <span className="relative">
            Pay in Instalments.
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary-foreground/30 rounded-full" />
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up stagger-2 leading-relaxed">
          Shop for your desired product or service online and use JumiaPay to split
          your purchase into equal instalments.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up stagger-3">
          <Button variant="hero" size="xl" className="group">
            Get started with JumiaPay
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="heroOutline" size="xl">
            Learn more
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 animate-fade-up stagger-4">
          <p className="text-primary-foreground/60 text-sm mb-4">Trusted by thousands of shoppers across Africa</p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-sm font-medium">100K+ Users</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-sm font-medium">500+ Stores</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-sm font-medium">₦1B+ Processed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
