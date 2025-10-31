import { Card, CardContent } from "@/components/ui/card";
import { Mail, AlertTriangle } from "lucide-react";

const Introduction = () => {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">What Are Spam Emails?</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <Mail className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Definition</h3>
              <p className="text-muted-foreground leading-relaxed">
                Spam emails are unsolicited, unwanted messages sent in bulk to numerous recipients. 
                They often contain advertisements, phishing attempts, malware, or fraudulent schemes 
                designed to deceive recipients or compromise their security.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
                <AlertTriangle className="w-7 h-7 text-destructive" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Why Detection Matters</h3>
              <p className="text-muted-foreground leading-relaxed">
                Effective spam detection is crucial for cybersecurity, protecting users from scams 
                and identity theft. It saves valuable time by keeping inboxes clean, reduces exposure 
                to malicious content, and helps maintain productivity by filtering out distractions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
