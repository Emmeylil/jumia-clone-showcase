const JumiaLogo = ({ className = "h-8" }: { className?: string }) => {
  return (
    <svg className={className} viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Jumia Star Icon */}
      <path d="M12 2L14.5 9H22L16 14L18.5 22L12 17L5.5 22L8 14L2 9H9.5L12 2Z" fill="hsl(28 93% 54%)" />
      
      {/* Jumia Text */}
      <text x="28" y="22" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="16" fill="currentColor">
        Jumia
      </text>
    </svg>
  );
};

export default JumiaLogo;
