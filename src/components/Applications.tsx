import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Applications = () => {
  const providers = [
    {
      name: "Gmail",
      description: "Uses sophisticated AI algorithms to analyze billions of emails daily, learning from user behavior and automatically filtering spam with over 99.9% accuracy.",
      features: ["Machine Learning", "User Feedback Loop", "Real-time Analysis"]
    },
    {
      name: "Outlook",
      description: "Employs advanced threat protection powered by Microsoft's AI to identify phishing attempts, malware, and spam while adapting to new threats continuously.",
      features: ["Threat Intelligence", "Pattern Recognition", "Safe Links"]
    },
    {
      name: "Yahoo Mail",
      description: "Leverages intelligent spam filtering that learns from millions of users, automatically updating its detection algorithms to block new spam techniques.",
      features: ["Adaptive Filtering", "Sender Reputation", "Content Analysis"]
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Real-World Applications</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Major email providers use AI-powered spam detection to protect billions of users worldwide
          </p>
        </div>

        <div className="space-y-6">
          {providers.map((provider, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-all">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-primary">{provider.name}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {provider.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {provider.features.map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="px-3 py-1">
                          {feature}
                        </Badge>
                      ))}
                    </div>
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

export default Applications;
