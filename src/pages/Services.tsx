import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight } from "lucide-react";
import cleanLivingRoom from "@/assets/clean-living-room.jpg";
import cleanKitchen from "@/assets/clean-kitchen.jpg";
import cleanCommonArea from "@/assets/clean-common-area.jpg";
import cleanOffice from "@/assets/clean-office.jpg";

const Services = () => {
  const scrollToInterestForm = () => {
    const interestForm = document.getElementById("interest-form");
    if (interestForm) {
      interestForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    {
      title: "Weekly Property Care",
      description: "Consistent maintenance for occupied units to keep your properties in top condition.",
      price: "$60-$90 per visit",
      features: [
        "Dusting all surfaces",
        "Vacuum and mop floors",
        "Kitchen cleaning (counters, sink, appliances)",
        "Bathroom cleaning (toilet, sink, tub/shower)",
        "Touch-point sanitization",
        "Common area maintenance"
      ],
      popular: false
    },
    {
      title: "Turnover / Move-In Ready",
      description: "Deep cleaning to get vacant units ready for new tenants quickly.",
      price: "$150-$250 per unit",
      features: [
        "Complete appliance cleaning (inside & out)",
        "Cabinet cleaning (interior & exterior)",
        "Light fixture cleaning",
        "Detailed bathroom cleaning",
        "Floor deep cleaning",
        "Move-in ready inspection"
      ],
      popular: true
    },
    {
      title: "Common Areas & Buildings",
      description: "Professional cleaning for shared spaces that make great first impressions.",
      price: "$200-$500 per month",
      features: [
        "Lobby cleaning and maintenance",
        "Hallway vacuuming and mopping",
        "Stairwell cleaning",
        "Laundry room maintenance",
        "Mailbox area cleaning",
        "Trash area management"
      ],
      popular: false
    },
    {
      title: "Small Offices (<2,000 sq ft)",
      description: "Reliable office cleaning to maintain a professional environment.",
      price: "$100-$150 per visit",
      features: [
        "Desk and surface cleaning",
        "Restroom cleaning and stocking",
        "Floor vacuuming and mopping",
        "Trash removal",
        "Kitchen/break room cleaning",
        "Reception area maintenance"
      ],
      popular: false
    }
  ];

  const addOns = [
    {
      title: "Interior Windows",
      description: "Professional window cleaning for crystal-clear views",
      price: "Starting at $25"
    },
    {
      title: "Carpet Shampoo",
      description: "Deep carpet cleaning to remove stains and odors",
      price: "Starting at $75"
    },
    {
      title: "Appliance Deep-Clean",
      description: "Thorough cleaning of all appliances inside and out",
      price: "Starting at $50"
    },
    {
      title: "Green Package",
      description: "Eco-friendly, low-odor products for sensitive environments",
      price: "No additional cost"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Complete Property Care Services
            </h1>
            <p className="text-xl text-white/90 mb-8">
              From weekly maintenance to move-in ready units, we provide comprehensive cleaning services tailored to property managers and landlords.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Core Services</h2>
            <p className="text-xl text-muted-foreground">Professional property care solutions for every need</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const images = [cleanLivingRoom, cleanKitchen, cleanCommonArea, cleanOffice];
              const imageAlts = [
                "Weekly property care: clean living room with organized furniture and spotless surfaces",
                "Turnover cleaning: move-in ready kitchen with pristine appliances and countertops",
                "Common area cleaning: well-maintained lobby with professional appearance",
                "Small office cleaning: organized workspace with clean surfaces and professional environment"
              ];
              return (
                <Card key={index} className={`shadow-large hover:shadow-xl transition-all duration-300 overflow-hidden ${service.popular ? 'ring-2 ring-primary' : ''}`}>
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={images[index]} 
                      alt={imageAlts[index]}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        <div className="text-2xl font-bold text-primary mt-1">{service.price}</div>
                      </div>
                      {service.popular && (
                        <Badge variant="default" className="bg-accent">Most Popular</Badge>
                      )}
                    </div>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button onClick={scrollToInterestForm} className="w-full" variant="default">
                      Request this service
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Add-On Services</h2>
            <p className="text-xl text-muted-foreground">Enhance your service with these popular add-ons</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addOn, index) => (
              <Card key={index} className="text-center shadow-medium hover:shadow-large transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{addOn.title}</CardTitle>
                  <div className="text-lg font-semibold text-primary">{addOn.price}</div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{addOn.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas & Guarantees */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Service Area</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We proudly serve Chico, CA and nearby communities with reliable, professional property care services.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span>Licensed & insured</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span>Vetted and trained teams</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span>Supply and equipment included</span>
                </div>
              </div>
            </div>
            
            <div className="bg-secondary/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Our Guarantee</h3>
              <p className="text-lg text-muted-foreground mb-6">
                "If something's not right, we'll make it right within 24 hours."
              </p>
              <p className="text-muted-foreground">
                We stand behind our work with a satisfaction guarantee. Your property deserves the best care, and we're committed to delivering it every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to upgrade your property care?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get a personalized quote for your properties today.
          </p>
          <Button 
            onClick={scrollToInterestForm}
            variant="secondary" 
            size="xl"
            className="bg-white text-primary hover:bg-white/90"
          >
            Get Your Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;