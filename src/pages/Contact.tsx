import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";

const Contact = () => {
  const scrollToInterestForm = () => {
    const interestForm = document.getElementById("interest-form");
    if (interestForm) {
      interestForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Ready to streamline your property care? We're here to help with any questions 
              about our services or to provide a personalized quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Cards */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Choose the best way to reach us. We typically respond to all inquiries 
                  within one business day.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <Card className="shadow-medium hover:shadow-large transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle>Email</CardTitle>
                        <CardDescription>Best for detailed questions</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <a 
                      href="mailto:hello@prismpoint.co"
                      className="text-primary hover:underline text-lg font-medium"
                    >
                      hello@prismpoint.co
                    </a>
                    <p className="text-muted-foreground mt-2 text-sm">
                      We'll get back to you within one business day
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-medium hover:shadow-large transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                        <Phone className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <CardTitle>Phone</CardTitle>
                        <CardDescription>For urgent requests</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-primary text-lg font-medium">
                      (555) 555-5555
                    </div>
                    <p className="text-muted-foreground mt-2 text-sm">
                      Business hours: Mon-Fri 8AM-6PM, Sat 9AM-3PM
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-medium hover:shadow-large transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-secondary/50 rounded-lg flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-foreground" />
                      </div>
                      <div>
                        <CardTitle>Service Area</CardTitle>
                        <CardDescription>Local to Chico, CA</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="font-medium">Chico, CA and nearby communities</div>
                    <p className="text-muted-foreground mt-2 text-sm">
                      Including Paradise, Oroville, and surrounding areas
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-secondary/30 border-dashed">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-6 w-6 text-primary" />
                    <CardTitle>Business Hours</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 3:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                  <div className="pt-2 text-sm text-muted-foreground">
                    Emergency services available 24/7
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map Placeholder */}
            <div>
              <Card className="h-full shadow-large">
                <CardHeader>
                  <CardTitle>Our Service Area</CardTitle>
                  <CardDescription>Chico, CA and surrounding communities</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex items-center justify-center min-h-[400px] bg-secondary/20 rounded-lg">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Chico, CA</h3>
                    <p className="text-muted-foreground">
                      Embedded map showing Chico, CA and service coverage area would appear here
                    </p>
                    <div className="mt-6 text-sm text-muted-foreground space-y-1">
                      <div>• Chico city limits</div>
                      <div>• Paradise</div>
                      <div>• Oroville</div>
                      <div>• Surrounding communities</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Common Questions */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Before You Call</h2>
              <p className="text-xl text-muted-foreground">
                Help us serve you better by having this information ready
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle>For New Service Quotes</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Property address and type</li>
                    <li>• Number of units (if applicable)</li>
                    <li>• Preferred service frequency</li>
                    <li>• Special requirements or concerns</li>
                    <li>• Preferred start date</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle>For Existing Customers</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Property address</li>
                    <li>• Service date in question</li>
                    <li>• Specific issue or request</li>
                    <li>• Best time to reach you</li>
                    <li>• Urgency level</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to get started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              The fastest way to get a quote is through our online form. 
              We'll review your needs and get back to you with personalized pricing.
            </p>
            <Button onClick={scrollToInterestForm} variant="hero" size="xl">
              Request Your Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;