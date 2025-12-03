import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is JumiaPay Instalments?",
    answer: "JumiaPay Instalments is a Buy Now, Pay Later service that allows you to split your purchase payments into convenient monthly instalments. Shop for your favorite products on Jumia and pay over time with low interest rates.",
  },
  {
    question: "How does JumiaPay BNPL work?",
    answer: "Simply shop on Jumia, select JumiaPay at checkout, pay 25% upfront, and spread the remaining balance over 2-4 monthly instalments. Our quick eligibility check takes less than 3 minutes.",
  },
  {
    question: "Am I eligible for JumiaPay's instalment plan?",
    answer: "To be eligible, you need to be a Nigerian resident with a valid BVN, have a steady source of income, and pass our quick credit assessment. The process is fast and completely digital.",
  },
  {
    question: "What information do I need to provide?",
    answer: "You'll need to provide your BVN, a valid government-issued ID, proof of income or bank statement, and a valid phone number and email address for verification.",
  },
  {
    question: "Is my personal information safe?",
    answer: "Absolutely. We use bank-grade encryption to protect your data. Your information is never shared with third parties without your consent, and we comply with all data protection regulations.",
  },
  {
    question: "What is the JumiaPay interest rate?",
    answer: "Our interest rates range from 2-4% per month depending on your credit profile and the repayment tenure you choose. There are no hidden fees or charges.",
  },
  {
    question: "Can I make early payments?",
    answer: "Yes! You can pay off your balance early at any time without any prepayment penalties. Early payment can also improve your credit score for future purchases.",
  },
  {
    question: "What happens if I miss a payment?",
    answer: "We send reminders before each due date. If you miss a payment, late fees may apply. Contact our support team if you're experiencing difficulties, and we'll work with you to find a solution.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Questions? We're here to help
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find answers to commonly asked questions about JumiaPay Instalments
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

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline transition-colors"
          >
            Contact our support team
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
