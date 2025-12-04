import StepCard from "./StepCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import stepShopping from "@/assets/step-shopping.png";
import stepReview from "@/assets/step-review.png";
import stepVerify from "@/assets/step-verify.png";
import stepPayment from "@/assets/step-payment.png";

const steps = [
  {
    stepNumber: 1,
    title: "Shop Online",
    description: "Go shopping at your preferred online store on Jumia and choose the pay-in-instalments option at checkout. The Klump instalment option is now available across hundreds of stores.",
    features: ["500+ Partner Stores", "Easy Checkout", "Instant Approval"],
    image: stepShopping,
  },
  {
    stepNumber: 2,
    title: "Review Your Payment Terms",
    description: "Klump offers a monthly payment plan that gives you more time to pay for the things you desire. These terms have been crafted to help you enjoy a stress-free buying experience.",
    features: ["Low interest (2-4%)", "No hidden fees", "Flexible terms"],
    image: stepReview,
  },
  {
    stepNumber: 3,
    title: "Quick Eligibility Check",
    description: "Using our proprietary credit eligibility and fraud detection engine, we are equipped to make credit granting decisions on all our customers within 3 minutes.",
    features: ["ID Verification", "Income Check", "BVN Verification"],
    image: stepVerify,
  },
  {
    stepNumber: 4,
    title: "Make Your Payments",
    description: "Use Klump to spread all online payments for your purchases. Make an initial 25% deposit and split the balance into convenient monthly instalments that suit your financial plan.",
    features: ["25% Initial Deposit", "Monthly Instalments", "Auto Reminders"],
    image: stepPayment,
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Simple Steps to <span className="text-gradient">Financial Freedom</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get started in minutes and spread your payments over time
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-20 lg:space-y-32">
          {steps.map((step, index) => (
            <div 
              key={step.stepNumber}
              className="opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'forwards' }}
            >
              <StepCard
                {...step}
                reversed={index % 2 !== 0}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20 lg:mt-32">
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
