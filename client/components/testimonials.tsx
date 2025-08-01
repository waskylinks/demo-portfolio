import { useState, useEffect } from "react";                 // React hooks for state and effects
import { Quote, Star } from "lucide-react";                  // Icons for quote and star
import { cn } from "@/lib/utils";                            // (Optional) utility for classNames (if used elsewhere)

// Testimonials data array
const testimonials = [
  {
    content:
      "Working with Wasky_Links was an absolute pleasure. He delivered a beautiful, functional website that exceeded our expectations. The attention to detail and communication throughout the project was outstanding.",
    author: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    rating: 5,
    avatar: "/channel-6.jpeg",
  },
  {
    content:
      "The mobile app he developed for us has significantly improved our customer engagement. Professional, timely, and exactly what we needed. Highly recommend his services!",
    author: "Michael Chen",
    role: "Founder, FitLife",
    rating: 5,
    avatar: "/channel-1.jpeg",
  },
  {
    content:
      "Exceptional work on our e-commerce platform. The user experience is fantastic and our sales have increased by 40% since launch. Worth every penny!",
    author: "Emily Davis",
    role: "Marketing Director, StyleCo",
    rating: 5,
    avatar: "/channel-3.jpeg",
  },
  {
    content:
      "From concept to completion, the process was smooth and professional. He understood our vision and brought it to life beautifully. Amazing developer!",
    author: "David Wilson",
    role: "Product Manager, InnovateTech",
    rating: 5,
    avatar: "/channel-2.jpeg",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0); // Current testimonial index

  // Automatically change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5 seconds per slide

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What Clients Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Don't just take my word for it - hear from satisfied clients
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl bg-background shadow-lg">
            <div className="relative">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  // Smooth fade and slide transition for active testimonial
                  className={`transition-all duration-700 ease-in-out ${
                    index === currentIndex
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 absolute inset-0 translate-x-full"
                  }`}
                >
                  <div className="p-8 md:p-12">
                    {/* Quote icon */}
                    <Quote className="h-8 w-8 text-primary mb-6" />

                    {/* Testimonial text */}
                    <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                      "{testimonial.content}"
                    </blockquote>

                    {/* Author info and rating */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          className="h-12 w-12 rounded-full object-cover"
                        />
                        <div>
                          <div className="font-semibold text-foreground">
                            {testimonial.author}
                          </div>
                          <div className="text-muted-foreground">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>

                      {/* Star rating */}
                      <div className="flex space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 fill-primary text-primary"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot indicators for manual navigation (optional) */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)} // Allow manual click to jump
                className={`h-3 w-3 rounded-full transition-colors ${
                  index === currentIndex
                    ? "bg-primary"
                    : "bg-muted-foreground/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
