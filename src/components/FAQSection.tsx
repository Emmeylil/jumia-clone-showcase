import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Klump?",
    answer: "Klump Technology Company Ltd is a Nigerian based fintech company whose flagship product; Klump BNPL accords users the financial freedom to spread purchase payments over monthly instalments. The Klump Checkout option is now available on Jumia.",
  },
  {
    question: "How does Klump BNPL work?",
    answer: "Simply shop on Jumia, select Klump at checkout, pay 25% upfront, and spread the remaining balance over 2-4 monthly instalments. Our quick eligibility check takes less than 3 minutes.",
  },
  {
    question: "Am I eligible for Klump's BNPL?",
    answer: "To be eligible, you need to be a Nigerian resident with a valid BVN, have a steady source of income, and pass our quick credit assessment. The process is fast and completely digital.",
  },
  {
    question: "What information do I need to provide to join Klump?",
    answer: "You'll need to provide your BVN, a valid government-issued ID, proof of income or bank statement, and a valid phone number and email address for verification.",
  },
  {
    question: "Is my personal information safe?",
    answer: "Absolutely. We use bank-grade encryption to protect your data. Your information is never shared with third parties without your consent, and we comply with all data protection regulations.",
  },
  {
    question: "Can I make payments earlier than I agreed to?",
    answer: "Yes! You can pay off your balance early at any time without any prepayment penalties. Early payment can also improve your credit score for future purchases.",
  },
  {
    question: "What is the Klump interest rate?",
    answer: "Our interest rates range from 2-4% per month depending on your credit profile and the repayment tenure you choose. There are no hidden fees or charges.",
  },
  {
    question: "How do I know when I've been charged a payment?",
    answer: "You'll receive SMS and email notifications before each payment is due. We also send reminders to ensure you never miss a payment date.",
  },
  {
    question: "How do I contact Jumia customer service?",
    answer: "For order-related inquiries, please contact Jumia customer service directly through the Jumia app or website.",
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
