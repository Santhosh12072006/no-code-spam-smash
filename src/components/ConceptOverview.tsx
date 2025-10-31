import { Card, CardContent } from "@/components/ui/card";
import { Brain, Search, FileText } from "lucide-react";

const ConceptOverview = () => {
  const features = [
    {
      icon: Brain,
      title: "Pattern Recognition",
      description: "AI analyzes thousands of emails to identify common patterns and characteristics that distinguish spam from legitimate messages."
    },
    {
      icon: FileText,
      title: "Content Analysis",
      description: "Machine learning examines subject lines, message body, sender information, and embedded links to detect suspicious elements."
    },
    {
      icon: Search,
      title: "Feature Detection",
      description: "Algorithms identify key indicators like excessive capitalization, suspicious keywords, unusual sender addresses, and malicious URLs."
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">How AI Detects Spam</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Artificial Intelligence uses advanced pattern recognition and data analysis 
            to automatically identify and filter spam emails with remarkable accuracy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-all hover:scale-105">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-6 shadow-[0_10px_40px_-10px_hsl(201_96%_32%_/_0.3)]">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConceptOverview;
