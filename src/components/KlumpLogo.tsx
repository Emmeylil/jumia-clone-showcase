import klumpLogo from "@/assets/klump-logo.png";

const KlumpLogo = ({ className = "h-8" }: { className?: string }) => {
  return (
    <img src={klumpLogo} alt="Klump" className={className} />
  );
};

export default KlumpLogo;
