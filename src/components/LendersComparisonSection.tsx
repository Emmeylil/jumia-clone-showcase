import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

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
    <section className="py-20 lg:py-32 bg-muted/30">
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

        {/* Table */}
        <div className="bg-card rounded-2xl border border-border/50 shadow-card overflow-hidden">
          <ScrollArea className="w-full">
            <div className="min-w-[1200px]">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="text-left py-4 px-4 font-display font-semibold text-sm">Lender</th>
                    <th className="text-left py-4 px-4 font-display font-semibold text-sm">Initial Deposit</th>
                    <th className="text-left py-4 px-4 font-display font-semibold text-sm">Loan Tenure</th>
                    <th className="text-left py-4 px-4 font-display font-semibold text-sm">Loan Limit</th>
                    <th className="text-left py-4 px-4 font-display font-semibold text-sm">Required Info</th>
                    <th className="text-left py-4 px-4 font-display font-semibold text-sm">Monthly Interest</th>
                    <th className="text-left py-4 px-4 font-display font-semibold text-sm">Fees</th>
                    <th className="text-left py-4 px-4 font-display font-semibold text-sm">Bank Requirement</th>
                    <th className="text-left py-4 px-4 font-display font-semibold text-sm">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {lenders.map((lender, index) => (
                    <tr 
                      key={lender.name}
                      className={`border-b border-border/50 hover:bg-muted/50 transition-colors ${
                        index % 2 === 0 ? "bg-background" : "bg-muted/20"
                      }`}
                    >
                      <td className="py-4 px-4 font-semibold text-foreground">{lender.name}</td>
                      <td className="py-4 px-4 text-muted-foreground">
                        <span className={`inline-block px-2 py-1 rounded-lg text-xs font-medium ${
                          lender.deposit === "Nil" 
                            ? "bg-green-500/10 text-green-600" 
                            : "bg-primary/10 text-primary"
                        }`}>
                          {lender.deposit}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-muted-foreground">{lender.tenure}</td>
                      <td className="py-4 px-4 text-muted-foreground">{lender.loanLimit}</td>
                      <td className="py-4 px-4 text-muted-foreground text-sm max-w-[200px]">{lender.requiredInfo}</td>
                      <td className="py-4 px-4 text-muted-foreground">{lender.interest}</td>
                      <td className="py-4 px-4 text-muted-foreground text-sm">{lender.fees}</td>
                      <td className="py-4 px-4 text-muted-foreground text-sm max-w-[180px]">{lender.bankRequirement}</td>
                      <td className="py-4 px-4">
                        <span className="inline-block px-2 py-1 rounded-lg text-xs font-medium bg-secondary text-secondary-foreground">
                          {lender.time}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          * Terms and conditions apply. Loan approval is subject to lender eligibility checks.
        </p>
      </div>
    </section>
  );
};

export default LendersComparisonSection;
