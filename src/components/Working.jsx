import React from 'react';
import { PhoneCall, CalendarCheck, Users } from 'lucide-react'; // আইকনের জন্য lucide-react ব্যবহার করা হয়েছে

const Working = () => {
    return (
        <div className="max-w-6xl mx-auto py-16 px-4 flex flex-col md:flex-row items-center gap-12">

            {/* বাম পাশের ইমেজ সেকশন */}
            <div className="md:w-1/2 relative">
                {/* ছবির ওপরের সাদা বর্ডার ইফেক্টটি মাস্ক বা স্লাইসড স্টাইলে করা হয়েছে */}
                <div className="rounded-3xl overflow-hidden shadow-2xl border-white border-[10px]">
                    <img
                        src="/bed.jpg"
                        alt="Professional Psychology Therapy"
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>

            {/* ডান পাশের কন্টেন্ট সেকশন */}
            <div className="md:w-1/2 space-y-8">
                <div>
                    <h4 className="text-blue-500 italic font-medium mb-2">How We Work</h4>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        Professional Psychology Therapy You Can Choose
                    </h2>
                </div>

                {/* ফিচার লিস্ট */}
                <div className="space-y-6">

                    {/* আইটেম ১ */}
                    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300">
                        <div className="bg-green-50 p-3 rounded-lg border border-green-100">
                            <PhoneCall className="text-green-600 w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-800">Talk to Us First</h3>
                            <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                                It is a long established fact that a reader will be distracted by the readable content
                            </p>
                        </div>
                    </div>

                    {/* আইটেম ২ */}
                    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300">
                        <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-100">
                            <CalendarCheck className="text-yellow-600 w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-800">Book an Appointment</h3>
                            <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                                It is a long established fact that a reader will be distracted by the readable content
                            </p>
                        </div>
                    </div>

                    {/* আইটেম ৩ */}
                    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300">
                        <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                            <Users className="text-blue-600 w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-800">Come Sit With Us</h3>
                            <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                                It is a long established fact that a reader will be distracted by the readable content
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Working;