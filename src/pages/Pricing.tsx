import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { CheckCircle, ArrowRight, Info } from "lucide-react";

const Pricing = () => {
  const [frequency, setFrequency] = useState<"weekly" | "biweekly" | "monthly">("weekly");

  const scrollToInterestForm = () => {
    const interestForm = document.getElementById("interest-form");
    if (interestForm) {
      interestForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  const pricingTiers = [
    {
      title: "Weekly Care",
      subtitle: "Occupied Units",
      basePrice: { weekly: "$60-$90", biweekly: "$65-$95", monthly: "$70-$100" },
      period: "per visit",
      description: "Regular maintenance cleaning for occupied residential units",
      features: [
        "Dusting all surfaces",
        "Vacuum and mop floors", 
        "Kitchen cleaning",
        "Bathroom cleaning",
        "Touch-point sanitization",
        "Supply and equipment included"
      ],
      popular: true
    },
    {
      title: "Turnover Clean",
      subtitle: "Move-In Ready",
      basePrice: { weekly: "$150-$250", biweekly: "$150-$250", monthly: "$150-$250" },
      period: "per unit",
      description: "Deep cleaning for vacant units to get them move-in ready fast",
      features: [
        "Complete appliance cleaning",
        "Cabinet cleaning (inside & out)",
        "Light fixture cleaning",
        "Detailed floor cleaning",
        "Move-in inspection",
        "Same-day availability"
      ],
      popular: false
    },
    {
      title: "Common Areas",
      subtitle: "Buildings",
      basePrice: { weekly: "$200-$500", biweekly: "$150-$375", monthly: "$100-$250" },
      period: "per month",
      description: "Professional cleaning for lobbies, hallways, and shared spaces",
      features: [
        "Lobby cleaning",
        "Hallway maintenance",
        "Stairwell cleaning",
        "Laundry room upkeep",
        "Mailbox area cleaning",
        "Trash area management"
      ],
      popular: false
    },
    {
      title: "Small Offices",
      subtitle: "< 2,000 sq ft",
      basePrice: { weekly: "$100-$150", biweekly: "$110-$165", monthly: "$120-$180" },
      period: "per visit",
      description: "Reliable office cleaning for small commercial spaces",
      features: [
        "Desk and surface cleaning",
        "Restroom cleaning & stocking",
        "Floor care",
        "Trash removal",
        "Kitchen/break room cleaning",
        "Reception area maintenance"
      ],
      popular: false
    }
  ];

  const addOns = [
    { name: "Interior Windows", price: "Starting at $25" },
    { name: "Carpet Shampoo", price: "Starting at $75" },
    { name: "Appliance Deep-Clean", price: "Starting at $50" },
    { name: "Green Package", price: "No additional cost" }
  ];

  const frequencyDiscounts = {
    weekly: { label: "Weekly", discount: "Best Value", color: "bg-accent" },
    biweekly: { label: "Biweekly", discount: "5% Savings", color: "bg-primary" },
    monthly: { label: "Monthly", discount: "Flexible", color: "bg-secondary" }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Transparent, Fair Pricing
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Clear ranges with no hidden fees. Final quotes confirmed after site details.
            </p>
            <div className="inline-flex items-center bg-white/10 backdrop-blur rounded-lg p-1">
              <Info className="h-4 w-4 text-white/80 mr-2" />
              <span className="text-white/90 text-sm">Bundle & annual discounts available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Frequency Toggle */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <div className="flex items-center justify-center space-x-4 bg-card rounded-lg p-4 shadow-medium">
              <Label className="text-sm font-medium">Frequency:</Label>
              <div className="flex space-x-1">
                {(Object.keys(frequencyDiscounts) as Array<keyof typeof frequencyDiscounts>).map((freq) => (
                  <button
                    key={freq}
                    onClick={() => setFrequency(freq)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                      frequency === freq
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted"
                    }`}
                  >
                    {frequencyDiscounts[freq].label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Pricing Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Service Pricing</h2>
            <p className="text-xl text-muted-foreground">Professional property care at competitive rates</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`shadow-large hover:shadow-xl transition-all duration-300 ${tier.popular ? 'ring-2 ring-primary' : ''}`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">{tier.title}</CardTitle>
                      <CardDescription className="text-sm text-muted-foreground">{tier.subtitle}</CardDescription>
                    </div>
                    {tier.popular && (
                      <Badge variant="default" className="bg-accent">Most Popular</Badge>
                    )}
                  </div>
                  <div className="mt-4">
                    <div className="flex items-baseline space-x-1">
                      <span className="text-3xl font-bold text-primary">{tier.basePrice[frequency]}</span>
                      <span className="text-muted-foreground">{tier.period}</span>
                    </div>
                    <div className="flex items-center mt-2">
                      <Badge 
                        variant="secondary" 
                        className={`${frequencyDiscounts[frequency].color} text-white`}
                      >
                        {frequencyDiscounts[frequency].discount}
                      </Badge>
                    </div>
                  </div>
                  <CardDescription className="mt-4">{tier.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button onClick={scrollToInterestForm} className="w-full" variant="default">
                    Get Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons Pricing */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Add-On Services</h2>
            <p className="text-xl text-muted-foreground">Enhance your service with these popular add-ons</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {addOns.map((addOn, index) => (
              <Card key={index} className="text-center shadow-medium hover:shadow-large transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{addOn.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xl font-bold text-primary mb-4">{addOn.price}</div>
                  <Button onClick={scrollToInterestForm} variant="outline" size="sm" className="w-full">
                    Add to Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Notes */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-large">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Pricing Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-lg mb-3">What's Included:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-accent mr-2" />All supplies and equipment</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-accent mr-2" />Licensed and insured teams</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-accent mr-2" />Quality guarantee</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-accent mr-2" />Flexible scheduling</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-accent mr-2" />Service verification</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Pricing Factors:</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Property size and layout</li>
                      <li>• Frequency of service</li>
                      <li>• Condition and age of property</li>
                      <li>• Special requirements or add-ons</li>
                      <li>• Number of units in portfolio</li>
                    </ul>
                  </div>
                </div>
                
                <div className="border-t pt-6">
                  <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                    <Info className="h-4 w-4" />
                    <span className="text-sm">Final quotes confirmed after site details and requirements assessment</span>
                  </div>
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
            Ready for a personalized quote?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get accurate pricing based on your specific property needs and requirements.
          </p>
          <Button 
            onClick={scrollToInterestForm}
            variant="secondary" 
            size="xl"
            className="bg-white text-primary hover:bg-white/90"
          >
            Get Your Custom Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Pricing;