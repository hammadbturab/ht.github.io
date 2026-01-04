import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { z } from "zod";
const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(1, "Phone number is required").max(20, "Phone number must be less than 20 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters")
});
const ContactSection = () => {
  const {
    toast
  } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }
    setIsSubmitting(true);

    // For now, show success message - backend integration needed for actual email sending
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours."
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };
  return <section id="contact" className="py-24 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
                Get In Touch
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Go <span className="text-gradient-solar">Solar?</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Get a free, no-obligation quote for your solar installation. 
                Our experts will design a custom system for your home.
              </p>
            </div>

            <div className="space-y-6">
              <a href="tel:1300415457" className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Call Us</div>
                  <div className="text-muted-foreground">1300 415 457</div>
                </div>
              </a>

              <a href="mailto:support@htevolution.com" className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Email Us</div>
                  <div className="text-muted-foreground">support@htevolution.com</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Location</div>
                  <div className="text-muted-foreground">Midland, WA 6056, Australia (Perth)</div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-card border border-border shadow-elevated">
            <h3 className="text-xl font-semibold text-foreground mb-6">Request a Free Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Input placeholder="Your Name *" value={formData.name} onChange={e => setFormData({
                ...formData,
                name: e.target.value
              })} className="h-12" />
                {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <Input type="email" placeholder="Email Address *" value={formData.email} onChange={e => setFormData({
                ...formData,
                email: e.target.value
              })} className="h-12" />
                {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <Input type="tel" placeholder="Phone Number *" value={formData.phone} onChange={e => setFormData({
                ...formData,
                phone: e.target.value
              })} className="h-12" />
                {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
              </div>
              <div>
                <Textarea placeholder="Tell us about your solar needs..." value={formData.message} onChange={e => setFormData({
                ...formData,
                message: e.target.value
              })} className="min-h-[120px] resize-none" />
                {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
              </div>
              <Button type="submit" size="lg" variant="hero" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="w-4 h-4" />
              </Button>
              <p className="text-sm text-muted-foreground text-center">
                We'll respond within 24 hours. No spam, ever.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;