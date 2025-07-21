import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Portfolio } from "@/components/portfolio";
import { Testimonials } from "@/components/testimonials";

export default function Index() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
    </>
  );
}
