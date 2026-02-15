import About from "@/components/About";
import { services } from "@/components/data/services";
import Hero from "@/components/Hero";
import HowToWork from "@/components/HowToWork";
import Service from "@/components/Service";
import Working from "@/components/Working";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <div style={{ padding: 20 }}>
        <h1>Welcome to Care.xyz</h1>
        <h2>Our Services</h2>
        {services.map(service => (
          <div key={service.id} style={{ margin: 10 }}>
            <h3>{service.name}</h3>
            <p>Price: {service.price} BDT per hour</p>
            <Link href={`/service/${service.id}`}>
              View Details
            </Link>
          </div>
        ))}
      </div>
      <Hero></Hero>
      <Service></Service>
      <About></About>
      <HowToWork></HowToWork>
      <Working></Working>
    </div>
  );
}
