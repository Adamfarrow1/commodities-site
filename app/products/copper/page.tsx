"use client"

import { Button } from "@/components/ui/button"
import { Shield, Truck, Award, Download } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CopperPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="min-h-screen bg-white">
            <Header currentPage="/products/copper" />

            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-r from-amber-600 to-amber-800 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/4 left-10 w-4 h-4 bg-amber-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/4 left-32 w-16 h-0.5 bg-white animate-pulse"></div>
                    <div className="absolute top-1/4 left-52 w-4 h-4 bg-white rounded-full animate-pulse"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8 opacity-0 animate-fade-in">
                        <div className="w-3 h-3 bg-amber-400 rounded-full mr-3 animate-pulse"></div>
                        <span className="text-white text-sm font-medium">LME Grade A Copper</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 opacity-0 animate-slide-up" style={{ animationDelay: "0.3s" }}>
                        <span className="text-amber-300">Copper Cathodes</span> LME Grade A
                    </h1>
                    <p className="text-xl md:text-2xl text-amber-100 max-w-4xl mx-auto leading-relaxed mb-12 opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
                        99.99% Cu content copper cathodes meeting London Metal Exchange standards
                    </p>

                    <div className="flex justify-center opacity-0 animate-scale-up" style={{ animationDelay: "0.7s" }}>
                        <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center font-bold text-slate-900 text-lg animate-bounce-slow">
                            CU
                        </div>
                    </div>
                </div>
            </section>

            {/* Breadcrumb */}
            <section className="py-4 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="text-sm text-slate-600">
                        <Link href="/" className="hover:text-amber-600">
                            Home
                        </Link>
                        <span className="mx-2">/</span>
                        <Link href="/products" className="hover:text-amber-600">
                            Products
                        </Link>
                        <span className="mx-2">/</span>
                        <span className="text-slate-900">Copper Cathodes LME Grade A</span>
                    </nav>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <Image
                                src="/images/copper.jpeg"
                                alt="Copper Cathodes"
                                width={600}
                                height={500}
                                priority
                                className="rounded-lg shadow-xl object-cover opacity-0 animate-slide-in-left"
                                style={{ animationDelay: "0.5s" }}
                            />
                            <div className="absolute -bottom-6 -left-6 bg-amber-500 text-slate-900 p-4 rounded-lg shadow-lg opacity-0 animate-slide-up" style={{ animationDelay: "1s" }}>
                                <div className="text-xl font-bold">99.99%</div>
                                <div className="text-sm">Cu Content</div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <h2 className="text-4xl font-bold text-slate-900 mb-6 opacity-0 animate-slide-in-right" style={{ animationDelay: "0.7s" }}>
                                Premium <span className="text-amber-600">Copper Cathodes</span>
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: "0.9s" }}>
                                High-grade copper cathodes meeting London Metal Exchange (LME) Grade A standards. Essential for
                                electrical, construction, and industrial applications. Our copper cathodes are sourced from premier
                                African copper mines with full traceability.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-slate-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-slate-900 mb-3">Technical Specifications</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>• Purity: 99.99% Cu minimum</li>
                                        <li>• Weight: 125kg per cathode</li>
                                        <li>• Standard: LME Grade A</li>
                                        <li>• Dimensions: 914mm x 914mm x 12mm</li>
                                    </ul>
                                </div>

                                <div className="bg-slate-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-slate-900 mb-3">Applications</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>• Electrical wiring & cables</li>
                                        <li>• Plumbing systems</li>
                                        <li>• Industrial machinery</li>
                                        <li>• Renewable energy systems</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-amber-50 p-6 rounded-lg mb-6">
                                <h4 className="font-semibold text-slate-900 mb-3">Trading Terms</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <span className="font-medium text-slate-700">Minimum Order:</span>
                                        <p className="text-slate-600">1,000 Metric Tons</p>
                                    </div>
                                    <div>
                                        <span className="font-medium text-slate-700">Contract Period:</span>
                                        <p className="text-slate-600">3 Years</p>
                                    </div>
                                    <div>
                                        <span className="font-medium text-slate-700">Payment:</span>
                                        <p className="text-slate-600">SBLC</p>
                                    </div>
                                    <div>
                                        <span className="font-medium text-slate-700">Delivery:</span>
                                        <p className="text-slate-600">CIF Worldwide</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/contact">
                                    <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-3">
                                        Request Copper Quote
                                    </Button>
                                </Link>
                                <Button variant="outline" className="px-8 py-3 bg-transparent">
                                    <Download className="w-4 h-4 mr-2" />
                                    Download Specs
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quality Assurance */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Quality Assurance</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Every copper shipment comes with comprehensive quality documentation
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center p-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="h-8 w-8 text-amber-600 animate-pulse-slow" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">Third-Party Inspection</h3>
                            <p className="text-slate-600 text-sm">Independent quality verification</p>
                        </div>

                        <div className="text-center p-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
                            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Award className="h-8 w-8 text-amber-600 animate-pulse-slow" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">LME Standards</h3>
                            <p className="text-slate-600 text-sm">Meets international standards</p>
                        </div>

                        <div className="text-center p-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.7s" }}>
                            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Download className="h-8 w-8 text-amber-600 animate-pulse-slow" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">Documentation</h3>
                            <p className="text-slate-600 text-sm">Complete certificates included</p>
                        </div>

                        <div className="text-center p-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.9s" }}>
                            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Truck className="h-8 w-8 text-amber-600 animate-pulse-slow" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">Secure Logistics</h3>
                            <p className="text-slate-600 text-sm">Comprehensive shipping insurance</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-800">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Ready to Source Premium Copper?</h2>
                    <p className="text-xl text-amber-100 mb-8 leading-relaxed">
                        Contact our specialists for competitive quotes on LME Grade A copper cathodes with worldwide delivery.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-slide-up" style={{ animationDelay: "0.5s" }}>
                        <Link href="/contact">
                            <Button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 text-lg animate-pulse-slow">
                                Get Copper Quote
                            </Button>
                        </Link>
                        <Link href="/products">
                            <Button
                                variant="outline"
                                className="border-white text-white hover:bg-white hover:text-amber-600 px-8 py-4 text-lg bg-transparent"
                            >
                                View All Products
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
