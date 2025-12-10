import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection";
import PayYourWaySection from "@/components/PayYourWaySection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PaymentCalculator from "@/components/PaymentCalculator";
import LendersComparisonSection from "@/components/LendersComparisonSection";
import FAQSection from "@/components/FAQSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>JumiaPay - Buy Now, Pay Later | How It Works</title>
        <meta 
          name="description" 
          content="Shop for your desired products on Jumia and pay in easy instalments with JumiaPay. Low interest rates, quick approval, and flexible payment plans."
        />
        <meta name="keywords" content="JumiaPay, buy now pay later, BNPL, Jumia, instalments, Nigeria, Africa" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <PartnersSection />
          <PayYourWaySection />
          <HowItWorksSection />
          <PaymentCalculator />
          <LendersComparisonSection />
          <FAQSection />
        </main>
      </div>
    </>
  );
};

export default Index;
