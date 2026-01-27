import ServiceCard from "@/components/ServiceCard";
import { services } from "@/utils/services";
import Link from "next/link";

export const metadata = {
  title: "Care.xyz | Trusted Care Services",
  description: "Book baby care & elderly care services easily",
};

export default function HomePage() {
  return (
    <div>
      <section className="bg-base-200 text-center py-10">
        <h1 className="text-4xl font-bold">
          Trusted Care for Your Loved Ones
        </h1>
        <p className="mt-4 text-gray-600">
          Baby care, elderly care & special care services
        </p>
      </section>

      {/* About */}
      <section className="bg-base-200">
        <div className="container mx-auto px-6">
          <div className="rounded-2xl bg-primary text-primary-content p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Upgrade Your Style?
              </h2>
              <p className="mt-4 max-w-xl text-primary-content/90">
                Discover the latest fashion trends, exclusive collections, and
                special offers tailored just for you. Start shopping today and
                experience premium quality like never before.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#"
                className="btn btn-secondary btn-lg text-secondary-content"
              >
                Explore Products
              </Link>

              <Link
                href="#"
                className="btn btn-outline btn-lg border-primary-content text-primary-content hover:bg-primary-content hover:text-primary"
              >
                Create Free Account
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-base-200 py-12 px-10">
        <h2 className="text-2xl font-bold mb-6">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-base-200 py-12 text-center">
        <h2 className="text-2xl font-bold">Why Choose Us?</h2>
        <p className="mt-3 text-gray-600">
          1000+ Happy Families | Trusted Caretakers | Secure Booking
        </p>
      </section>
    </div>
  );
}
