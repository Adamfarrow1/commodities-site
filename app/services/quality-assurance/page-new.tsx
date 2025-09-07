"use client"
import { Shield, CheckCircle, FileText, Award, Microscope, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function QualityAssurancePage() {
    // Scroll to top instantly when component mounts
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const services = [
        {
            title: "Laboratory Testing",
            description: "Comprehensive chemical and physical analysis using state-of-the-art equipment",
            icon: <Microscope className="w-8 h-8 text-blue-600" />,
        },
        {
            title: "Certification Services",
            description: "International quality certifications and compliance documentation",
            icon: <Award className="w-8 h-8 text-amber-600" />,
        },
        {
            title: "Quality Documentation",
            description: "Detailed quality reports and traceability documentation for every shipment",
            icon: <FileText className="w-8 h-8 text-green-600" />,
        },
        {
            title: "Compliance Monitoring",
            description: "Ongoing monitoring to ensure adherence to international quality standards",
            icon: <Shield className="w-8 h-8 text-purple-600" />,
        },
    ]

    const standards = [
        "ISO 9001:2015 Quality Management",
        "ASTM International Standards",
        "LME (London Metal Exchange) Specifications",
        "ISRI (Institute of Scrap Recycling Industries)",
        "SGS Inspection Services",
        "Bureau Veritas Certification",
    ]

    const testingCapabilities = [
        {
            category: "Chemical Analysis",
            tests: ["Elemental composition", "Purity levels", "Trace elements", "Contamination detection"],
        },
        {
            category: "Physical Properties",
            tests: ["Density measurements", "Hardness testing", "Structural analysis", "Size distribution"],
        },
        {
            category: "Performance Testing",
            tests: ["Conductivity testing", "Corrosion resistance", "Thermal properties", "Mechanical strength"],
        },
    ]

    return (
        <div className="min-h-screen bg-white">
            <Header currentPage="/services" />

            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-r from-green-800 to-green-900 overflow-hidden">
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
                    <div className="inline-flex items-center px-6 py-3 bg-green-900/20 backdrop-blur-sm rounded-full border border-white/20 mb-8 opacity-0 animate-fade-in">
                        <div className="flex space-x-1 mr-3">
                            <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                            <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                        </div>
                        <span className="text-white text-sm font-medium">Quality Excellence</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 opacity-0 animate-slide-up" style={{ animationDelay: "0.3s" }}>
                        Quality Assurance
                    </h1>
                    <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed mb-12 opacity-0 animate-slide-up" style={{ animationDelay: "0.5s" }}>
                        Comprehensive quality control and testing services to ensure product specifications are met
                    </p>

                    <div className="flex justify-center space-x-6">
                        <Link
                            href="/contact"
                            className="inline-flex items-center px-8 py-4 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 transition-colors duration-200 opacity-0 animate-scale-up"
                            style={{ animationDelay: "0.7s" }}
                        >
                            Request Testing
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                        <Link
                            href="/services"
                            className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-900 transition-colors duration-200 opacity-0 animate-scale-up"
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
                            Quality Services
                        </h2>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
                            Comprehensive quality assurance solutions for commodity trading
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

            {/* Testing Capabilities */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-6 opacity-0 animate-slide-up" style={{ animationDelay: "0.3s" }}>
                            Testing Capabilities
                        </h2>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
                            Advanced testing facilities for comprehensive commodity analysis
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testingCapabilities.map((capability, index) => (
                            <div
                                key={capability.category}
                                className="bg-gradient-to-br from-slate-50 to-gray-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 opacity-0 animate-scale-up"
                                style={{ animationDelay: `${0.7 + index * 0.2}s` }}
                            >
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">{capability.category}</h3>
                                <ul className="space-y-3">
                                    {capability.tests.map((test, testIndex) => (
                                        <li key={testIndex} className="flex items-center text-slate-600">
                                            <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                                            {test}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Standards Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-6 opacity-0 animate-slide-up" style={{ animationDelay: "0.3s" }}>
                            International Standards
                        </h2>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
                            Compliance with globally recognized quality standards and certifications
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {standards.map((standard, index) => (
                            <div
                                key={standard}
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 opacity-0 animate-fade-in"
                                style={{ animationDelay: `${0.7 + index * 0.1}s` }}
                            >
                                <div className="flex items-center">
                                    <Award className="w-6 h-6 text-amber-600 mr-3" />
                                    <span className="text-slate-900 font-medium">{standard}</span>
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
                        Ensure Quality Standards
                    </h2>
                    <p className="text-xl text-slate-300 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
                        Contact us today to discuss your quality assurance requirements
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
