import { Card, CardContent } from "@/components/ui/card";
import { Shield, Zap, Users } from "lucide-react";

const Conclusion = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "AI provides robust protection against phishing, malware, and cyber threats"
    },
    {
      icon: Zap,
      title: "Improved Efficiency",
      description: "Automated filtering saves time and keeps inboxes clean and organized"
    },
    {
      icon: Users,
      title: "Better User Experience",
      description: "Smart detection learns from behavior to deliver personalized protection"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">The Future of Email Security</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Artificial Intelligence has revolutionized email security, making spam detection more accurate, 
            efficient, and adaptive than ever before. As AI technology continues to evolve, spam filters 
            will become even more sophisticated, providing users with safer, cleaner, and more productive 
            email experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-2 text-center hover:shadow-lg transition-all hover:scale-105">
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4 shadow-[0_10px_40px_-10px_hsl(201_96%_32%_/_0.3)]">
                  <benefit.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-muted-foreground">
            By leveraging machine learning algorithms and continuous adaptation, AI-powered spam detection 
            systems protect billions of users worldwide, ensuring email remains a safe and reliable 
            communication tool in the digital age.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Conclusion;
