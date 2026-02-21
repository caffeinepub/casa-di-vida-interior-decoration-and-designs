import ContactForm from './ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Let's Create Together
            </h2>
            <p className="text-lg text-muted-foreground">
              Ready to transform your space? Get in touch with us today to discuss your interior design project. We'd love to hear about your vision and help bring it to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-serif font-semibold mb-6">Get In Touch</h3>
                <p className="text-muted-foreground mb-8">
                  Whether you're looking for a complete home transformation or need guidance on a single room, we're here to help. Reach out to schedule a consultation.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gold/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">info@casadivida.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gold/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gold/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-muted-foreground">
                      Serving clients nationwide with personalized interior design services
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/50 rounded-lg p-6 mt-8">
                <h4 className="font-serif font-semibold text-lg mb-3">Office Hours</h4>
                <div className="space-y-2 text-muted-foreground">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: By Appointment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
