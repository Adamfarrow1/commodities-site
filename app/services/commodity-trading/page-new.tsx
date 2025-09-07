"use client"
import Link from "next/link"
import { useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CommodityTradingPage() {
    // Scroll to top instantly when component mounts
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tradingServices = [
        {
            title: "Market Analysis & Intelligence",
            description: "Real-time market data and expert analysis to inform your trading decisions",
            icon: (
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                </svg>
            ),
        },
        {
            title: "Risk Management",
            description: "Comprehensive risk assessment and mitigation strategies for volatile markets",
            icon: (
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                </svg>
            ),
        },
        {
            title: "Global Market Access",
            description: "Direct access to international commodity exchanges and trading platforms",
            icon: (
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                    />
                </svg>
            ),
        },
        {
            title: "Price Optimization",
            description: "Advanced algorithms and strategies to optimize your trading prices",
            icon: (
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                </svg>
            ),
        },
    ]

    const commodities = [
        {
            name: "Aluminum",
            description: "High-grade aluminum products for various industrial applications",
            applications: ["Automotive", "Aerospace", "Construction", "Electronics"],
        },
        {
            name: "Copper",
            description: "Premium copper materials for electrical and construction industries",
            applications: ["Electrical wiring", "Plumbing", "Electronics", "Telecommunications"],
        },
        {
            name: "Coal",
            description: "Quality coal products for energy and steel production",
            applications: ["Power generation", "Steel production", "Cement manufacturing", "Industrial heating"],
        },
    ]

    return (
        <div className="min-h-screen bg-white">
            <Header currentPage="/services" />

            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-r from-blue-800 to-blue-900 overflow-hidden">
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
                    <div className="inline-flex items-center px-6 py-3 bg-blue-900/20 backdrop-blur-sm rounded-full border border-white/20 mb-8 opacity-0 animate-fade-in">
                        <div className="flex space-x-1 mr-3">
                            <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                            <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                        </div>
                        <span className="text-white text-sm font-medium">Trading Excellence</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 opacity-0 animate-slide-up" style={{ animationDelay: "0.3s" }}>
                        Commodity Trading
                    </h1>
                    <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed mb-12 opacity-0 animate-slide-up" style={{ animationDelay: "0.5s" }}>
                        Expert trading services for aluminum, copper, and coal with competitive pricing and reliable execution
                    </p>

                    <div className="flex justify-center space-x-6">
                        <Link
                            href="/contact"
                            className="inline-flex items-center px-8 py-4 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 transition-colors duration-200 opacity-0 animate-scale-up"
                            style={{ animationDelay: "0.7s" }}
                        >
                            Start Trading
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <Link
                            href="/products"
                            className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-colors duration-200 opacity-0 animate-scale-up"
                            style={{ animationDelay: "0.9s" }}
                        >
                            View Products
                        </Link>
                    </div>
                </div>
            </section>

            {/* Trading Services */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-6 opacity-0 animate-slide-up" style={{ animationDelay: "0.3s" }}>
                            Trading Services
                        </h2>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
                            Comprehensive trading solutions backed by market expertise
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {tradingServices.map((service, index) => (
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

            {/* Commodities Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-6 opacity-0 animate-slide-up" style={{ animationDelay: "0.3s" }}>
                            Our Commodities
                        </h2>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
                            Premium quality materials for diverse industrial applications
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {commodities.map((commodity, index) => (
                            <div
                                key={commodity.name}
                                className="bg-gradient-to-br from-slate-50 to-gray-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 opacity-0 animate-scale-up"
                                style={{ animationDelay: `${0.7 + index * 0.2}s` }}
                            >
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">{commodity.name}</h3>
                                <p className="text-slate-600 mb-6">{commodity.description}</p>
                                <div>
                                    <h4 className="text-sm font-semibold text-slate-900 mb-3">Key Applications:</h4>
                                    <ul className="space-y-2">
                                        {commodity.applications.map((application, appIndex) => (
                                            <li key={appIndex} className="flex items-center text-sm text-slate-600">
                                                <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                {application}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6 opacity-0 animate-slide-up" style={{ animationDelay: "0.3s" }}>
                        Ready to Start Trading?
                    </h2>
                    <p className="text-xl text-slate-300 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
                        Contact us today to discuss your commodity trading requirements
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center px-8 py-4 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 transition-colors duration-200 opacity-0 animate-scale-up"
                        style={{ animationDelay: "0.7s" }}
                    >
                        Get Started
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
