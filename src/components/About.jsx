import React from 'react';
import { FiHeart, FiShield, FiClock, FiAward } from "react-icons/fi";


const About = () => {
    const features = [
        {
            icon: <FiHeart className="w-12 h-12" />,
            title: "Compassionate Care",
            description:
                "Our caregivers provide loving and empathetic support to every individual",
        },
        {
            icon: <FiShield className="w-12 h-12" />,
            title: "Trusted Professionals",
            description:
                "All caregivers are certified, background-checked, and highly trained",
        },
        {
            icon: <FiClock className="w-12 h-12" />,
            title: "24/7 Availability",
            description: "Round-the-clock support whenever you need us, day or night",
        },
        {
            icon: <FiAward className="w-12 h-12" />,
            title: "Quality Assurance",
            description:
                "We maintain the highest standards of care and service excellence",
        },
    ];

    return (
        <section id="about" className="py-20 bg-gray-50">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                            About Health Care
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We are dedicated to providing professional, compassionate caregiving
                        services for families across Bangladesh. Your loved ones deserve the
                        best care, and we're here to deliver it.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2"
                        >
                            <div className="text-purple-600 mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
                            <div className="text-lg">Happy Families</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
                            <div className="text-lg">Professional Caregivers</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
                            <div className="text-lg">Satisfaction Rate</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;