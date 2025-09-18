import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Clock, Award, ArrowRight, CheckCircle } from "lucide-react";

const About = () => {
  const scrollToInterestForm = () => {
    const interestForm = document.getElementById("interest-form");
    if (interestForm) {
      interestForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  const values = [
    {
      icon: Shield,
      title: "Reliability",
      description: "Consistent, professional service you can count on every time"
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We work as an extension of your team, not just another vendor"
    },
    {
      icon: Clock,
      title: "Efficiency", 
      description: "Smart coordination and technology to save you time and reduce costs"
    },
    {
      icon: Award,
      title: "Quality",
      description: "Vetted teams and proven processes ensure exceptional results"
    }
  ];

  const trustFactors = [
    "Licensed and insured",
    "Bonded cleaning teams",
    "Background-checked staff",
    "Comprehensive training program",
    "Quality assurance protocols",
    "24-hour satisfaction guarantee"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Elevate property care with reliable teams and simple tech
            </h1>
            <p className="text-xl text-white/90 mb-8">
              PrismPoint was founded to solve the coordination headaches that property managers 
              face every day. We combine reliable service teams with smart technology.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Property management shouldn't mean chasing down multiple vendors, dealing with 
                inconsistent service, or spending hours coordinating simple maintenance tasks.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We built PrismPoint to give property managers a single, reliable solution for 
                all their cleaning and maintenance needs—backed by technology that makes 
                coordination effortless.
              </p>
              <Button onClick={scrollToInterestForm} variant="hero" size="lg">
                Work With Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="space-y-6">
              <Card className="shadow-medium">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">From Property Manager Frustration</h3>
                  <p className="text-muted-foreground">
                    "I was spending 3-4 hours every week just coordinating cleaning and maintenance 
                    across our 30-unit portfolio. Different vendors, different quality standards, 
                    constant follow-ups. There had to be a better way."
                  </p>
                  <div className="mt-4 text-sm text-muted-foreground italic">
                    — PrismPoint Founder (placeholder)
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-medium">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">To Streamlined Solution</h3>
                  <p className="text-muted-foreground">
                    Today, PrismPoint serves property managers across Chico, CA with coordinated 
                    teams, consistent quality standards, and technology that eliminates the 
                    coordination headaches.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">What drives us every day</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center shadow-medium hover:shadow-large transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Trust */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Insured & Vetted Teams</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Every team member goes through our comprehensive vetting and training process. 
                We're fully licensed, insured, and bonded for your peace of mind.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {trustFactors.map((factor, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                    <span>{factor}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="text-xl">Quality Assurance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Every service is verified and documented. If something's not right, 
                    we'll make it right within 24 hours—guaranteed.
                  </p>
                  <div className="bg-accent/10 rounded-lg p-4">
                    <p className="font-semibold text-accent">
                      "If something's not right, we'll make it right within 24 hours."
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="text-xl">Technology-Enabled</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our coordination platform matches you with the right team, tracks service 
                    completion, and keeps you informed every step of the way.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Serving Chico, CA and Nearby</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're proud to serve property managers, landlords, and business owners across 
              Chico and the surrounding communities with reliable, professional property care services.
            </p>
            
            <Card className="shadow-large">
              <CardContent className="p-12">
                <div className="text-6xl mb-4">📍</div>
                <h3 className="text-2xl font-bold mb-4">Local Expertise</h3>
                <p className="text-muted-foreground mb-6">
                  As a local business, we understand the unique needs of Chico-area properties. 
                  Our teams are familiar with local building types, weather considerations, 
                  and community standards.
                </p>
                <div className="text-sm text-muted-foreground">
                  Service area includes Chico, Paradise, Oroville, and surrounding communities
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to experience the PrismPoint difference?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join property managers who trust us for reliable, professional service.
          </p>
          <Button 
            onClick={scrollToInterestForm}
            variant="secondary" 
            size="xl"
            className="bg-white text-primary hover:bg-white/90"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;