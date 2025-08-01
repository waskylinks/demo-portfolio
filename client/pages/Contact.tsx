import { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import emailjs from "emailjs-com";

// Type for form fields
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Type for form errors
interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  // State for form data
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // State to track validation errors for each field
  const [errors, setErrors] = useState<FormErrors>({});

  // Submission states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Validate all fields and set error messages for empty or invalid inputs
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name must not be empty
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    // Email must not be empty and must match a basic email regex pattern
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    // Subject must not be empty
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    // Message must not be empty and must be at least 10 characters
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    // Update errors state to show messages inline
    setErrors(newErrors);

    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission event
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent submission if validation fails
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Include current date/time in the email data
    const fullFormData = {
      ...formData,
      time: new Date().toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
      }),
    };

    try {
      // Send email to site owner using emailjs
      await emailjs.send(
        "Wasky_Links", // service ID (unchanged)
        "Wasky_Links_Contact", // template ID (unchanged)
        fullFormData,
        "kmmyxPwNaFJ8_EO5a" // user/public key (unchanged)
      );

      // Optional: send auto-reply email to user
      await emailjs.send(
        "Wasky_Links",
        "Wasky_Links_Reply",
        fullFormData,
        "kmmyxPwNaFJ8_EO5a"
      );

      // Reset form on success and show success message
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Email send failed:", error);
      alert("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle input changes and clear errors for the specific field as user types
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error message dynamically when user corrects input
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Static contact information for display
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "likitajoel@gmail.com",
      href: "mailto:likitajoel@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+2349061614369",
      href: "tel:+2349061614369",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Gombe, Nigeria",
      href: "https://www.google.com/maps/place/Gombe,+Nigeria",
    },
  ];

  // Show success message screen after submission
  if (isSubmitted) {
    return (
      <div className="py-16 min-h-[60vh] flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Message Sent Successfully!
            </h2>
            <p className="text-muted-foreground mb-6">
              Thank you for reaching out. I'll get back to you within 24 hours.
            </p>
            <Button onClick={() => setIsSubmitted(false)}>
              Send Another Message
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Main form render
  return (
    <div className="py-16">
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Get In Touch
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Ready to start your project? Let's discuss how I can help bring
              your ideas to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Send Me a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Name Field */}
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? "border-destructive" : ""}
                    placeholder="Your full name"
                    required
                  />
                  {/* Show error below input if present */}
                  {errors.name && (
                    <p className="text-sm text-destructive mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field - disabled if Name is empty */}
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? "border-destructive" : ""}
                    placeholder="your.email@example.com"
                    required
                    disabled={!formData.name.trim()} // Disabled if name empty
                  />
                  {/* Show error below input if present */}
                  {errors.email && (
                    <p className="text-sm text-destructive mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Subject Field - disabled if Name is empty */}
                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    className={errors.subject ? "border-destructive" : ""}
                    placeholder="Project inquiry"
                    required
                    disabled={!formData.name.trim()} // Disabled if name empty
                  />
                  {/* Show error below input if present */}
                  {errors.subject && (
                    <p className="text-sm text-destructive mt-1">
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message Field - disabled if Name is empty */}
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? "border-destructive" : ""}
                    placeholder="Tell me about your project..."
                    rows={6}
                    required
                    disabled={!formData.name.trim()} // Disabled if name empty
                  />
                  {/* Show error below input if present */}
                  {errors.message && (
                    <p className="text-sm text-destructive mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    <>
                      <Clock className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {item.label}
                      </h3>
                      {item.href === "#" ? (
                        <p className="text-muted-foreground">{item.value}</p>
                      ) : (
                        <a
                          href={item.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-muted/30 rounded-lg">
                <h3 className="font-semibold text-foreground mb-3">
                  Response Time
                </h3>
                <p className="text-muted-foreground">
                  I typically respond to all inquiries within 24 hours. For
                  urgent matters, please call or send a message via LinkedIn.
                </p>
              </div>

              <div className="mt-6 p-6 bg-muted/30 rounded-lg">
                <h3 className="font-semibold text-foreground mb-3">
                  What to Include
                </h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Project timeline and budget</li>
                  <li>• Detailed project requirements</li>
                  <li>• Preferred communication method</li>
                  <li>• Any relevant files or references</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
