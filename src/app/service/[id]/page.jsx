import { services } from "@/components/data/services";
import Link from "next/link";

export default async function ServiceDetails({ params }) {
  const { id } = await params;

  const service = services.find(s => s.id === id);

  if (!service) return <h1 style={{ padding: 20 }}>Service Not Found (ID: {id})</h1>;

  return (
    <div style={{ padding: 20 }}>
      <h1>{service.name}</h1>
      <p>{service.description}</p>
      <p>Price: {service.price} BDT/hour</p>

      <Link href={`/booking/${service.id}`}>
        <button style={{ marginTop: 10, padding: "5px 15px", cursor: "pointer" }}>
          Book Service
        </button>
      </Link>
    </div>
  );
}