import klumpLogo from "@/assets/klump-logo.png";

const KlumpLogo = ({ className = "h-8" }: { className?: string }) => {
  return (
    <img 
      src={klumpLogo} 
      alt="Klump Logo" 
      className={`${className} w-auto object-contain`}
    />
  );
};

export default KlumpLogo;
