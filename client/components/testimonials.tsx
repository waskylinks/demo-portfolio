import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    content: "Working with FreelanceStudio was an absolute pleasure. They delivered a beautiful, functional website that exceeded our expectations. The attention to detail and communication throughout the project was outstanding.",
    author: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    rating: 5,
    avatar: "/placeholder.svg",
  },
  {
    content: "The mobile app they developed for us has significantly improved our customer engagement. Professional, timely, and exactly what we needed. Highly recommend their services!",
    author: "Michael Chen",
    role: "Founder, FitLife",
    rating: 5,
    avatar: "/placeholder.svg",
  },
  {
    content: "Exceptional work on our e-commerce platform. The user experience is fantastic and our sales have increased by 40% since launch. Worth every penny!",
    author: "Emily Davis",
    role: "Marketing Director, StyleCo",
    rating: 5,
    avatar: "/placeholder.svg",
  },
  {
    content: "From concept to completion, the process was smooth and professional. They understood our vision and brought it to life beautifully. Amazing developer!",
    author: "David Wilson",
    role: "Product Manager, InnovateTech",
    rating: 5,
    avatar: "/placeholder.svg",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What Clients Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Don't just take my word for it - hear from satisfied clients
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl bg-background shadow-lg">
              <div className="relative">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-500 ease-in-out ${
                      index === currentIndex 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 absolute inset-0 translate-x-full'
                    }`}
                  >
                    <div className="p-8 md:p-12">
                      <Quote className="h-8 w-8 text-primary mb-6" />
                      
                      <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                        "{testimonial.content}"
                      </blockquote>
                      
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

            {/* Navigation buttons */}
            <Button
              variant="outline"
              size="sm"
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 p-0"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 p-0"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 w-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
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
