"use client"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AnimatedSection from "@/components/animated-section"

export default function TradeProcessPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    // Scroll to top instantly when component mounts
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const navItems = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Products", href: "/products" },
        { name: "Trade Process", href: "/trade-process" },
        { name: "FAQs", href: "/faqs" },
        { name: "Contact", href: "/contact" },
    ]

    const handleNavClick = () => {
        setIsMenuOpen(false)
    }

    return (
        <div className="min-h-screen bg-white">
            <Header currentPage="/trade-process" />

            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-r from-slate-800 to-slate-900 overflow-hidden">
                {/* Animated Process Flow Background */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/4 left-10 w-4 h-4 bg-amber-400 rounded-full animate-pulse-slow"></div>
                    <div
                        className="absolute top-1/4 left-32 w-16 h-0.5 bg-white animate-pulse-slow"
                        style={{ animationDelay: "0.5s" }}
                    ></div>
                    <div
                        className="absolute top-1/4 left-52 w-4 h-4 bg-blue-400 rounded-full animate-pulse-slow"
                        style={{ animationDelay: "1s" }}
                    ></div>
                    <div
                        className="absolute top-1/4 left-72 w-16 h-0.5 bg-white animate-pulse-slow"
                        style={{ animationDelay: "1.5s" }}
                    ></div>
                    <div
                        className="absolute top-1/4 left-96 w-4 h-4 bg-amber-400 rounded-full animate-pulse-slow"
                        style={{ animationDelay: "2s" }}
                    ></div>

                    <div
                        className="absolute bottom-1/4 right-10 w-4 h-4 bg-blue-400 rounded-full animate-pulse-slow"
                        style={{ animationDelay: "2.5s" }}
                    ></div>
                    <div
                        className="absolute bottom-1/4 right-32 w-16 h-0.5 bg-white animate-pulse-slow"
                        style={{ animationDelay: "3s" }}
                    ></div>
                    <div
                        className="absolute bottom-1/4 right-52 w-4 h-4 bg-amber-400 rounded-full animate-pulse-slow"
                        style={{ animationDelay: "3.5s" }}
                    ></div>
                </div>

                {/* Geometric Shapes */}
                <div className="absolute inset-0">
                    <div className="absolute top-16 right-20 w-20 h-20 border border-white/20 rotate-45 animate-float"></div>
                    <div className="absolute bottom-16 left-20 w-16 h-16 border border-amber-400/30 rotate-12 animate-bounce-slow"></div>
                    <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-blue-400/20 rounded-full animate-pulse-slow"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AnimatedSection animation="fade-in" delay={300}>
                        <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
                            <div className="flex space-x-1 mr-3">
                                <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"></div>
                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                                <div
                                    className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"
                                    style={{ animationDelay: "0.2s" }}
                                ></div>
                            </div>
                            <span className="text-white text-sm font-medium">Step by Step Process</span>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection animation="slide-up" delay={500}>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Our Trade Process
                        </h1>
                    </AnimatedSection>

                    <AnimatedSection animation="fade-in" delay={700}>
                        <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12">
                            A streamlined, transparent process designed for high-volume international commodity trading
                        </p>
                    </AnimatedSection>

                    {/* Process Steps Preview */}
                    <div className="flex justify-center items-center space-x-4 md:space-x-8">
                        {[1, 2, 3, 4].map((step, index) => (
                            <AnimatedSection key={step} animation="scale-up" delay={900 + index * 200}>
                                <div className="flex items-center">
                                    <div
                                        className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 hover:scale-110 ${step % 2 === 1 ? "bg-amber-500 text-slate-900" : "bg-blue-600 text-white"}`}
                                    >
                                        {step}
                                    </div>
                                    {step < 4 && <div className="w-8 h-0.5 bg-white/30 mx-2 hidden md:block"></div>}
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Process Steps */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-16">
                        {/* Step 1 */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <AnimatedSection animation="slide-up" delay={300}>
                                <div>
                                    <div className="flex items-center mb-6">
                                        <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                                            <span className="text-xl font-bold text-white">1</span>
                                        </div>
                                        <h2 className="text-3xl font-bold text-slate-900">Initial Inquiry & LOI</h2>
                                    </div>
                                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                        Begin your trading journey by submitting a detailed Letter of Intent (LOI). This document should
                                        include your commodity requirements, quantity specifications, destination port, and preferred delivery
                                        timeline.
                                    </p>
                                    <ul className="space-y-3 text-slate-600">
                                        <li className="flex items-start">
                                            <ChevronRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                                            Specify commodity type and grade requirements
                                        </li>
                                        <li className="flex items-start">
                                            <ChevronRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                                            Include monthly/annual quantity needs
                                        </li>
                                        <li className="flex items-start">
                                            <ChevronRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                                            Provide destination port details
                                        </li>
                                        <li className="flex items-start">
                                            <ChevronRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                                            Company credentials and references
                                        </li>
                                    </ul>
                                </div>
                            </AnimatedSection>
                            <AnimatedSection animation="slide-up" delay={500}>
                                <div className="relative">
                                    <Image
                                        src="/images/loi.jpg"
                                        alt="LOI Process"
                                        width={500}
                                        height={400}
                                        className="rounded-lg shadow-xl"
                                    />
                                </div>
                            </AnimatedSection>
                        </div>

                        {/* Step 2 */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <AnimatedSection animation="slide-up" delay={700} className="order-2 lg:order-1">
                                <div className="relative">
                                    <Image
                                        src="/images/market-graph.jpg"
                                        alt="Quote Process"
                                        width={500}
                                        height={400}
                                        className="rounded-lg shadow-xl"
                                    />
                                </div>
                            </AnimatedSection>
                            <AnimatedSection animation="slide-up" delay={900} className="order-1 lg:order-2">
                                <div>
                                    <div className="flex items-center mb-6">
                                        <div className="bg-amber-500 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                                            <span className="text-xl font-bold text-slate-900">2</span>
                                        </div>
                                        <h2 className="text-3xl font-bold text-slate-900">Quote & Terms</h2>
                                    </div>
                                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                        Upon review of your LOI, we provide competitive CIF pricing with comprehensive terms. Our quotes
                                        include all costs to your destination port, ensuring transparency and predictability.
                                    </p>
                                    <ul className="space-y-3 text-slate-600">
                                        <li className="flex items-start">
                                            <ChevronRight className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                                            Competitive CIF pricing to your port
                                        </li>
                                        <li className="flex items-start">
                                            <ChevronRight className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                                            3-year contract framework
                                        </li>
                                        <li className="flex items-start">
                                            <ChevronRight className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                                            SBLC payment structure
                                        </li>
                                        <li className="flex items-start">
                                            <ChevronRight className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                                            Quality specifications and certifications
                                        </li>
                                    </ul>
                                </div>
                            </AnimatedSection>
                        </div>

                        {/* Step 3 */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <AnimatedSection animation="slide-up" delay={1100}>
                                <div>
                                    <div className="flex items-center mb-6">
                                        <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                                            <span className="text-xl font-bold text-white">3</span>
                                        </div>
                                        <h2 className="text-3xl font-bold text-slate-900">Contract & Payment</h2>
                                    </div>
                                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                        Finalize agreements with mutual confirmation and establish secure SBLC payment terms. All contracts
                                        include comprehensive quality guarantees and delivery commitments.
                                    </p>
                                    <ul className="space-y-3 text-slate-600">
                                        <li className="flex items-start">
                                            <ChevronRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                                            Mutual contract confirmation
                                        </li>
                                        <li className="flex items-start">
                                            <ChevronRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                                            SBLC establishment and verification
                                        </li>
                                        <li className="flex items-start">
                                            <ChevronRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                                            Insurance and risk coverage
                                        </li>
                                        <li className="flex items-start">
                                            <ChevronRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                                            Legal documentation completion
                                        </li>
                                    </ul>
                                </div>
                            </AnimatedSection>
                            <AnimatedSection animation="slide-up" delay={1300}>
                                <div className="relative">
                                    <Image
                                        src="/images/secure-payment.JPG"
                                        alt="Contract Process"
                                        width={500}
                                        height={400}
                                        className="rounded-lg shadow-xl"
                                    />
                                </div>
                            </AnimatedSection>
                        </div>

                        {/* Step 4 */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <AnimatedSection animation="slide-up" delay={1500} className="order-2 lg:order-1">
                                <div className="relative">
                                    <Image
                                        src="/images/ship-exporting.jpg"
                                        alt="Delivery Process"
                                        width={500}
                                        height={400}
                                        className="rounded-lg shadow-xl"
                                    />
                                </div>
                            </AnimatedSection>
                            <AnimatedSection animation="slide-up" delay={1700} className="order-1 lg:order-2">
                                <div>
                                    <div className="flex items-center mb-6">
                                        <div className="bg-amber-500 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                                            <span className="text-xl font-bold text-slate-900">4</span>
                                        </div>
                                        <h2 className="text-3xl font-bold text-slate-900">Delivery & Documentation</h2>
                                    </div>
                                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                        CIF delivery to your specified port with complete documentation package. We handle all logistics,
                                        customs, and quality certifications to ensure smooth delivery.
                                    </p>
                                    <ul className="space-y-3 text-slate-600">
                                        <li className="flex items-start">
                                            <ChevronRight className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                                            Complete CIF delivery service
                                        </li>
                                        <li className="flex items-start">
                                            <ChevronRight className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                                            Quality certificates and analysis
                                        </li>
                                        <li className="flex items-start">
                                            <ChevronRight className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                                            Customs and shipping documentation
                                        </li>
                                        <li className="flex items-start">
                                            <ChevronRight className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                                            Additional support and resources
                                        </li>
                                    </ul>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
