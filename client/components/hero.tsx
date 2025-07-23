import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center rounded-full border px-3 py-1 text-sm">
            <Star className="mr-2 h-4 w-4 fill-primary text-primary" />
            <span className="text-muted-foreground">
              Rated 5/5 by 100+ clients
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Professional
            <span className="text-primary"> Freelance </span>
            Services.
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            Transform your ideas into stunning digital experiences. I specialize
            in web development, UI/UX design, and digital solutions that help
            businesses grow and succeed online. This is a demo portfolio.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="w-full sm:w-auto">
              <Link to="/contact" className="flex items-center">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="w-full sm:w-auto"
            >
              <Link to="/#portfolio">View My Work</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div>
              <dt className="text-sm font-medium text-muted-foreground">
                Projects Completed
              </dt>
              <dd className="text-3xl font-bold text-primary">150+</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-muted-foreground">
                Happy Clients
              </dt>
              <dd className="text-3xl font-bold text-primary">100+</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-muted-foreground">
                Years Experience
              </dt>
              <dd className="text-3xl font-bold text-primary">5+</dd>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-purple-400 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>
    </section>
  );
}
