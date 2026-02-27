"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Heart, Baby, Home, Activity } from 'lucide-react';

const Hero = () => {
    const services = [
        { id: '01', title: 'Baby Care Service', icon: <Baby className="w-6 h-6" />, color: 'bg-emerald-500', shadow: 'shadow-emerald-200' },
        { id: '02', title: 'Elderly Care Service', icon: <Home className="w-6 h-6" />, color: 'bg-amber-500', shadow: 'shadow-amber-200' },
        { id: '03', title: 'Sick People Care', icon: <Activity className="w-6 h-6" />, color: 'bg-blue-500', shadow: 'shadow-blue-200' },
    ];

    return (
        <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-28">
            {/* Background Decorative Circles */}
            <div className="absolute top-[-10%] left-[-5%] w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-50" />

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
                
                {/* Left Content */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-10"
                >
                    <div className="space-y-4">
                        <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-bold tracking-wide uppercase">
                            Premium Caregiving
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-[1.1]">
                            Trusted Care for <br />
                            <span className="text-blue-600">Your Loved Ones</span>
                        </h1>
                        <p className="text-gray-600 text-lg max-w-lg">
                            We provide compassionate and professional home care services tailored to your family's unique needs.
                        </p>
                    </div>

                    <div className="grid gap-4">
                        {services.map((service, index) => (
                            <motion.div 
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className="group flex items-center gap-5 p-4 bg-white/60 backdrop-blur-md rounded-2xl border border-white shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                            >
                                <div className={`${service.color} ${service.shadow} p-3.5 rounded-xl text-white shadow-lg`}>
                                    {service.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-slate-800">{service.title}</h3>
                                    <p className="text-sm text-gray-500 font-medium">Professional & Compassionate</p>
                                </div>
                                <span className="text-3xl font-black text-slate-100 group-hover:text-blue-50 group-transition uppercase italic pr-2">
                                    {service.id}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Content - Image with Creative Elements */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-white ring-1 ring-gray-200">
                        <img
                            src="/bed.jpg"
                            alt="Professional Psychology Therapy"
                            className="w-full h-[550px] object-cover"
                        />
                    </div>

                    {/* Floating Info Badge */}
                    <motion.div 
                        animate={{ y: [0, -15, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="absolute -bottom-6 -left-6 z-20 bg-white p-5 rounded-2xl shadow-2xl border border-gray-100 flex items-center gap-4"
                    >
                        <div className="bg-emerald-100 p-2 rounded-full text-emerald-600">
                            <CheckCircle2 size={32} />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Certified Experts</p>
                            <p className="text-xl font-black text-slate-800">100% Secure</p>
                        </div>
                    </motion.div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-500/10 rounded-full -z-0 blur-xl"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;