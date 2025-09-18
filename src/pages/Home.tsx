import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  CheckCircle, 
  Clock, 
  Shield, 
  Zap, 
  MapPin, 
  Star,
  ArrowRight,
  Leaf
} from "lucide-react";
import heroProperty from "@/assets/hero-property.jpg";
import cleanLivingRoom from "@/assets/clean-living-room.jpg";
import cleanKitchen from "@/assets/clean-kitchen.jpg";
import cleanCommonArea from "@/assets/clean-common-area.jpg";

const Home = () => {
  const scrollToInterestForm = () => {
    const interestForm = document.getElementById("interest-form");
    if (interestForm) {
      interestForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  const valueProps = [
    {
      icon: Clock,
      title: "Reliable weekly schedules",
      description: "Consistent teams, on time, every time."
    },
    {
      icon: Zap,
      title: "Turnover-ready units",
      description: "Move-in cleans to reduce vacancy days."
    },
    {
      icon: Shield,
      title: "Manager dashboard (beta)",
      description: "Bulk requests, notes, status updates."
    },
    {
      icon: Leaf,
      title: "Green options",
      description: "Low-odor, eco-friendly products available."
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Request",
      description: "Submit your property care needs through our simple form"
    },
    {
      step: "2", 
      title: "We Assign Nearest Team",
      description: "Our system matches you with the best local team"
    },
    {
      step: "3",
      title: "Done & Verified",
      description: "Service completed and quality verified"
    }
  ];

  const testimonials = [
    {
      quote: "PrismPoint has been a game-changer for our property management. Consistent, reliable, and professional service every time.",
      name: "Sarah Johnson",
      role: "Property Manager"
    },
    {
      quote: "The turnover cleaning is exceptional. We've reduced our vacancy days significantly since working with PrismPoint.",
      name: "Mike Chen",
      role: "Landlord"
    },
    {
      quote: "Love the dashboard feature. Makes coordinating across multiple properties so much easier.",
      name: "Jennifer Martinez",
      role: "Regional Property Manager"
    }
  ];

  const faqs = [
    {
      question: "How do I schedule regular cleaning?",
      answer: "Simply submit the interest form below and we'll set up your recurring schedule."
    },
    {
      question: "What areas do you serve?",
      answer: "We currently serve Chico, CA and nearby communities."
    },
    {
      question: "Do you provide your own supplies?",
      answer: "Yes, we bring all necessary supplies and equipment for every service."
    },
    {
      question: "What if I'm not satisfied with the service?",
      answer: "If something's not right, we'll make it right within 24 hours - guaranteed."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={heroProperty} 
            alt="Beautiful, well-maintained property showcasing PrismPoint's professional cleaning services" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Property care, made effortless.
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              Weekly upkeep and fast turnarounds for apartments, condos, and small offices—coordinated by a smart booking system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToInterestForm} 
                variant="secondary" 
                size="xl"
                className="bg-white text-primary hover:bg-white/90"
              >
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="xl"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <Link to="/for-property-managers">For Property Managers</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why property managers choose PrismPoint</h2>
            <p className="text-xl text-muted-foreground">Reliable service, smart coordination, measurable results</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((prop, index) => {
              const images = [cleanLivingRoom, cleanKitchen, cleanCommonArea, cleanLivingRoom];
              const imageAlts = [
                "Clean, organized living room showcasing reliable weekly cleaning services",
                "Spotless kitchen ready for move-in after PrismPoint turnover cleaning",
                "Well-maintained common area managed through PrismPoint's dashboard system",
                "Eco-friendly cleaning products creating a healthy living environment"
              ];
              return (
                <Card key={index} className="text-center shadow-medium hover:shadow-large transition-all duration-300 overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={images[index]} 
                      alt={imageAlts[index]}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <prop.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{prop.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{prop.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground">Three simple steps to better property care</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto w-16 h-16 gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Complete Property Care Services</h2>
            <p className="text-xl text-muted-foreground mb-8">From weekly maintenance to move-in ready units</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="shadow-medium hover:shadow-large transition-all duration-300">
              <CardHeader>
                <CardTitle>Weekly Property Care</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Regular maintenance for occupied units and common areas</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-accent mr-2" />Dusting & vacuuming</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-accent mr-2" />Kitchen & bathroom cleaning</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-accent mr-2" />Common area maintenance</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="shadow-medium hover:shadow-large transition-all duration-300">
              <CardHeader>
                <CardTitle>Turnover / Move-In Ready</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Deep cleaning to get units ready for new tenants</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-accent mr-2" />Appliance deep clean</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-accent mr-2" />Cabinet & fixture detail</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-accent mr-2" />Move-in ready inspection</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="shadow-medium hover:shadow-large transition-all duration-300">
              <CardHeader>
                <CardTitle>Common Areas & Offices</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Professional cleaning for shared spaces and small offices</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-accent mr-2" />Lobby & hallway cleaning</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-accent mr-2" />Laundry room maintenance</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-accent mr-2" />Office space cleaning</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="text-center">
            <Button asChild variant="default" size="lg">
              <Link to="/services">View All Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 text-lg">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="font-medium">Serving Chico, CA and nearby communities</span>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">Trusted by property managers and landlords across Chico</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-medium">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-muted-foreground mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
            {faqs.map((faq, index) => (
              <div key={index} className="space-y-2">
                <h3 className="font-semibold text-lg">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/faqs">View All FAQs <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <section className="py-16 lg:py-24 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to streamline property care?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join property managers who trust PrismPoint for reliable, professional service.
          </p>
          <Button 
            onClick={scrollToInterestForm}
            variant="secondary" 
            size="xl"
            className="bg-white text-primary hover:bg-white/90"
          >
            Get Your Quote Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;