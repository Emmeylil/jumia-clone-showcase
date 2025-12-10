import { useState, useMemo } from "react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";

const PaymentCalculator = () => {
  const [amount, setAmount] = useState(25000);
  const [inputValue, setInputValue] = useState("25000");
  const [months, setMonths] = useState(3);

  const calculations = useMemo(() => {
    const interestRates: Record<number, number> = {
      1: 2,
      2: 2.5,
      3: 3,
      6: 4,
      12: 5,
    };
    
    const interestRate = interestRates[months] || 3;
    const totalInterest = (amount * interestRate * months) / 100;
    const totalRepayable = amount + totalInterest;
    const monthlyPayment = totalRepayable / months;

    return {
      interestRate,
      monthlyPayment,
      totalRepayable,
      totalInterest,
    };
  }, [amount, months]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 2,
    }).format(value).replace("NGN", "₦");
  };

  const handleSliderChange = (value: number[]) => {
    setAmount(value[0]);
    setInputValue(value[0].toString());
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setInputValue(value);
    
    const numValue = parseInt(value) || 0;
    if (numValue >= 5000 && numValue <= 300000) {
      setAmount(numValue);
    }
  };

  const handleInputBlur = () => {
    let numValue = parseInt(inputValue) || 5000;
    if (numValue < 5000) numValue = 5000;
    if (numValue > 300000) numValue = 300000;
    setAmount(numValue);
    setInputValue(numValue.toString());
  };

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Here's what you <span className="text-gradient">might pay</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Side - Sliders */}
            <div className="bg-card rounded-3xl p-8 border border-border/50 shadow-card">
              {/* Amount Input & Slider */}
              <div className="mb-10">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  Your purchase
                </h3>
                <div className="relative mb-6">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-primary">₦</span>
                  <Input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    className="text-3xl font-bold text-primary pl-10 h-14 border-2 border-primary/20 focus:border-primary"
                  />
                </div>
                <Slider
                  value={[amount]}
                  onValueChange={handleSliderChange}
                  min={5000}
                  max={300000}
                  step={1000}
                  className="mb-2"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>₦5,000</span>
                  <span>₦300,000</span>
                </div>
              </div>

              {/* Duration Selector */}
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                  For how long...
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[1, 2, 3, 6, 12].map((m) => (
                    <button
                      key={m}
                      onClick={() => setMonths(m)}
                      className={`py-3 px-5 rounded-xl font-semibold transition-all ${
                        months === m
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      }`}
                    >
                      {m} month{m > 1 ? "s" : ""}
                    </button>
                  ))}
                </div>
              </div>

              <p className="text-sm text-muted-foreground mt-6 leading-relaxed">
                These results are based on a sample 3% interest scenario and are subject to lender eligibility checks. Actual interest rates, fees, and loan terms may vary depending on the selected lending partner.
              </p>
            </div>

            {/* Right Side - Results */}
            <div className="bg-primary rounded-3xl p-8 text-primary-foreground">
              <div className="text-center mb-8">
                <p className="text-primary-foreground/80 mb-2">Monthly repayment</p>
                <p className="text-4xl md:text-5xl font-bold">
                  {formatCurrency(calculations.monthlyPayment)}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-primary-foreground/20">
                  <span className="text-primary-foreground/80">Interest rate:</span>
                  <span className="font-semibold">{calculations.interestRate}%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-primary-foreground/20">
                  <span className="text-primary-foreground/80">Payable per month:</span>
                  <span className="font-semibold">{formatCurrency(calculations.monthlyPayment)}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-primary-foreground/20">
                  <span className="text-primary-foreground/80">Total repayable:</span>
                  <span className="font-semibold">{formatCurrency(calculations.totalRepayable)}</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-primary-foreground/80">Total interest:</span>
                  <span className="font-semibold">{formatCurrency(calculations.totalInterest)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentCalculator;
