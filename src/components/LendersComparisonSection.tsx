const lenders = [
  {
    name: "Stanbic",
    deposit: "Nil",
    tenure: "Up to 24 months",
    loanLimit: "₦50,000 – ₦7.5M",
    requiredInfo: "Salary account number, registered phone number",
    interest: "4% (reducing balance)",
    fees: "1% mgmt fee, insurance varies",
    bankRequirement: "Salary account with Stanbic",
    time: "< 3 mins",
  },
  {
    name: "Polaris",
    deposit: "Nil",
    tenure: "Up to 12 months",
    loanLimit: "₦50,000 – ₦1M",
    requiredInfo: "Salary account, phone number",
    interest: "2.25% simple",
    fees: "1.5% fee + 2% insurance",
    bankRequirement: "Salary account",
    time: "< 3 mins",
  },
  {
    name: "First Bank",
    deposit: "Minimum 25%",
    tenure: "Up to 6 months",
    loanLimit: "₦1,000 – ₦1M",
    requiredInfo: "Vulte credentials, active account",
    interest: "3% (reducing)",
    fees: "Nil",
    bankRequirement: "FirstBank personal accounts",
    time: "< 3 mins",
  },
  {
    name: "Fidelity",
    deposit: "25%",
    tenure: "Up to 12 months",
    loanLimit: "₦25,000 – ₦2M",
    requiredInfo: "Account number, phone, banking credentials",
    interest: "4%",
    fees: "1% mgmt fee",
    bankRequirement: "Salaried customers (Fidelity or partner payroll vendors)",
    time: "< 3 mins",
  },
  {
    name: "Renmoney",
    deposit: "25%",
    tenure: "Up to 12 months",
    loanLimit: "₦135,000 – ₦2.6M",
    requiredInfo: "ID, BVN, active account, camera",
    interest: "Determined case-by-case",
    fees: "1% mgmt fee",
    bankRequirement: "Bank agnostic",
    time: "< 1 hour",
  },
  {
    name: "Wema (ALAT)",
    deposit: "Minimum 20%",
    tenure: "Up to 6 months",
    loanLimit: "₦50,000 – ₦1M",
    requiredInfo: "ALAT app credentials",
    interest: "3%",
    fees: "None",
    bankRequirement: "ALAT accounts",
    time: "< 2 mins",
  },
  {
    name: "Credit Direct (CDL)",
    deposit: "50%",
    tenure: "Up to 6 months",
    loanLimit: "₦35,000 – ₦1M",
    requiredInfo: "1 valid ID, account number, utility bill",
    interest: "7.5% flat",
    fees: "₦6,000 profile fee + 1.5% mgmt fee",
    bankRequirement: "All personal accounts",
    time: "< 2 mins",
  },
  {
    name: "VeendHQ",
    deposit: "30–80%",
    tenure: "Up to 4 months",
    loanLimit: "₦400,000 – ₦5M",
    requiredInfo: "BVN, salary details, phone, ID",
    interest: "7.5% flat",
    fees: "None",
    bankRequirement: "Salaried & non-salaried",
    time: "< 2 mins",
  },
  {
    name: "Propel",
    deposit: "Minimum 30%",
    tenure: "1–6 months",
    loanLimit: "₦25,000 – ₦3M",
    requiredInfo: "Email, name, salary/net income",
    interest: "4% simple",
    fees: "None",
    bankRequirement: "Salaried & non-salaried Propel users",
    time: "< 2 mins",
  },
];

const LendersComparisonSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Lender <span className="text-gradient">Comparison</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            What percentage of the total amount is required as an initial deposit? Every lending partner on Klump has different loan terms, including varying equity (initial deposit) requirements.
          </p>
        </div>

        {/* Lender Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lenders.map((lender) => (
            <div
              key={lender.name}
              className="bg-card rounded-2xl border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden"
            >
              {/* Card Header */}
              <div className="bg-primary px-5 py-4 flex items-center justify-between">
                <h3 className="font-display font-bold text-primary-foreground text-lg">
                  {lender.name}
                </h3>
                <span className="text-xs font-medium bg-primary-foreground/20 text-primary-foreground px-2 py-1 rounded-lg">
                  {lender.time}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-4">
                {/* Deposit Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Initial Deposit</span>
                  <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                    lender.deposit === "Nil" 
                      ? "bg-green-500/10 text-green-600" 
                      : "bg-primary/10 text-primary"
                  }`}>
                    {lender.deposit}
                  </span>
                </div>

                {/* Details Grid */}
                <div className="space-y-3 pt-2 border-t border-border/50">
                  <div className="flex justify-between items-start gap-2">
                    <span className="text-sm text-muted-foreground shrink-0">Loan Tenure</span>
                    <span className="text-sm font-medium text-foreground text-right">{lender.tenure}</span>
                  </div>
                  
                  <div className="flex justify-between items-start gap-2">
                    <span className="text-sm text-muted-foreground shrink-0">Loan Limit</span>
                    <span className="text-sm font-medium text-foreground text-right">{lender.loanLimit}</span>
                  </div>
                  
                  <div className="flex justify-between items-start gap-2">
                    <span className="text-sm text-muted-foreground shrink-0">Monthly Interest</span>
                    <span className="text-sm font-medium text-foreground text-right">{lender.interest}</span>
                  </div>
                  
                  <div className="flex justify-between items-start gap-2">
                    <span className="text-sm text-muted-foreground shrink-0">Fees</span>
                    <span className="text-sm font-medium text-foreground text-right">{lender.fees}</span>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="pt-3 border-t border-border/50 space-y-2">
                  <div>
                    <span className="text-xs text-muted-foreground block mb-1">Required Info</span>
                    <span className="text-xs text-foreground">{lender.requiredInfo}</span>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground block mb-1">Bank Requirement</span>
                    <span className="text-xs text-foreground">{lender.bankRequirement}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          * Terms and conditions apply. Loan approval is subject to lender eligibility checks.
        </p>
      </div>
    </section>
  );
};

export default LendersComparisonSection;
