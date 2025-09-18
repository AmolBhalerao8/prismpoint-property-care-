import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

interface FormData {
  fullName: string;
  company: string;
  role: string;
  email: string;
  phone: string;
  serviceAddress: string;
  numberOfUnits: string;
  serviceTypes: string[];
  frequency: string;
  preferredStartDate: string;
  notes: string;
  consent: boolean;
}

const InterestForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    company: "",
    role: "",
    email: "",
    phone: "",
    serviceAddress: "",
    numberOfUnits: "",
    serviceTypes: [],
    frequency: "",
    preferredStartDate: "",
    notes: "",
    consent: false,
  });

  const serviceTypeOptions = [
    "Weekly Property Care",
    "Turnover / Move-In",
    "Common Areas",
    "Small Office",
    "Add-Ons",
  ];

  const handleServiceTypeChange = (serviceType: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      serviceTypes: checked
        ? [...prev.serviceTypes, serviceType]
        : prev.serviceTypes.filter((type) => type !== serviceType),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.phone || !formData.serviceAddress || !formData.consent) {
      toast({
        title: "Required Fields Missing",
        description: "Please fill in all required fields and accept the terms.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Simulate form submission - in a real app, you'd send this to your backend
      // For now, we'll just show a success message
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Here you would typically send the email to bhaleraoamol04@gmail.com
      console.log("Form submission:", {
        ...formData,
        timestamp: new Date().toISOString(),
      });

      toast({
        title: "Quote Request Submitted!",
        description: "Thanks! We'll get back to you within one business day.",
      });

      // Reset form
      setFormData({
        fullName: "",
        company: "",
        role: "",
        email: "",
        phone: "",
        serviceAddress: "",
        numberOfUnits: "",
        serviceTypes: [],
        frequency: "",
        preferredStartDate: "",
        notes: "",
        consent: false,
      });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="interest-form" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-large">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold">Tell us what you need</CardTitle>
              <CardDescription className="text-lg">
                Get a personalized quote for your property care needs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="required">
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                      required
                    />
                  </div>

                  {/* Company */}
                  <div className="space-y-2">
                    <Label htmlFor="company">Company / Property</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                    />
                  </div>

                  {/* Role */}
                  <div className="space-y-2">
                    <Label htmlFor="role">Role</Label>
                    <Select value={formData.role} onValueChange={(value) => setFormData(prev => ({ ...prev, role: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="property-manager">Property Manager</SelectItem>
                        <SelectItem value="landlord">Landlord</SelectItem>
                        <SelectItem value="tenant">Tenant</SelectItem>
                        <SelectItem value="business-owner">Business Owner</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="required">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="required">
                      Phone *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      required
                    />
                  </div>

                  {/* Number of Units */}
                  <div className="space-y-2">
                    <Label htmlFor="numberOfUnits">Number of Units</Label>
                    <Input
                      id="numberOfUnits"
                      type="number"
                      min="1"
                      value={formData.numberOfUnits}
                      onChange={(e) => setFormData(prev => ({ ...prev, numberOfUnits: e.target.value }))}
                    />
                  </div>
                </div>

                {/* Service Address */}
                <div className="space-y-2">
                  <Label htmlFor="serviceAddress" className="required">
                    Service Address *
                  </Label>
                  <Input
                    id="serviceAddress"
                    value={formData.serviceAddress}
                    onChange={(e) => setFormData(prev => ({ ...prev, serviceAddress: e.target.value }))}
                    required
                  />
                </div>

                {/* Service Types */}
                <div className="space-y-3">
                  <Label>Service Type</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {serviceTypeOptions.map((serviceType) => (
                      <div key={serviceType} className="flex items-center space-x-2">
                        <Checkbox
                          id={serviceType}
                          checked={formData.serviceTypes.includes(serviceType)}
                          onCheckedChange={(checked) => 
                            handleServiceTypeChange(serviceType, checked as boolean)
                          }
                        />
                        <Label htmlFor={serviceType} className="text-sm font-normal">
                          {serviceType}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Frequency */}
                  <div className="space-y-2">
                    <Label htmlFor="frequency">Frequency</Label>
                    <Select value={formData.frequency} onValueChange={(value) => setFormData(prev => ({ ...prev, frequency: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="biweekly">Biweekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="one-time">One-time</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Preferred Start Date */}
                  <div className="space-y-2">
                    <Label htmlFor="preferredStartDate">Preferred Start Date</Label>
                    <Input
                      id="preferredStartDate"
                      type="date"
                      value={formData.preferredStartDate}
                      onChange={(e) => setFormData(prev => ({ ...prev, preferredStartDate: e.target.value }))}
                    />
                  </div>
                </div>

                {/* Notes */}
                <div className="space-y-2">
                  <Label htmlFor="notes">Notes</Label>
                  <Textarea
                    id="notes"
                    rows={4}
                    value={formData.notes}
                    onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                    placeholder="Tell us more about your specific needs..."
                  />
                </div>

                {/* Consent */}
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, consent: checked as boolean }))}
                    required
                  />
                  <Label htmlFor="consent" className="text-sm leading-relaxed">
                    I agree to receive communications from PrismPoint and to the Privacy Policy. *
                  </Label>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="xl" 
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Request a Quote"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InterestForm;