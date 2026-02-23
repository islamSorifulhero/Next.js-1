import { CalendarCheck, PhoneCall, Users } from 'lucide-react';
import React from 'react';

const Hero = () => {
    return (
        <div className="max-w-6xl mx-auto py-16 px-4 flex flex-col md:flex-row items-center gap-12">

            <div className="md:w-1/2 relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-white border-[10px]">
                    <img
                        src="/bed.jpg"
                        alt="Professional Psychology Therapy"
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>

            <div className="md:w-1/2 space-y-8">
                <div>
                    <h1 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                        Trusted Care for Your Loved Ones
                    </h1>
                </div>

                <div className="space-y-2">

                    <div className="flex items-start gap-4 p-2 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300">
                        <div className="bg-green-500 p-3 rounded-lg border border-green-100 text-white">01
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-800">Baby Care Service</h3>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 p-2 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300">
                        <div className="bg-yellow-500 p-3 rounded-lg border border-yellow-100 text-white">02
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-800">Elderly Care Service</h3>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 p-2 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300">
                        <div className="bg-blue-500 p-3 rounded-lg border border-blue-100 text-white">03
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-800">Sick People Care</h3>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Hero;