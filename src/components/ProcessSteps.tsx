import { Card, CardContent } from "@/components/ui/card";
import { Database, Filter, Sparkles, Cog, CheckCircle } from "lucide-react";

const ProcessSteps = () => {
  const steps = [
    {
      icon: Database,
      number: "01",
      title: "Data Collection",
      description: "Gather large datasets containing both spam and legitimate (ham) emails to train the AI model effectively."
    },
    {
      icon: Filter,
      number: "02",
      title: "Data Preprocessing",
      description: "Clean and prepare email text by removing unnecessary characters, converting to lowercase, and tokenizing words."
    },
    {
      icon: Sparkles,
      number: "03",
      title: "Feature Extraction",
      description: "Identify and extract important features like word frequency, special characters, links, and sender patterns."
    },
    {
      icon: Cog,
      number: "04",
      title: "Model Training",
      description: "Train machine learning algorithms (like Naive Bayes or Logistic Regression) using the prepared dataset."
    },
    {
      icon: CheckCircle,
      number: "05",
      title: "Testing & Evaluation",
      description: "Test the model on new emails and evaluate its accuracy, precision, and ability to correctly classify spam."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">The Detection Process</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A systematic approach to building and deploying AI-powered spam detection systems
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-all group">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-[0_10px_40px_-10px_hsl(201_96%_32%_/_0.3)] group-hover:scale-110 transition-transform">
                      <step.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-4xl font-bold text-primary/20">{step.number}</span>
                      <h3 className="text-2xl font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
