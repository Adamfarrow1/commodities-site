"use client"

import { Button } from "@/components/ui/button"
import { Mail, Phone, Linkedin, Download, Shield, Truck, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ProductsPage() {
    // Scroll to top instantly when component mounts
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="min-h-screen bg-white">
            <Header currentPage="/products" />

            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden">
                {/* Animated Product Flow Background */}
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
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                            <div
                                className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"
                                style={{ animationDelay: "0.1s" }}
                            ></div>
                            <div
                                className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                                style={{ animationDelay: "0.2s" }}
                            ></div>
                        </div>
                        <span className="text-white text-sm font-medium">Premium Commodities</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 hero-element animate-slide-in-up">
                        Our Products
                    </h1>
                    <p
                        className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-12 hero-element animate-fade-in-up"
                        style={{ animationDelay: "0.3s" }}
                    >
                        Premium commodities sourced from Africa, delivered globally with unmatched quality and reliability
                    </p>

                    {/* Product Flow */}
                    <div className="flex justify-center items-center space-x-4 md:space-x-8">
                        {[
                            { symbol: "AL", name: "Aluminum", color: "bg-blue-500" },
                            { symbol: "CU", name: "Copper", color: "bg-amber-500" },
                            { symbol: "CO", name: "Coal", color: "bg-slate-600" },
                        ].map((product, index) => (
                            <div
                                key={product.symbol}
                                className="flex items-center opacity-100 transform translate-y-0"
                                style={{
                                    animation: `fadeIn 1s ease-out forwards`,
                                    animationDelay: `${0.5 + index * 0.2}s`,
                                    opacity: 0,
                                }}
                            >
                                <div className="text-center">
                                    <div
                                        className={`w-12 h-12 ${product.color} rounded-full flex items-center justify-center font-bold text-white text-sm transition-all duration-300 hover:scale-110 mb-2`}
                                    >
                                        {product.symbol}
                                    </div>
                                    <div className="text-blue-100 text-xs">{product.name}</div>
                                </div>
                                {index < 2 && <div className="w-8 h-0.5 bg-white/30 mx-2 hidden md:block"></div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products Overview */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Core Commodities</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            We specialize in three high-demand commodities, each meeting international standards and delivered with
                            comprehensive quality assurance.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div className="text-center p-6 bg-slate-50 rounded-xl">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="h-8 w-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-2">Quality Assured</h3>
                            <p className="text-slate-600">International certifications and third-party inspections</p>
                        </div>

                        <div className="text-center p-6 bg-slate-50 rounded-xl">
                            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Truck className="h-8 w-8 text-amber-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-2">CIF Delivery</h3>
                            <p className="text-slate-600">Complete logistics to any port worldwide</p>
                        </div>

                        <div className="text-center p-6 bg-slate-50 rounded-xl">
                            <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Award className="h-8 w-8 text-slate-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-2">African Origin</h3>
                            <p className="text-slate-600">Direct sourcing from premium African mines</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Aluminum A7 Section */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-slate-900 mb-6">
                                <span className="text-blue-600">Aluminum A7</span> Ingots
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Premium grade aluminum ingots with 99.7% minimum purity, perfect for industrial applications,
                                manufacturing, and construction. Our Aluminum A7 meets international standards and is sourced from
                                high-quality African smelters.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-white p-6 rounded-lg shadow-sm">
                                    <h4 className="font-semibold text-slate-900 mb-3">Technical Specifications</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>• Purity: 99.7% minimum</li>
                                        <li>• Weight: 20-25kg per ingot</li>
                                        <li>• Dimensions: Standard LME specifications</li>
                                        <li>• Packaging: Export-grade bundling</li>
                                    </ul>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-sm">
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
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <span className="font-medium text-slate-700">Minimum Order:</span>
                                        <p className="text-slate-600">1,000 MT</p>
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

                            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">Request Aluminum Quote</Button>
                        </div>

                        <div className="relative">
                            <Image
                                src="/images/aluminum.jpg"
                                alt="Aluminum A7 Ingots"
                                width={600}
                                height={500}
                                priority
                                className="rounded-lg shadow-xl object-cover"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
                                <div className="text-xl font-bold">99.7%</div>
                                <div className="text-sm">Minimum Purity</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Copper Cathodes Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <Image
                                src="/images/copper.jpg"
                                alt="Copper Cathodes"
                                width={600}
                                height={500}
                                priority
                                className="rounded-lg shadow-xl object-cover"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-amber-500 text-slate-900 p-4 rounded-lg shadow-lg">
                                <div className="text-xl font-bold">99.99%</div>
                                <div className="text-sm">Cu Content</div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <h2 className="text-4xl font-bold text-slate-900 mb-6">
                                <span className="text-amber-600">Copper Cathodes</span> LME Grade A
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
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
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <span className="font-medium text-slate-700">Minimum Order:</span>
                                        <p className="text-slate-600">500 MT</p>
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

                            <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-3">Request Copper Quote</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hard Coking Coal Section */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-slate-900 mb-6">
                                <span className="text-slate-700">Hard Coking Coal</span> Premium Grade
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Premium metallurgical coal essential for steel production and industrial processes. Our hard coking coal
                                is sourced from high-quality African mines, offering excellent coking properties and consistent quality
                                for steel manufacturers worldwide.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-white p-6 rounded-lg shadow-sm">
                                    <h4 className="font-semibold text-slate-900 mb-3">Technical Specifications</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>• Volatile Matter: 20-26%</li>
                                        <li>• Ash Content: &lt;10%</li>
                                        <li>• Moisture: &lt;8%</li>
                                        <li>• Size: 0-50mm (customizable)</li>
                                    </ul>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-sm">
                                    <h4 className="font-semibold text-slate-900 mb-3">Applications</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>• Steel production</li>
                                        <li>• Coke manufacturing</li>
                                        <li>• Industrial heating</li>
                                        <li>• Metallurgical processes</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-slate-100 p-6 rounded-lg mb-6">
                                <h4 className="font-semibold text-slate-900 mb-3">Trading Terms</h4>
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <span className="font-medium text-slate-700">Minimum Order:</span>
                                        <p className="text-slate-600">50,000 MT</p>
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

                            <Button className="bg-slate-700 hover:bg-slate-800 text-white px-8 py-3">Request Coal Quote</Button>
                        </div>

                        <div className="relative">
                            <Image
                                src="/images/coal.jpg"
                                alt="Hard Coking Coal"
                                width={600}
                                height={500}
                                priority
                                className="rounded-lg shadow-xl object-cover"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-slate-700 text-white p-4 rounded-lg shadow-lg">
                                <div className="text-xl font-bold">&lt;10%</div>
                                <div className="text-sm">Ash Content</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quality Assurance Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Quality Assurance</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Every shipment comes with comprehensive quality documentation and international certifications
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center p-6">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="h-8 w-8 text-blue-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">Third-Party Inspection</h3>
                            <p className="text-slate-600 text-sm">Independent quality verification by international inspectors</p>
                        </div>

                        <div className="text-center p-6">
                            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Award className="h-8 w-8 text-amber-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">International Standards</h3>
                            <p className="text-slate-600 text-sm">Compliance with LME, ASTM, and ISO quality standards</p>
                        </div>

                        <div className="text-center p-6">
                            <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Download className="h-8 w-8 text-slate-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">Complete Documentation</h3>
                            <p className="text-slate-600 text-sm">Certificates of origin, analysis, and compliance included</p>
                        </div>

                        <div className="text-center p-6">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Truck className="h-8 w-8 text-blue-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">Secure Logistics</h3>
                            <p className="text-slate-600 text-sm">Comprehensive insurance and tracking for all shipments</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Ready to Source Premium Commodities?</h2>
                    <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                        Contact our specialists for competitive quotes on Aluminum A7, Copper Cathodes, or Hard Coking Coal.
                        Experience the reliability of African excellence delivered worldwide.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact">
                            <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-4 text-lg">
                                Get Product Quote
                            </Button>
                        </Link>
                        <Button
                            variant="outline"
                            className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg bg-transparent"
                        >
                            Download Product Specs
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
