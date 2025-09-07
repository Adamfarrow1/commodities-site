"use client"
import Link from "next/link"
import { useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function SupplyChainPage() {
    // Scroll to top instantly when component mounts
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const services = [
        {
            title: "Inventory Management",
            description: "Optimize stock levels and reduce carrying costs with our advanced inventory systems",
            icon: (
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                </svg>
            ),
        },
        {
            title: "Supplier Network",
            description: "Access our vetted global network of reliable commodity suppliers and producers",
            icon: (
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
        },
        {
            title: "Demand Forecasting",
            description: "Predictive analytics to anticipate market demand and optimize procurement timing",
            icon: (
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            title: "Cost Optimization",
            description: "Strategic sourcing and procurement solutions to minimize total cost of ownership",
            icon: (
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                </svg>
            ),
        },
    ]

    const benefits = [
        {
            title: "Reduced Costs",
            description: "Optimize procurement and inventory costs through efficient supply chain management",
            percentage: "30%",
            metric: "Cost Reduction",
        },
        {
            title: "Improved Efficiency",
            description: "Streamline operations and reduce lead times with optimized supply chain processes",
            percentage: "45%",
            metric: "Efficiency Gain",
        },
        {
            title: "Risk Mitigation",
            description: "Diversified supplier network and contingency planning reduce supply chain risks",
            percentage: "60%",
            metric: "Risk Reduction",
        },
        {
            title: "Enhanced Visibility",
            description: "Real-time tracking and analytics provide complete supply chain transparency",
            percentage: "90%",
            metric: "Visibility Increase",
        },
    ]

    const processSteps = [
        {
            step: 1,
            title: "Assessment",
            description: "Comprehensive analysis of your current supply chain operations and requirements",
        },
        {
            step: 2,
            title: "Strategy",
            description: "Development of customized supply chain strategy aligned with your business goals",
        },
        {
            step: 3,
            title: "Implementation",
            description: "Execution of supply chain improvements with minimal disruption to operations",
        },
        {
            step: 4,
            title: "Optimization",
            description: "Continuous monitoring and refinement to maximize supply chain performance",
        },
    ]

    return (
        <div className="min-h-screen bg-white">
            <Header currentPage="/services" />

            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-r from-teal-800 to-teal-900 overflow-hidden">
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
                    <div className="inline-flex items-center px-6 py-3 bg-teal-900/20 backdrop-blur-sm rounded-full border border-white/20 mb-8 opacity-0 animate-fade-in">
                        <div className="flex space-x-1 mr-3">
                            <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                            <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                        </div>
                        <span className="text-white text-sm font-medium">Supply Chain Excellence</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 opacity-0 animate-slide-up" style={{ animationDelay: "0.3s" }}>
                        Supply Chain Management
                    </h1>
                    <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed mb-12 opacity-0 animate-slide-up" style={{ animationDelay: "0.5s" }}>
                        End-to-end supply chain solutions ensuring seamless delivery from source to destination
                    </p>

                    <div className="flex justify-center space-x-6">
                        <Link
                            href="/contact"
                            className="inline-flex items-center px-8 py-4 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 transition-colors duration-200 opacity-0 animate-scale-up"
                            style={{ animationDelay: "0.7s" }}
                        >
                            Optimize Supply Chain
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <Link
                            href="/services"
                            className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-teal-900 transition-colors duration-200 opacity-0 animate-scale-up"
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
                            Supply Chain Services
                        </h2>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
                            Comprehensive solutions to optimize your commodity supply chain operations
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

            {/* Benefits Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-6 opacity-0 animate-slide-up" style={{ animationDelay: "0.3s" }}>
                            Measurable Results
                        </h2>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
                            Proven outcomes from our supply chain optimization services
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <div
                                key={benefit.title}
                                className="text-center bg-gradient-to-br from-slate-50 to-gray-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 opacity-0 animate-scale-up"
                                style={{ animationDelay: `${0.7 + index * 0.2}s` }}
                            >
                                <div className="text-4xl font-bold text-teal-600 mb-2">{benefit.percentage}</div>
                                <div className="text-sm text-slate-500 mb-4">{benefit.metric}</div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-3">{benefit.title}</h3>
                                <p className="text-slate-600">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-6 opacity-0 animate-slide-up" style={{ animationDelay: "0.3s" }}>
                            Our Process
                        </h2>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
                            A systematic approach to supply chain optimization
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {processSteps.map((step, index) => (
                            <div
                                key={step.step}
                                className="text-center opacity-0 animate-fade-in"
                                style={{ animationDelay: `${0.7 + index * 0.2}s` }}
                            >
                                <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                                    {step.step}
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-3">{step.title}</h3>
                                <p className="text-slate-600">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6 opacity-0 animate-slide-up" style={{ animationDelay: "0.3s" }}>
                        Optimize Your Supply Chain
                    </h2>
                    <p className="text-xl text-slate-300 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
                        Contact us today to discuss your supply chain optimization needs
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
