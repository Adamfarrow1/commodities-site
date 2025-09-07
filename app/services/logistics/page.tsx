"use client"
import { Truck, Ship, Plane, MapPin, Clock, Shield, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function LogisticsPage() {
    // Scroll to top instantly when component mounts
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const services = [
        {
            title: "Global Shipping Network",
            description: "Worldwide shipping capabilities with trusted carriers and optimized routes",
            icon: <Ship className="w-8 h-8 text-blue-600" />,
        },
        {
            title: "Real-time Tracking",
            description: "Advanced tracking systems providing complete visibility of your shipments",
            icon: <MapPin className="w-8 h-8 text-green-600" />,
        },
        {
            title: "Insurance Coverage",
            description: "Comprehensive cargo insurance to protect your valuable commodity shipments",
            icon: <Shield className="w-8 h-8 text-purple-600" />,
        },
        {
            title: "Customs Clearance",
            description: "Expert customs handling and documentation for smooth international trade",
            icon: <Clock className="w-8 h-8 text-amber-600" />,
        },
    ]

    const transportModes = [
        {
            title: "Ocean Freight",
            description: "Cost-effective shipping for large volume commodity transport",
            icon: <Ship className="w-12 h-12 text-blue-600" />,
            features: ["Bulk carrier vessels", "Container shipping", "Roll-on/roll-off", "Break bulk cargo"],
        },
        {
            title: "Road Transport",
            description: "Flexible trucking solutions for domestic and regional deliveries",
            icon: <Truck className="w-12 h-12 text-green-600" />,
            features: ["Fleet management", "Last-mile delivery", "Cross-docking", "Regional networks"],
        },
        {
            title: "Air Cargo",
            description: "Express air freight for time-sensitive commodity shipments",
            icon: <Plane className="w-12 h-12 text-purple-600" />,
            features: ["Priority handling", "Temperature controlled", "Express delivery", "Global coverage"],
        },
    ]

    const benefits = [
        {
            title: "Cost Optimization",
            description: "Competitive rates through established carrier relationships and route optimization",
        },
        {
            title: "Risk Management",
            description: "Comprehensive insurance coverage and risk mitigation strategies",
        },
        {
            title: "Documentation",
            description: "Complete handling of shipping documents, customs paperwork, and compliance",
        },
        {
            title: "24/7 Support",
            description: "Round-the-clock customer support and shipment monitoring",
        },
    ]

    return (
        <div className="min-h-screen bg-white">
            <Header currentPage="/services" />

            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-r from-purple-800 to-purple-900 overflow-hidden">
                {/* Animated Background Elements */}
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
                    <div className="inline-flex items-center px-6 py-3 bg-purple-900/20 backdrop-blur-sm rounded-full border border-white/20 mb-8 opacity-0 animate-fade-in">
                        <div className="flex space-x-1 mr-3">
                            <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                            <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                        </div>
                        <span className="text-white text-sm font-medium">Global Logistics</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 opacity-0 animate-slide-up" style={{ animationDelay: "0.3s" }}>
                        Logistics & Shipping
                    </h1>
                    <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed mb-12 opacity-0 animate-slide-up" style={{ animationDelay: "0.5s" }}>
                        Efficient logistics solutions with worldwide shipping capabilities and advanced tracking systems
                    </p>

                    <div className="flex justify-center space-x-6">
                        <Link
                            href="/contact"
                            className="inline-flex items-center px-8 py-4 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 transition-colors duration-200 opacity-0 animate-scale-up"
                            style={{ animationDelay: "0.7s" }}
                        >
                            Get Quote
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                        <Link
                            href="/services"
                            className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-900 transition-colors duration-200 opacity-0 animate-scale-up"
                            style={{ animationDelay: "0.9s" }}
                        >
                            All Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-6 opacity-0 animate-slide-up" style={{ animationDelay: "0.3s" }}>
                            Logistics Services
                        </h2>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
                            Comprehensive shipping and logistics solutions for your commodity needs
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={service.title}
                                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 opacity-0 animate-scale-up"
                                style={{ animationDelay: `${0.7 + index * 0.2}s` }}
                            >
                                <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-lg mb-4">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                                <p className="text-slate-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Transport Modes */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-6 opacity-0 animate-slide-up" style={{ animationDelay: "0.3s" }}>
                            Transport Solutions
                        </h2>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
                            Multiple transport modes to meet your specific requirements
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {transportModes.map((mode, index) => (
                            <div
                                key={mode.title}
                                className="bg-gradient-to-br from-slate-50 to-gray-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 opacity-0 animate-scale-up"
                                style={{ animationDelay: `${0.7 + index * 0.2}s` }}
                            >
                                <div className="flex items-center justify-center w-20 h-20 bg-white rounded-lg mb-6 mx-auto">
                                    {mode.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">{mode.title}</h3>
                                <p className="text-slate-600 mb-6 text-center">{mode.description}</p>
                                <ul className="space-y-3">
                                    {mode.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                                            <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-6 opacity-0 animate-slide-up" style={{ animationDelay: "0.3s" }}>
                            Why Choose Our Logistics?
                        </h2>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
                            Experience the advantages of working with logistics experts
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <div
                                key={benefit.title}
                                className="text-center opacity-0 animate-fade-in"
                                style={{ animationDelay: `${0.7 + index * 0.2}s` }}
                            >
                                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle className="w-8 h-8 text-purple-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-3">{benefit.title}</h3>
                                <p className="text-slate-600">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6 opacity-0 animate-slide-up" style={{ animationDelay: "0.3s" }}>
                        Ready to Ship Your Commodities?
                    </h2>
                    <p className="text-xl text-slate-300 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
                        Contact us today for a customized logistics solution
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center px-8 py-4 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 transition-colors duration-200 opacity-0 animate-scale-up"
                        style={{ animationDelay: "0.7s" }}
                    >
                        Get Started
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    )
}
