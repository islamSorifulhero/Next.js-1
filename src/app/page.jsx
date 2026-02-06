import About from "@/components/About";
import Hero from "@/components/Hero";
import HowToWork from "@/components/HowToWork";
import Service from "@/components/Service";

export default function HomePage() {
  return (
    <div>
      <Hero></Hero>
      <Service></Service>
      <About></About>
      <HowToWork></HowToWork>
    </div>
  );
}
