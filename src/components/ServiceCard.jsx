import Link from "next/link";

export default function ServiceCard({ service }) {
  return (
    <div className="border rounded-lg shadow p-4">
      <img
        src={service.image}
        alt={service.title}
        className="h-40 w-full object-cover rounded"
      />
      <h3 className="text-xl font-semibold mt-3">{service.title}</h3>
      <p className="text-gray-600">{service.description}</p>
      <p className="font-bold mt-2">৳ {service.price} / day</p>

      <Link
        href={`/services/${service._id}`}
        className="inline-block mt-3 bg-black text-white px-4 py-2 rounded"
      >
        View Details
      </Link>
    </div>
  );
}
