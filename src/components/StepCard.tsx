import { cn } from "@/lib/utils";

interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  features?: string[];
  image: string;
  reversed?: boolean;
}

const StepCard = ({ stepNumber, title, description, features, image, reversed }: StepCardProps) => {
  return (
    <div className={cn(
      "flex flex-col lg:flex-row items-center gap-8 lg:gap-16",
      reversed && "lg:flex-row-reverse"
    )}>
      {/* Content */}
      <div className="flex-1 text-center lg:text-left">
        <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
          STEP {stepNumber}
        </div>
        <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
          {title}
        </h3>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          {description}
        </p>
        {features && features.length > 0 && (
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 bg-secondary rounded-full px-4 py-2"
              >
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm font-medium text-secondary-foreground">{feature}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Visual */}
      <div className="flex-1 w-full max-w-md lg:max-w-none">
        <div className="relative">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-2xl transform scale-95" />
          
          {/* Card */}
          <div className="relative bg-card rounded-3xl p-4 md:p-6 shadow-card border border-border/50 transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1 overflow-hidden">
            <img 
              src={image} 
              alt={title}
              className="w-full h-auto rounded-2xl"
            />
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full opacity-60" />
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/40 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default StepCard;
