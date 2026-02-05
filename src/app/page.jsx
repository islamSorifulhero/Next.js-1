import About from "@/components/About";
import Hero from "@/components/Hero";
import HowToWork from "@/components/HowToWork";
import Service from "@/components/Service";

export default function HomePage() {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Service></Service>
      <HowToWork></HowToWork>
    </div>
  );
}
