import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ShoppingCart,
  CreditCard,
  UserCheck,
  FileText,
  Wallet,
} from "lucide-react";

const steps = [
  {
    icon: ShoppingCart,
    title: "Add Items & Select Klump",
    description:
      'Add items to cart and select "Buy Now, Pay Later – Klump" at checkout.',
  },
  {
    icon: CreditCard,
    title: "Choose Your Lender",
    description: "Choose your preferred lender from the list.",
  },
  {
    icon: UserCheck,
    title: "Provide Required Details",
    description:
      "Provide required banking and ID details for quick eligibility.",
  },
  {
    icon: FileText,
    title: "Make First Payment",
    description:
      "If approved, make your first payment (typically 20%–30%; some lenders require no deposit).",
  },
  {
    icon: Wallet,
    title: "Complete Checkout",
    description:
      "Accept loan terms and complete checkout. Future installments are automatically deducted by the lender.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Paying With Klump on Jumia{" "}
            <span className="text-gradient">Is Easy</
