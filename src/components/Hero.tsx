import { Shield } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-10" />
      
      <div className="container max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary mb-8 shadow-[0_10px_40px_-10px_hsl(201_96%_32%_/_0.3)]">
          <Shield className="w-10 h-10 text-primary-foreground" />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          AI-Powered Spam Email Detection
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Understanding how Artificial Intelligence and Machine Learning protect your inbox 
          from unwanted emails, scams, and cyber threats.
        </p>
      </div>
    </section>
  );
};

export default Hero;
