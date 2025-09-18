const TermsOfService = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <div className="text-muted-foreground mb-8">Last updated: September 18, 2024</div>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Service Agreement</h2>
              <p className="text-muted-foreground">
                By engaging PrismPoint for cleaning services, you agree to these terms and conditions. 
                Our services include regular property care, turnover cleaning, and related maintenance 
                services as outlined in your service agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Scheduling and Access</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Service appointments must be scheduled in advance</li>
                <li>Property access must be provided as agreed</li>
                <li>24-hour notice required for cancellations</li>
                <li>Same-day cancellations may incur fees</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Payment Terms</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Payment due upon completion of services</li>
                <li>Late payment fees may apply after 30 days</li>
                <li>Recurring services billed monthly</li>
                <li>Price changes require 30-day notice</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Service Guarantee</h2>
              <p className="text-muted-foreground mb-4">
                We guarantee our work and will return to address any issues within 24 hours of notification. 
                Our liability is limited to re-cleaning the affected areas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground">
                Our liability is limited to the cost of the cleaning service. We carry comprehensive 
                insurance but are not liable for pre-existing damage or items not disclosed prior to service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Property Condition</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Properties must be in reasonable condition for cleaning</li>
                <li>Hazardous conditions must be disclosed</li>
                <li>We reserve the right to refuse service in unsafe conditions</li>
                <li>Additional fees may apply for excessive cleaning requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Termination</h2>
              <p className="text-muted-foreground">
                Either party may terminate service with 30-day written notice. Immediate termination 
                may occur for non-payment, unsafe conditions, or violation of these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <p className="text-muted-foreground">
                Questions about these terms should be directed to:
              </p>
              <div className="bg-secondary/30 rounded-lg p-6 mt-4">
                <div>Email: hello@prismpoint.co</div>
                <div>Phone: (555) 555-5555</div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;