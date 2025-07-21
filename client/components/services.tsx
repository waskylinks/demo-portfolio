import { Code2, Palette, Smartphone, Zap } from "lucide-react";

const services = [
  {
    name: "Web Development",
    description:
      "Modern, responsive websites built with the latest technologies. From simple landing pages to complex web applications.",
    icon: Code2,
  },
  {
    name: "UI/UX Design",
    description:
      "Beautiful, user-centered designs that enhance user experience and drive conversions for your business.",
    icon: Palette,
  },
  {
    name: "Mobile Apps",
    description:
      "Native and cross-platform mobile applications that engage users and expand your reach across devices.",
    icon: Smartphone,
  },
  {
    name: "Performance Optimization",
    description:
      "Speed up your website and improve user experience with advanced optimization techniques and best practices.",
    icon: Zap,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Services I Offer
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Comprehensive digital solutions to help your business thrive in the
            modern world
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={service.name}
                className="group relative overflow-hidden rounded-2xl bg-background p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">
                  {service.name}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {service.description}
                </p>

                {/* Hover effect */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
