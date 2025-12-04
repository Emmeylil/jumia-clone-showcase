import jumiaLogo from "@/assets/jumia-logo.png";

const JumiaLogo = ({ className = "h-8" }: { className?: string }) => {
  return (
    <img src={jumiaLogo} alt="Jumia" className={className} />
  );
};

export default JumiaLogo;
