"use client"
import { Mail, Phone, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AboutPage() {
    // Scroll to top instantly when component mounts
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="min-h-screen bg-white">
            <Header currentPage="/about" />

            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden">
                {/* Animated Company Flow Background */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/4 left-10 w-4 h-4 bg-amber-400 rounded-full animate-pulse-slow"></div>
                    <div
                        className="absolute top-1/4 left-32 w-16 h-0.5 bg-white animate-pulse-slow"
                        style={{ animationDelay: "0.5s" }}
                    ></div>
                    <div
                        className="absolute top-1/4 left-52 w-4 h-4 bg-white rounded-full animate-pulse-slow"
                        style={{ animationDelay: "1s" }}
                    ></div>
                    <div
                        className="absolute top-1/4 left-72 w-16 h-0.5 bg-amber-400 animate-pulse-slow"
                        style={{ animationDelay: "1.5s" }}
                    ></div>
                    <div
                        className="absolute top-1/4 left-96 w-4 h-4 bg-white rounded-full animate-pulse-slow"
                        style={{ animationDelay: "2s" }}
                    ></div>

                    <div
                        className="absolute bottom-1/4 right-10 w-4 h-4 bg-white rounded-full animate-pulse-slow"
                        style={{ animationDelay: "2.5s" }}
                    ></div>
                    <div
                        className="absolute bottom-1/4 right-32 w-16 h-0.5 bg-amber-400 animate-pulse-slow"
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
                    <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-white/20 rounded-full animate-pulse-slow"></div>
                    <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-amber-400/20 rounded-full animate-float"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8 hero-element animate-fade-in">
                        <div className="flex space-x-1 mr-3">
                            <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                            <div
                                className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"
                                style={{ animationDelay: "0.2s" }}
                            ></div>
                        </div>
                        <span className="text-white text-sm font-medium">Our Story & Heritage</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 hero-element animate-slide-in-up">
                        About Our Company
                    </h1>
                    <p
                        className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-12 hero-element animate-fade-in-up"
                        style={{ animationDelay: "0.3s" }}
                    >
                        Leading the global commodities trade with excellence and worldwide reliability
                    </p>

                    {/* Company Milestones */}
                    <div className="flex justify-center items-center space-x-4 md:space-x-8">
                        {[
                            { year: "2008", label: "Founded" },
                            { year: "15+", label: "Years" },
                            { year: "50+", label: "Countries" },
                            { year: "500K+", label: "Tons/Year" },
                        ].map((milestone, index) => (
                            <div
                                key={milestone.year}
                                className="flex items-center opacity-100 transform translate-y-0"
                                style={{
                                    animation: `fadeIn 1s ease-out forwards`,
                                    animationDelay: `${0.5 + index * 0.2}s`,
                                    opacity: 0,
                                }}
                            >
                                <div className="text-center">
                                    <div className="text-2xl md:text-3xl font-bold text-amber-400 mb-1">{milestone.year}</div>
                                    <div className="text-blue-100 text-xs md:text-sm">{milestone.label}</div>
                                </div>
                                {index < 3 && <div className="w-8 h-0.5 bg-white/30 mx-2 hidden md:block"></div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Company Story */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-slate-900 mb-6">
                                Our <span className="text-amber-500">Story</span>
                            </h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                Founded with a vision to provide excellence in global commodities trading, we have grown from a
                                regional supplier to a trusted international partner. Our deep understanding of international markets,
                                combined with world-class logistics and quality standards, positions us uniquely in the global
                                commodities landscape.
                            </p>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Over the years, we have built lasting relationships with mines, governments, and industrial buyers
                                worldwide. Our commitment to transparency, reliability, and competitive pricing has made us the
                                preferred choice for high-volume commodity trading.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center p-4 bg-blue-50 rounded-lg">
                                    <div className="text-3xl font-bold text-blue-600 mb-2">2008</div>
                                    <div className="text-slate-600">Founded</div>
                                </div>
                                <div className="text-center p-4 bg-amber-50 rounded-lg">
                                    <div className="text-3xl font-bold text-amber-600 mb-2">15+</div>
                                    <div className="text-slate-600">Years Experience</div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <Image
                                src="/images/diverse-collegues.jpg"
                                alt="Company history"
                                width={600}
                                height={500}
                                className="rounded-lg shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
                            <p className="text-slate-600 leading-relaxed">
                                To be the most trusted partner in global commodities trading,
                                delivering unmatched quality, reliability, and value through innovative trading solutions and long-term
                                partnerships.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
                            <p className="text-slate-600 leading-relaxed">
                                To become the leading global commodities trading company, recognized for our African heritage,
                                international standards, and commitment to sustainable trade practices that benefit all stakeholders in
                                the value chain.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            {/* <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Leadership Team</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Experienced professionals with deep expertise in global commodities trading
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <Image
                                src="/placeholder.svg?height=200&width=200&text=CEO"
                                alt="CEO"
                                width={200}
                                height={200}
                                className="rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">John Smith</h3>
                            <p className="text-amber-600 font-medium mb-3">Chief Executive Officer</p>
                            <p className="text-slate-600 text-sm">
                                20+ years in international commodities trading with extensive African market experience.
                            </p>
                        </div>

                        <div className="text-center">
                            <Image
                                src="/placeholder.svg?height=200&width=200&text=COO"
                                alt="COO"
                                width={200}
                                height={200}
                                className="rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Sarah Johnson</h3>
                            <p className="text-amber-600 font-medium mb-3">Chief Operating Officer</p>
                            <p className="text-slate-600 text-sm">
                                Expert in global logistics and supply chain management with focus on CIF deliveries.
                            </p>
                        </div>

                        <div className="text-center">
                            <Image
                                src="/placeholder.svg?height=200&width=200&text=CFO"
                                alt="CFO"
                                width={200}
                                height={200}
                                className="rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Michael Chen</h3>
                            <p className="text-amber-600 font-medium mb-3">Chief Financial Officer</p>
                            <p className="text-slate-600 text-sm">
                                Specialist in international trade finance and SBLC structures for large-scale transactions.
                            </p>
                        </div>
                    </div>
                </div>
            </section> */}

            <Footer />
        </div>
    )
}
