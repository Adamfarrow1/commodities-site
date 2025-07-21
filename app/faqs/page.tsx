"use client"

import { Button } from "@/components/ui/button"
import { Mail, Phone, Linkedin, Plus, Minus } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function FAQsPage() {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null)

    // Scroll to top instantly when component mounts
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const faqs = [
        {
            question: "What are your minimum order quantities?",
            answer:
                "Our minimum order quantities are: Aluminum A7 - 5,000 Metric Tons, Copper Cathodes - 1,000 Metric Tons, and Hard Coking Coal - 10,000 Metric Tons. These quantities ensure optimal logistics and cost efficiency for international shipments.",
        },
        {
            question: "What payment terms do you accept?",
            answer:
                "We operate exclusively with Standby Letters of Credit (SBLC) from top-tier international banks. Our standard contract model is 3 years with monthly delivery schedules. This structure provides security for both parties and enables competitive long-term pricing.",
        },
        {
            question: "How do you ensure product quality?",
            answer:
                "All our commodities undergo rigorous quality control processes including third-party inspections, international certifications, and comprehensive analysis reports. We provide complete documentation including certificates of origin, quality analysis, and compliance with international standards.",
        },
        {
            question: "What does CIF delivery include?",
            answer:
                "Our CIF (Cost, Insurance, and Freight) delivery includes all costs to bring the commodities to your specified port, including freight charges, marine insurance, export documentation, customs clearance at origin, and all handling charges until the goods reach your destination port.",
        },
        {
            question: "Which ports can you deliver to?",
            answer:
                "We deliver to any major commercial port worldwide. Our extensive logistics network and partnerships with international shipping companies enable us to provide CIF delivery to ports across Asia, Europe, Americas, and other regions.",
        },
        {
            question: "How long does the trade process take?",
            answer:
                "From initial LOI to first delivery typically takes 45-60 days, depending on documentation processing, SBLC establishment, and shipping schedules. Subsequent deliveries under the contract follow regular monthly schedules as agreed.",
        },
        {
            question: "What documentation is required to start trading?",
            answer:
                "You'll need to provide a valid Letter of Intent (LOI), company registration documents, proof of financial capability, import/export licenses, and bank details for SBLC establishment. Our team will guide you through the complete documentation process.",
        },
        {
            question: "Do you provide commodity origin certificates?",
            answer:
                "Yes, all our commodities come with complete origin documentation including certificates of origin, mining licenses, export permits, and compliance certificates. We ensure full traceability and legal compliance for all shipments.",
        },
        {
            question: "Can you handle custom specifications?",
            answer:
                "While we specialize in standard grades (Aluminum A7, LME Grade A Copper Cathodes, and premium Hard Coking Coal), we can accommodate specific requirements within reasonable parameters. Contact us to discuss your specific needs.",
        },
        {
            question: "What happens if there are quality issues?",
            answer:
                "We stand behind our quality guarantees. In the rare event of quality issues, we provide full remediation including replacement, compensation, or credit as per contract terms. Our comprehensive insurance coverage protects all parties.",
        },
    ]

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index)
    }

    return (
        <div className="min-h-screen bg-white">
            <Header currentPage="/faqs" />

            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-r from-amber-500 to-amber-600 overflow-hidden">
                {/* Animated FAQ Flow Background */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/4 left-10 w-4 h-4 bg-white rounded-full animate-pulse-slow"></div>
                    <div
                        className="absolute top-1/4 left-32 w-16 h-0.5 bg-slate-800 animate-pulse-slow"
                        style={{ animationDelay: "0.5s" }}
                    ></div>
                    <div
                        className="absolute top-1/4 left-52 w-4 h-4 bg-slate-800 rounded-full animate-pulse-slow"
                        style={{ animationDelay: "1s" }}
                    ></div>
                    <div
                        className="absolute top-1/4 left-72 w-16 h-0.5 bg-white animate-pulse-slow"
                        style={{ animationDelay: "1.5s" }}
                    ></div>
                    <div
                        className="absolute top-1/4 left-96 w-4 h-4 bg-white rounded-full animate-pulse-slow"
                        style={{ animationDelay: "2s" }}
                    ></div>

                    <div
                        className="absolute bottom-1/4 right-10 w-4 h-4 bg-slate-800 rounded-full animate-pulse-slow"
                        style={{ animationDelay: "2.5s" }}
                    ></div>
                    <div
                        className="absolute bottom-1/4 right-32 w-16 h-0.5 bg-white animate-pulse-slow"
                        style={{ animationDelay: "3s" }}
                    ></div>
                    <div
                        className="absolute bottom-1/4 right-52 w-4 h-4 bg-white rounded-full animate-pulse-slow"
                        style={{ animationDelay: "3.5s" }}
                    ></div>
                </div>

                {/* Geometric Shapes */}
                <div className="absolute inset-0">
                    <div className="absolute top-16 right-20 w-20 h-20 border border-white/30 rotate-45 animate-float"></div>
                    <div className="absolute bottom-16 left-20 w-16 h-16 border border-slate-800/20 rotate-12 animate-bounce-slow"></div>
                    <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-white/20 rounded-full animate-pulse-slow"></div>
                    <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-slate-800/20 rounded-full animate-float"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-8 hero-element animate-fade-in">
                        <div className="flex space-x-1 mr-3">
                            <div className="w-2 h-2 bg-slate-800 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                            <div
                                className="w-2 h-2 bg-slate-800 rounded-full animate-bounce"
                                style={{ animationDelay: "0.2s" }}
                            ></div>
                        </div>
                        <span className="text-slate-800 text-sm font-medium">Get Answers</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 hero-element animate-slide-in-up">
                        Frequently Asked Questions
                    </h1>
                    <p
                        className="text-xl md:text-2xl text-slate-800 max-w-4xl mx-auto leading-relaxed mb-12 hero-element animate-fade-in-up"
                        style={{ animationDelay: "0.3s" }}
                    >
                        Find answers to common questions about our commodities trading process and services
                    </p>

                    {/* FAQ Categories Flow */}
                    <div className="flex justify-center items-center space-x-4 md:space-x-8">
                        {[
                            { category: "Trading", icon: "?" },
                            { category: "Pricing", icon: "$" },
                            { category: "Delivery", icon: "→" },
                            { category: "Quality", icon: "✓" },
                        ].map((item, index) => (
                            <div
                                key={item.category}
                                className="flex items-center opacity-100 transform translate-y-0"
                                style={{
                                    animation: `fadeIn 1s ease-out forwards`,
                                    animationDelay: `${0.5 + index * 0.2}s`,
                                    opacity: 0,
                                }}
                            >
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center font-bold text-slate-800 text-sm transition-all duration-300 hover:scale-110 mb-2">
                                        {item.icon}
                                    </div>
                                    <div className="text-slate-800 text-xs">{item.category}</div>
                                </div>
                                {index < 3 && <div className="w-8 h-0.5 bg-slate-800/30 mx-2 hidden md:block"></div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-slate-50 rounded-lg border border-slate-200">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-100 transition-colors duration-200"
                                >
                                    <h3 className="text-lg font-semibold text-slate-900 pr-4">{faq.question}</h3>
                                    {openFAQ === index ? (
                                        <Minus className="h-5 w-5 text-blue-600 flex-shrink-0" />
                                    ) : (
                                        <Plus className="h-5 w-5 text-blue-600 flex-shrink-0" />
                                    )}
                                </button>
                                {openFAQ === index && (
                                    <div className="px-6 pb-4">
                                        <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Still Have Questions?</h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Our trade specialists are ready to help you with any specific questions about our commodities or trading
                        process.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact">
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                                Contact Our Specialists
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button
                                variant="outline"
                                className="border-slate-300 text-slate-700 hover:bg-slate-100 px-8 py-3 text-lg bg-transparent"
                            >
                                Schedule a Call
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
