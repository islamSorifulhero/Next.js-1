import ServiceCard from "@/components/ServiceCard";
import { services } from "@/utils/services";

export const metadata = {
  title: "Care.xyz | Trusted Care Services",
  description: "Book baby care & elderly care services easily",
};

export default function HomePage() {
  return (
    <div>
      {/* Banner */}
      <section className="bg-gray-100 text-center py-20">
        <h1 className="text-4xl font-bold">
          Trusted Care for Your Loved Ones
        </h1>
        <p className="mt-4 text-gray-600">
          Baby care, elderly care & special care services
        </p>
      </section>

      {/* About */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-3">About Care.xyz</h2>
        <p className="text-gray-600">
          Care.xyz helps families find trusted and verified caretakers
          for babies, elderly and sick people easily and securely.
        </p>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-6">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-12 text-center">
        <h2 className="text-2xl font-bold">Why Choose Us?</h2>
        <p className="mt-3 text-gray-600">
          1000+ Happy Families | Trusted Caretakers | Secure Booking
        </p>
      </section>
    </div>
  );
}
