import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Klump?",
    answer: "Klump is a Buy Now, Pay Later (BNPL) financial technology company that partners with merchants and banks to give you the option of paying for your purchases in flexible installments both online and in-store.",
  },
  {
    question: "What are the eligibility criteria for Klump BNPL?",
    answer: "Eligibility varies depending on the chosen lender. However, customers generally have higher chances of approval if they: Are at least 21 years old, have an active bank account with consistent inflow (salary or business), provide a valid Nigerian ID (NIN, Driver's License, Passport, Voter's Card), and use a salary bank account for the eligibility check (required by many lenders).",
  },
  {
    question: "Does Klump provide the loan directly?",
    answer: "No. Klump is not a lender. The actual financing is provided by partner banks who evaluate your application and make the credit decision.",
  },
  {
    question: "How does the BNPL process work?",
    answer: "Add items to your cart. At checkout, select \"Pay with Klump\". Choose a lending partner from the list. Provide required banking and ID details for eligibility check. If approved, make your first payment (typically 20% – 30% upfront). The remaining balance will be automatically deducted in installments.",
  },
  {
    question: "What is Klump's interest rate?",
    answer: "Klump does not charge loan interest. Lenders on the Klump network determine their own interest rates.",
  },
  {
    question: "What additional information do customers need to provide before they can join?",
    answer: "Before completing a BNPL checkout, customers must: Fill in basic information for lender credit assessment, provide ID, BVN, bank details, and other lender-specific requirements, and complete any lender verification process (phone OTP, facial verification, etc.). Note: A refund on Jumia does not cancel an approved loan. Customers can repurchase an item of the same value, or top up their Klump Wallet to purchase a higher-priced item. Refunds are not issued as cash.",
  },
  {
    question: "Why is my bank not listed?",
    answer: "We are continuously working to onboard more banks. In the meantime, you can select lenders like Credit Direct or Renmoney, which allow customers to access financing even if they don't bank with them.",
  },
  {
    question: "Will I need to link my bank account to Klump?",
    answer: "No. You do not link your bank account directly to Klump. The bank you select may request your banking details to conduct a credit check and assess eligibility for the loan.",
  },
  {
    question: "What information is required to apply?",
    answer: "You need an active bank account with regular cash flow (salary or business income) and valid proof of identification (government-issued ID).",
  },
  {
    question: "When will I know my repayment terms?",
    answer: "Repayment terms (installments, duration, interest rates) will be presented as you go through the loan application process. You'll review and agree to these terms before the loan is finalized.",
  },
  {
    question: "What happens if my application is declined?",
    answer: "If your application is declined by one bank, you may try again with another bank listed on our platform, as approval criteria vary between lending partners.",
  },
  {
    question: "Why was my interest rate high?",
    answer: "The interest rate is set by the financing bank based on their lending policies and your credit profile. Klump does not control or influence the rates offered by partner banks.",
  },
  {
    question: "Does Klump sell or stock the items directly?",
    answer: "No. Klump does not hold stock or sell products. Instead, merchants like Jumia list their products on platforms where Klump's BNPL service is integrated. The bank finances your purchase directly with the merchant once your loan is approved.",
  },
  {
    question: "What if I encounter any issues with my transaction?",
    answer: "You can contact Klump's customer support team at any time on support@useklump.com or call 09088453555. We're here to assist you throughout the application and repayment process.",
  },
  {
    question: "Is my personal information safe?",
    answer: "Yes. Your personal and banking information is securely handled and only shared with your chosen bank for credit evaluation purposes.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 lg:py-32 bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Questions? We're here to help
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find answers to commonly asked questions about Klump
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-2xl px-6 shadow-sm data-[state=open]:shadow-card transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary hover:no-underline py-5 text-base md:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
