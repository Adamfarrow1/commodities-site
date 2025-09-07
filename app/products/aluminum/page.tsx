"use client"

import { Button } from "@/components/ui/button"
import { Shield, Truck, Award, Download } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AluminumPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="min-h-screen bg-white">
            <Header currentPage="/products/aluminum" />

            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/4 left-10 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/4 left-32 w-16 h-0.5 bg-white animate-pulse"></div>
                    <div className="absolute top-1/4 left-52 w-4 h-4 bg-white rounded-full animate-pulse"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8 opacity-0 animate-fade-in">
                        <div className="w-3 h-3 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                        <span className="text-white text-sm font-medium">Premium Grade Aluminum</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 opacity-0 animate-slide-up" style={{ animationDelay: "0.3s" }}>
                        <span className="text-blue-300">Aluminum A7</span> Ingots
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-12 opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
                        99.7% minimum purity aluminum ingots for industrial applications worldwide
                    </p>

                    <div className="flex justify-center">
                        <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center font-bold text-white text-lg">
                            AL
                        </div>
                    </div>
                </div>
            </section>

            {/* Breadcrumb */}
            <section className="py-4 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="text-sm text-slate-600">
                        <Link href="/" className="hover:text-blue-600">
                            Home
                        </Link>
                        <span className="mx-2">/</span>
                        <Link href="/products" className="hover:text-blue-600">
                            Products
                        </Link>
                        <span className="mx-2">/</span>
                        <span className="text-slate-900">Aluminum A7 Ingots</span>
                    </nav>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-slate-900 mb-6 opacity-0 animate-slide-in-left" style={{ animationDelay: "0.3s" }}>
                                Premium <span className="text-blue-600">Aluminum A7</span> Ingots
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
                                Premium grade aluminum ingots with 99.7% minimum purity, perfect for industrial applications,
                                manufacturing, and construction. Our Aluminum A7 meets international standards and is sourced from
                                high-quality African smelters.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-slate-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-slate-900 mb-3">Technical Specifications</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>• Purity: 99.7% minimum</li>
                                        <li>• Weight: 20-25kg per ingot</li>
                                        <li>• Dimensions: Standard LME specifications</li>
                                        <li>• Packaging: Export-grade bundling</li>
                                    </ul>
                                </div>

                                <div className="bg-slate-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-slate-900 mb-3">Applications</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>• Automotive manufacturing</li>
                                        <li>• Construction materials</li>
                                        <li>• Electrical components</li>
                                        <li>• Packaging industry</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-blue-50 p-6 rounded-lg mb-6">
                                <h4 className="font-semibold text-slate-900 mb-3">Trading Terms</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <span className="font-medium text-slate-700">Minimum Order:</span>
                                        <p className="text-slate-600">5,000 Metric Tons</p>
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
                                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">Request Aluminum Quote</Button>
                                </Link>
                            </div>
                        </div>

                        <div className="relative">
                            <Image
                                src="/images/aluminum.jpeg"
                                alt="Aluminum A7 Ingots"
                                width={600}
                                height={500}
                                priority
                                className="rounded-lg shadow-xl object-cover opacity-0 animate-scale-up"
                                style={{ animationDelay: "0.7s" }}
                            />
                            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-lg shadow-lg opacity-0 animate-slide-in-right" style={{ animationDelay: "1s" }}>
                                <div className="text-xl font-bold">99.7%</div>
                                <div className="text-sm">Minimum Purity</div>
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
                            Every aluminum shipment comes with comprehensive quality documentation
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center p-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="h-8 w-8 text-blue-600 animate-pulse-slow" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">Third-Party Inspection</h3>
                            <p className="text-slate-600 text-sm">Independent quality verification</p>
                        </div>

                        <div className="text-center p-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Award className="h-8 w-8 text-blue-600 animate-pulse-slow" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">LME Standards</h3>
                            <p className="text-slate-600 text-sm">Meets international standards</p>
                        </div>

                        <div className="text-center p-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.7s" }}>
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Download className="h-8 w-8 text-blue-600 animate-pulse-slow" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">Documentation</h3>
                            <p className="text-slate-600 text-sm">Complete certificates included</p>
                        </div>

                        <div className="text-center p-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.9s" }}>
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Truck className="h-8 w-8 text-blue-600 animate-pulse-slow" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">Secure Logistics</h3>
                            <p className="text-slate-600 text-sm">Comprehensive shipping insurance</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Ready to Source Premium Aluminum?</h2>
                    <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                        Contact our specialists for competitive quotes on Aluminum A7 ingots with worldwide delivery.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-slide-up" style={{ animationDelay: "0.5s" }}>
                        <Link href="/contact">
                            <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-4 text-lg animate-pulse-slow">
                                Get Aluminum Quote
                            </Button>
                        </Link>
                        <Link href="/products">
                            <Button
                                variant="outline"
                                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg bg-transparent"
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
