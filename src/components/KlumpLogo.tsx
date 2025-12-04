const KlumpLogo = ({ className = "h-8" }: { className?: string }) => {
  return (
    <svg className={className} viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Klump Icon */}
      <circle cx="12" cy="16" r="10" fill="hsl(228 54% 27%)" />
      <path d="M8 12L12 16L8 20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 12L16 16L12 20" stroke="hsl(28 93% 54%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* Klump Text */}
      <text x="28" y="22" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="16" fill="currentColor">
        Klump
      </text>
    </svg>
  );
};

export default KlumpLogo;
