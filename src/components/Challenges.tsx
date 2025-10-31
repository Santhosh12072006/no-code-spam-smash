import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, XCircle, Languages } from "lucide-react";

const Challenges = () => {
  const challenges = [
    {
      icon: TrendingUp,
      title: "Evolving Spam Techniques",
      description: "Spammers continuously adapt their strategies, using new tricks and sophisticated methods to bypass filters. AI models must be regularly updated to stay ahead of these evolving threats."
    },
    {
      icon: XCircle,
      title: "False Positives",
      description: "Sometimes legitimate emails are incorrectly classified as spam, causing users to miss important messages. Balancing accuracy while minimizing false positives is a constant challenge."
    },
    {
      icon: Languages,
      title: "Language Variations",
      description: "Spam detection must work across multiple languages, regional dialects, slang, and cultural contexts, making it complex to build universally effective models."
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Challenges in Spam Detection</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Despite advances in AI, spam detection systems face ongoing obstacles that require continuous innovation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
                  <challenge.icon className="w-7 h-7 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{challenge.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{challenge.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenges;
