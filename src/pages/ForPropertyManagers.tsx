import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  CheckCircle, 
  ArrowRight, 
  Calendar, 
  Building, 
  Clock, 
  Users, 
  FileText, 
  Shield,
  Star
} from "lucide-react";

const ForPropertyManagers = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const scrollToInterestForm = () => {
    const interestForm = document.getElementById("interest-form");
    if (interestForm) {
      interestForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBetaSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    // Simulate signup process
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Added to Waitlist!",
      description: "We'll notify you when the Manager Dashboard is available.",
    });
    
    setEmail("");
    setIsLoading(false);
  };

  const features = [
    {
      icon: Calendar,
      title: "Recurring Schedules",
      description: "Set up weekly, biweekly, or monthly cleaning schedules that run automatically"
    },
    {
      icon: Building,
      title: "Multi-Property Support",
      description: "Manage all your properties from one dashboard with bulk scheduling"
    },
    {
      icon: Clock,
      title: "Priority SLAs",
      description: "Guaranteed response times for urgent requests and turnover cleaning"
    },
    {
      icon: Users,
      title: "Dedicated Account Contact",
      description: "Direct line to your account manager for any questions or special requests"
    },
    {
      icon: FileText,
      title: "Monthly Reporting",
      description: "Detailed reports on services completed, costs, and property condition notes"
    },
    {
      icon: Shield,
      title: "Insurance & Bonding",
      description: "Full coverage and vetted teams give you peace of mind"
    }
  ];

  const benefits = [
    "Consolidate requests across multiple properties",
    "Standardize checklists and quality standards",
    "Cut vacancy days with faster turnover cleaning",
    "Reduce time spent coordinating with vendors",
    "Track all services and costs in one place",
    "Get priority scheduling for urgent needs"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Predictable schedules. Faster turnarounds. Fewer headaches.
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Consolidate requests, standardize checklists, and cut vacancy days—without babysitting vendors.
            </p>
            <Button 
              onClick={scrollToInterestForm}
              variant="secondary" 
              size="xl"
              className="bg-white text-primary hover:bg-white/90"
            >
              Request a manager plan
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Built for Property Managers</h2>
            <p className="text-xl text-muted-foreground">Everything you need to streamline property maintenance</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-medium hover:shadow-large transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Manager Dashboard Beta */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-xl border-primary/20">
              <CardHeader className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <CardTitle className="text-3xl font-bold">Manager Dashboard</CardTitle>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">Beta</Badge>
                </div>
                <CardDescription className="text-lg">
                  Get early access to our property management dashboard with bulk scheduling, 
                  service notes, and status updates.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Dashboard Features:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-accent mr-2" />Bulk service requests</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-accent mr-2" />Real-time status updates</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-accent mr-2" />Property condition notes</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-accent mr-2" />Service history tracking</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-accent mr-2" />Cost reporting</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Join the Waitlist</h4>
                    <form onSubmit={handleBetaSignup} className="space-y-4">
                      <div>
                        <Label htmlFor="beta-email">Email Address</Label>
                        <Input
                          id="beta-email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                      <Button type="submit" variant="hero" className="w-full" disabled={isLoading}>
                        {isLoading ? "Adding..." : "Join Dashboard Beta"}
                      </Button>
                    </form>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Why Property Managers Choose PrismPoint
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Stop juggling multiple vendors and chasing down service providers. 
                Our integrated approach saves you time and reduces vacancy days.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-lg">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-6">
              <Card className="shadow-medium">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground italic mb-4">
                    "PrismPoint has cut our turnover time from 5 days to 2 days on average. 
                    The dashboard makes coordinating across 47 units so much easier."
                  </blockquote>
                  <div>
                    <div className="font-semibold">Maria Rodriguez</div>
                    <div className="text-sm text-muted-foreground">Regional Property Manager</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medium">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground italic mb-4">
                    "Finally found a cleaning service that understands property management. 
                    Reliable, professional, and the pricing is transparent."
                  </blockquote>
                  <div>
                    <div className="font-semibold">David Kim</div>
                    <div className="text-sm text-muted-foreground">Property Management Company Owner</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-8">Trusted by Property Managers</h3>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-lg font-semibold">Property Management Logo 1</div>
            <div className="text-lg font-semibold">Property Management Logo 2</div>
            <div className="text-lg font-semibold">Property Management Logo 3</div>
            <div className="text-lg font-semibold">Property Management Logo 4</div>
          </div>
          <p className="text-muted-foreground mt-4">Placeholder for partner logos</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to streamline your property operations?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join property managers who trust PrismPoint for reliable, 
            cost-effective property care solutions.
          </p>
          <Button 
            onClick={scrollToInterestForm}
            variant="secondary" 
            size="xl"
            className="bg-white text-primary hover:bg-white/90"
          >
            Request Manager Plan
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ForPropertyManagers;