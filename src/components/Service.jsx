import React from 'react';
import ServiceCard from './ServiceCard';
import { services } from '@/utils/services';

export const metadata = {
    title: "Care.xyz | Trusted Care Services",
    description: "Book baby care & elderly care services easily",
};

const Service = () => {
    return (
        <section className="bg-base-200 py-12 px-10">
            <h2 className="text-2xl font-bold mb-6">Our Services</h2>

            <div className="grid md:grid-cols-3 gap-6">
                {services.map((service) => (
                    <ServiceCard key={service._id} service={service} />
                ))}
            </div>
        </section>
    );
};

export default Service;