import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import ConceptOverview from "@/components/ConceptOverview";
import ProcessSteps from "@/components/ProcessSteps";
import Challenges from "@/components/Challenges";
import Applications from "@/components/Applications";
import Conclusion from "@/components/Conclusion";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Introduction />
      <ConceptOverview />
      <ProcessSteps />
      <Challenges />
      <Applications />
      <Conclusion />
    </div>
  );
};

export default Index;
