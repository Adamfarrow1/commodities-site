"use client"
import Link from "next/link"
import { useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ServicesPage() {
    // Scroll to top instantly when component mounts
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const services = [
        {
            title: "Commodity Trading",
            description:
                "Expert trading services for aluminum, copper, and coal with competitive pricing and reliable execution.",
            icon: (
                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            ),
            features: ["Real-time market analysis", "Risk management", "Price optimization", "Global market access"],
            href: "/services/commodity-trading",
        },
        {
            title: "Supply Chain Management",
            description: "End-to-end supply chain solutions ensuring seamless delivery from source to destination.",
            icon: (
                <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                </svg>
            ),
            features: ["Inventory management", "Supplier network", "Demand forecasting", "Cost optimization"],
            href: "/services/supply-chain",
        },
        {
            title: "Quality Assurance",
            description: "Comprehensive quality control and testing services to ensure product specifications are met.",
            icon: (
                <svg className="w-12 h-12 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                </svg>
            ),
            features: ["Laboratory testing", "Certification services", "Quality documentation", "Compliance monitoring"],
            href: "/services/quality-assurance",
        },
        {
            title: "Logistics & Shipping",
            description: "Efficient logistics solutions with worldwide shipping capabilities and tracking systems.",
            icon: (
                <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                </svg>
            ),
            features: ["Global shipping network", "Real-time tracking", "Insurance coverage", "Customs clearance"],
            href: "/services/logistics",
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            <Header currentPage="/services" />

            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-r from-slate-800 to-slate-900 overflow-hidden">
                {/* Animated Process Flow Background */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/4 left-10 w-4 h-4 bg-amber-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/4 left-32 w-16 h-0.5 bg-white animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                    <div className="absolute top-1/4 left-52 w-4 h-4 bg-white rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                    <div className="absolute top-1/4 left-72 w-16 h-0.5 bg-amber-400 animate-pulse" style={{ animationDelay: "0.6s" }}></div>
                    <div className="absolute top-1/4 left-96 w-4 h-4 bg-white rounded-full animate-pulse" style={{ animationDelay: "0.8s" }}></div>
                </div>

                {/* Geometric Shapes */}
                <div className="absolute inset-0">
                    <div className="absolute top-16 right-20 w-20 h-20 border border-white/20 rotate-45 animate-float"></div>
                    <div className="absolute bottom-16 left-20 w-16 h-16 border border-amber-400/30 rotate-12 animate-float" style={{ animationDelay: "1s" }}></div>
                    <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-white/20 rounded-full animate-bounce-slow"></div>
                    <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-amber-400/20 rounded-full animate-bounce-slow" style={{ animationDelay: "0.5s" }}></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center px-6 py-3 bg-slate-800/20 backdrop-blur-sm rounded-full border border-white/20 mb-8 opacity-0 animate-fade-in">
                        <div className="flex space-x-1 mr-3">
                            <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                            <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                        </div>
                        <span className="text-white text-sm font-medium">Professional Services</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 opacity-0 animate-slide-up" style={{ animationDelay: "0.3s" }}>
                        Our Services
                    </h1>
                    <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed mb-12 opacity-0 animate-slide-up" style={{ animationDelay: "0.5s" }}>
                        End-to-end solutions for aluminum, copper, and coal trading with expert logistics and quality assurance
                    </p>

                    {/* Service Categories Preview */}
                    <div className="flex justify-center items-center space-x-4 md:space-x-8">
                        {[
                            { name: "Trading", color: "bg-amber-500 text-slate-900" },
                            { name: "Supply", color: "bg-blue-600 text-white" },
                            { name: "Quality", color: "bg-amber-500 text-slate-900" },
                            { name: "Logistics", color: "bg-blue-600 text-white" },
                        ].map((service, index) => (
                            <div
                                key={service.name}
                                className="flex items-center opacity-0 animate-fade-in"
                                style={{ animationDelay: `${0.7 + index * 0.2}s` }}
                            >
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 hover:scale-110 ${service.color}`}>
                                    {service.name.slice(0, 2).toUpperCase()}
                                </div>
                                <span className="ml-2 text-white text-sm hidden md:block">{service.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-6 opacity-0 animate-slide-up" style={{ animationDelay: "0.3s" }}>
                            Expert Services
                        </h2>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
                            Comprehensive solutions tailored to meet your commodity trading needs
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {services.map((service, index) => (
                            <Link
                                key={service.title}
                                href={service.href}
                                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 opacity-0 animate-scale-up"
                                style={{ animationDelay: `${0.7 + index * 0.2}s` }}
                            >
                                <div className="flex items-center mb-6">
                                    <div className="flex-shrink-0">{service.icon}</div>
                                    <h3 className="text-xl font-semibold text-slate-900 ml-4">{service.title}</h3>
                                </div>
                                <p className="text-slate-600 mb-6">{service.description}</p>
                                <ul className="space-y-3 mb-6">
                                    {service.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                                            <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors duration-200">
                                    <span className="text-sm font-medium">Learn more</span>
                                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6 opacity-0 animate-slide-up" style={{ animationDelay: "0.3s" }}>
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl text-slate-300 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
                        Contact us today to discuss your commodity trading needs
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center px-8 py-4 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 transition-colors duration-200 opacity-0 animate-scale-up"
                        style={{ animationDelay: "0.7s" }}
                    >
                        Get In Touch
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    )
}
