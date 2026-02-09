import About from "@/components/About";
import Hero from "@/components/Hero";
import HowToWork from "@/components/HowToWork";
import Service from "@/components/Service";
import Working from "@/components/Working";

export default function HomePage() {
  return (
    <div>
      <Hero></Hero>
      <Service></Service>
      <About></About>
      <HowToWork></HowToWork>
      <Working></Working>
    </div>
  );
}
