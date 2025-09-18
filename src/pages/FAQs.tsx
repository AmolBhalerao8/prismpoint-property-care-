import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";

const FAQs = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const scrollToInterestForm = () => {
    const interestForm = document.getElementById("interest-form");
    if (interestForm) {
      interestForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  const faqs = [
    {
      question: "How do I schedule regular cleaning services?",
      answer: "Simply submit our interest form below with your property details and preferred frequency. We'll contact you within one business day to set up your recurring schedule and assign your dedicated team."
    },
    {
      question: "What areas do you currently serve?",
      answer: "We serve Chico, CA and nearby communities including Paradise, Oroville, and surrounding areas. If you're unsure whether we serve your location, just ask when you submit your quote request."
    },
    {
      question: "Do you provide your own supplies and equipment?",
      answer: "Yes, we bring all necessary cleaning supplies, equipment, and tools for every service. This includes eco-friendly products, vacuum cleaners, mops, and specialized cleaning solutions. You don't need to provide anything."
    },
    {
      question: "What if I'm not satisfied with the cleaning service?",
      answer: "We guarantee our work. If something's not right, we'll make it right within 24 hours at no additional cost. Your satisfaction is our priority, and we stand behind every service we provide."
    },
    {
      question: "How do you handle keys and property access?",
      answer: "We work with property managers to establish secure key management protocols. Options include lockboxes, property management office pickup, or coordinated access. All team members are bonded and background-checked."
    },
    {
      question: "Are your teams insured and bonded?",
      answer: "Yes, we carry comprehensive general liability insurance and our cleaning teams are bonded. We provide certificates of insurance to property managers and can add your company as an additional insured if required."
    },
    {
      question: "Can I cancel or reschedule a cleaning appointment?",
      answer: "We understand schedules change. You can cancel or reschedule appointments with at least 24 hours notice without penalty. Same-day cancellations may incur a fee, but we try to be flexible with emergency situations."
    },
    {
      question: "Do you offer eco-friendly or green cleaning options?",
      answer: "Absolutely! Our green package uses low-odor, environmentally friendly products at no additional cost. This is especially popular for properties with residents who have sensitivities or environmental concerns."
    },
    {
      question: "How quickly can you complete a turnover cleaning?",
      answer: "Most turnover cleanings are completed within 24-48 hours of request, depending on the size and condition of the unit. For urgent turnarounds, we offer same-day service when possible to help minimize vacancy days."
    },
    {
      question: "What's included in your satisfaction guarantee?",
      answer: "If any aspect of our cleaning doesn't meet your standards, we'll return within 24 hours to address the issue at no charge. This includes re-cleaning specific areas or completing any missed tasks."
    },
    {
      question: "Do you clean both residential and commercial properties?",
      answer: "Yes, we specialize in residential units (apartments, condos, single-family homes) and small commercial spaces under 2,000 square feet, including small offices, retail spaces, and common areas in residential buildings."
    },
    {
      question: "How do you ensure consistent quality across different cleaning teams?",
      answer: "All team members go through our comprehensive training program and follow standardized checklists for each property type. We conduct regular quality checks and maintain detailed service records to ensure consistency."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Everything you need to know about PrismPoint's property care services
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="shadow-medium hover:shadow-large transition-all duration-300">
                  <CardHeader
                    className="cursor-pointer"
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  >
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-left text-lg font-semibold">
                        {faq.question}
                      </CardTitle>
                      {openFAQ === index ? (
                        <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      )}
                    </div>
                  </CardHeader>
                  {openFAQ === index && (
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Still have questions?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We're here to help! Reach out through our contact form or give us a call. 
              Our team is happy to answer any specific questions about your property care needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle>Email Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Send us your questions and we'll get back to you within one business day.
                  </p>
                  <a 
                    href="mailto:hello@prismpoint.co"
                    className="text-primary hover:underline font-medium"
                  >
                    hello@prismpoint.co
                  </a>
                </CardContent>
              </Card>
              
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle>Call Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Speak directly with our team about your property care needs.
                  </p>
                  <div className="text-primary font-medium">
                    (555) 555-5555
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Button onClick={scrollToInterestForm} variant="hero" size="xl">
              Get Your Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Quick Facts</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24-48hrs</div>
              <div className="text-muted-foreground">Turnover cleaning</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24hrs</div>
              <div className="text-muted-foreground">Satisfaction guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">Licensed</div>
              <div className="text-muted-foreground">& insured teams</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">Chico, CA</div>
              <div className="text-muted-foreground">& nearby areas</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;