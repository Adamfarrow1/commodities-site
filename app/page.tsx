"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
import {
  ChevronRight,
  TrendingUp,
  Clock,
  Shield,
  Globe,
  AlertCircle,
  BarChart3,
  Linkedin,
  Mail,
  Phone,
  DollarSign
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import LivePricing from "@/components/live-pricing"
import FloatingElements from "@/components/floating-elements"
import AnimatedSection from "@/components/animated-section"

export default function Homepage() {
  // Scroll to top instantly when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header Component */}
      <Header currentPage="/" />

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden ">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
            onLoadStart={() => console.log("Video loading started")}
            onCanPlay={() => console.log("Video can play")}
            onError={(e) => console.error("Video error:", e)}
          >
            <source src="/videos/home-video-compressed.mp4" type="video/mp4" />
            {/* Fallback image */}
            <Image
              src="/images/logo.png"
              alt="Industrial shipping port"
              fill
              className="object-cover"
              priority
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-slate-900/60"></div>
        </div>

        {/* Floating Elements */}
        <FloatingElements />

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="opacity-0 animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="block opacity-0 animate-slide-up" style={{ animationDelay: "0.2s" }}>
                Global Commodities.
              </span>
              <span className="block text-amber-400 opacity-0 animate-slide-up" style={{ animationDelay: "0.4s" }}>
                Global Quality.
              </span>
              <span className="block opacity-0 animate-slide-up" style={{ animationDelay: "0.6s" }}>
                Delivered Worldwide.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-4xl mx-auto leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: "0.8s" }}>
              Supplying Aluminum, Copper, and Coal with unmatched reliability, capacity, and CIF pricing.
            </p>

            <Link href="/contact">
              <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 opacity-0 animate-scale-up"
                style={{ animationDelay: "1.0s" }}
              >
                Request a Quote
                <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* Floating Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: "3 Years", label: "Contract Model", delay: "1.2s" },
              { value: "CIF", label: "Global Delivery", delay: "1.4s" },
              { value: "SBLC", label: "Payment Terms", delay: "1.6s" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 opacity-0 animate-scale-up"
                style={{ animationDelay: stat.delay }}
              >
                <div className="text-3xl font-bold text-amber-400 mb-2">{stat.value}</div>
                <div className="text-slate-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center hover:border-white/80 transition-colors duration-300">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Live Pricing Section - Enhanced */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <AnimatedSection animation="slide-up" delay={300}>
                {/* Main Heading and Description */}
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">Real-Time Market Prices</h2>
                  <p className="text-lg text-slate-600 mb-6">
                    Stay informed with live commodity prices. Our transparent pricing helps you
                    make informed trading decisions with real-time market intelligence.
                  </p>
                </div>
              </AnimatedSection>

              {/* Feature Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AnimatedSection animation="scale-up" delay={500}>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <Clock className="h-5 w-5 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">Live Updates</h3>
                    </div>
                    <p className="text-sm text-slate-600">
                      Real-time price feeds from global commodity exchanges
                    </p>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="scale-up" delay={700}>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-amber-100 p-2 rounded-lg">
                        <TrendingUp className="h-5 w-5 text-amber-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">Market Trends</h3>
                    </div>
                    <p className="text-sm text-slate-600">
                      Track price movements and percentage changes to identify market opportunities
                    </p>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="scale-up" delay={900}>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-slate-100 p-2 rounded-lg">
                        <Globe className="h-5 w-5 text-slate-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">Global Rates</h3>
                    </div>
                    <p className="text-sm text-slate-600">
                      International pricing with CIF calculations for major ports worldwide
                    </p>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="scale-up" delay={1100}>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-green-100 p-2 rounded-lg">
                        <Shield className="h-5 w-5 text-green-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">Verified Data</h3>
                    </div>
                    <p className="text-sm text-slate-600">
                      Sourced from Trading Economics and verified through multiple market feeds
                    </p>
                  </div>
                </AnimatedSection>
              </div>

              <AnimatedSection animation="fade-in" delay={1300}>
                {/* Market Insights */}
                <div className="bg-gradient-to-r from-blue-50 to-amber-50 p-6 rounded-lg border border-blue-200">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <BarChart3 className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Market Intelligence</h3>
                      <p className="text-sm text-slate-600 mb-4">
                        Our pricing data helps you understand market volatility and make strategic trading decisions.
                        Monitor daily fluctuations and identify optimal entry points for your commodity purchases.
                      </p>
                      <div className="flex flex-wrap gap-4 text-xs text-slate-500">
                        <span className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span>Markets Open</span>
                        </span>
                        <span>• Historical data available</span>
                        <span>• Price alerts coming soon</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="scale-up" delay={1500}>
                {/* Quick Actions */}
                <div className="flex justify-center">
                  <Link href="/contact" className="flex-1 max-w-sm">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 transition-all duration-300 hover:scale-105">
                      <AlertCircle className="h-4 w-4 mr-2" />
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection animation="slide-up" delay={500}>
              <LivePricing />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Products Section - Enhanced */}
      <section id="products" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slide-up" delay={300} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Core Products</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              High-quality commodities sourced from Africa, delivered globally with unmatched reliability and
              competitive CIF pricing.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Aluminum A7 */}
            <AnimatedSection animation="scale-up" delay={500}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-105 group">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Image
                    src="/images/aluminum.jpeg"
                    alt="Aluminum A7"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    Aluminum A7
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Premium grade aluminum ingots with 99.7% purity, perfect for industrial applications and
                    manufacturing.
                  </p>
                  <ul className="text-sm text-slate-500 space-y-1">
                    <li className="transform transition-transform duration-300 hover:translate-x-2">
                      • Purity: 99.7% minimum
                    </li>
                    <li className="transform transition-transform duration-300 hover:translate-x-2">
                      • Weight: 20-25kg per ingot
                    </li>
                    <li className="transform transition-transform duration-300 hover:translate-x-2">
                      • Origin: African sources
                    </li>
                    <li className="transform transition-transform duration-300 hover:translate-x-2">
                      • Delivery: CIF worldwide
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            {/* Copper Cathodes */}
            <AnimatedSection animation="scale-up" delay={700}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-105 group">
                <div className="h-48 bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Image
                    src="/images/copper.jpeg"
                    alt="Copper Cathodes"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                    Copper Cathodes
                  </h3>
                  <p className="text-slate-600 mb-4">
                    High-grade copper cathodes meeting LME standards, ideal for electrical and construction industries.
                  </p>
                  <ul className="text-sm text-slate-500 space-y-1">
                    <li className="transform transition-transform duration-300 hover:translate-x-2">
                      • Purity: 99.99% Cu minimum
                    </li>
                    <li className="transform transition-transform duration-300 hover:translate-x-2">
                      • Weight: 125kg per cathode
                    </li>
                    <li className="transform transition-transform duration-300 hover:translate-x-2">
                      • Standard: LME Grade A
                    </li>
                    <li className="transform transition-transform duration-300 hover:translate-x-2">
                      • Packaging: Export standard
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            {/* Hard Coking Coal */}
            <AnimatedSection animation="scale-up" delay={900}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-105 group">
                <div className="h-48 bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-500 to-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Image
                    src="/images/coal.jpeg"
                    alt="Hard Coking Coal"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-slate-600 transition-colors duration-300">
                    Hard Coking Coal
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Premium metallurgical coal essential for steel production, sourced from high-quality African mines.
                  </p>
                  <ul className="text-sm text-slate-500 space-y-1">
                    <li className="transform transition-transform duration-300 hover:translate-x-2">
                      • Volatile Matter: 20-26%
                    </li>
                    <li className="transform transition-transform duration-300 hover:translate-x-2">
                      • Ash Content: &lt;10%
                    </li>
                    <li className="transform transition-transform duration-300 hover:translate-x-2">
                      • Moisture: &lt;8%
                    </li>
                    <li className="transform transition-transform duration-300 hover:translate-x-2">• Size: 0-50mm</li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-up" delay={300}>
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">
                  Trusted Global <span className="text-amber-500">Commodities Partner</span>
                </h2>
                <AnimatedSection animation="fade-in" delay={500}>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    With deep expertise in African commodity markets and global trade networks, we bridge the gap between
                    high-quality resources and international demand. Our commitment to reliability, transparency, and
                    competitive pricing has made us a preferred partner for governments, industrial buyers, and suppliers
                    worldwide.
                  </p>
                </AnimatedSection>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <AnimatedSection animation="scale-up" delay={700}>
                    <div>
                      <div className="text-3xl font-bold text-blue-600 mb-2">500K+</div>
                      <div className="text-slate-600">Tons Traded Annually</div>
                    </div>
                  </AnimatedSection>
                  <AnimatedSection animation="scale-up" delay={900}>
                    <div>
                      <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                      <div className="text-slate-600">Countries Served</div>
                    </div>
                  </AnimatedSection>
                  <AnimatedSection animation="scale-up" delay={1100}>
                    <div>
                      <div className="text-3xl font-bold text-blue-600 mb-2">99.8%</div>
                      <div className="text-slate-600">On-Time Delivery</div>
                    </div>
                  </AnimatedSection>
                  <AnimatedSection animation="scale-up" delay={1300}>
                    <div>
                      <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                      <div className="text-slate-600">Support Available</div>
                    </div>
                  </AnimatedSection>
                </div>
                <AnimatedSection animation="scale-up" delay={1500}>
                  <Link href="/about">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">Learn More About Us</Button>
                  </Link>
                </AnimatedSection>
              </div>
            </AnimatedSection>
            <div className="relative">
              <AnimatedSection animation="slide-up" delay={500}>
                <Image
                  src="/images/global-image-home.jpg"
                  alt="Global trading operations"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-xl"
                />
              </AnimatedSection>
              <AnimatedSection animation="scale-up" delay={700}>
                <div className="absolute -bottom-6 -left-6 bg-amber-500 text-white p-6 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold">15+ Years</div>
                  <div className="text-sm">Industry Experience</div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Trade Process Section */}
      <section id="process" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedSection animation="slide-up" delay={300}>
              <h2 className="text-4xl font-bold mb-4">Our Trade Process</h2>
            </AnimatedSection>
            <AnimatedSection animation="fade-in" delay={500}>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                A streamlined, transparent process designed for high-volume international commodity trading
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <AnimatedSection animation="scale-up" delay={700}>
              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Initial Inquiry</h3>
                <p className="text-slate-300">
                  Submit your Letter of Intent (LOI) with quantity requirements and destination port details.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="scale-up" delay={900}>
              <div className="text-center">
                <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Quote & Terms</h3>
                <p className="text-slate-300">
                  Receive competitive CIF pricing with 3-year contract terms and SBLC payment structure.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="scale-up" delay={1100}>
              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Contract & Payment</h3>
                <p className="text-slate-300">
                  Finalize agreements with mutual confirmation and establish SBLC payment terms.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="scale-up" delay={1300}>
              <div className="text-center">
                <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Delivery</h3>
                <p className="text-slate-300">
                  CIF delivery to your specified port with full documentation and quality certificates.
                </p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="scale-up" delay={1500} className="mt-16 text-center">
            <Link href="/contact">
              <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-3">
                Start Your Trade Process
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedSection animation="slide-up" delay={300}>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose Our Platform</h2>
            </AnimatedSection>
            <AnimatedSection animation="fade-in" delay={500}>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Experience unparalleled service in the global commodities market
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection animation="scale-up" delay={700}>
              <div className="text-center bg-slate-50 p-8 rounded-lg">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Competitive Pricing</h3>
                <p className="text-slate-600">
                  Get the best market rates with our extensive network of suppliers and direct manufacturer relationships.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="scale-up" delay={900}>
              <div className="text-center bg-slate-50 p-8 rounded-lg">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Quality Assurance</h3>
                <p className="text-slate-600">
                  Rigorous testing and certification processes ensure all commodities meet international standards.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="scale-up" delay={1100}>
              <div className="text-center bg-slate-50 p-8 rounded-lg">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Global Reach</h3>
                <p className="text-slate-600">
                  Worldwide shipping capabilities with established logistics networks across all major ports.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="slide-up" delay={300}>
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Trading?</h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-in" delay={500}>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Join hundreds of satisfied clients who trust us for their commodity trading needs. Get your competitive
              quote today and experience the difference of working with industry leaders.
            </p>
          </AnimatedSection>
          <div className="flex justify-center">
            <AnimatedSection animation="scale-up" delay={700}>
              <Link href="/contact">
                <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-4 text-lg">
                  Request Quote Now
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Company Description */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-amber-400">About Our Company</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                We are a global commodities supplier specializing in high-volume exports of Aluminum A7, Copper
                Cathodes, and Hard Coking Coal. With a 3-year contract model, SBLC payment terms, and CIF delivery to
                any port, we bring trust and scale to international trade.
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-amber-400">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span className="text-slate-300">jason@global-commodity-hub.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <span className="text-slate-300">+1 (814) 787-2149</span>
                </div>
                {/* <div className="flex items-center space-x-3">
                  <Linkedin className="h-5 w-5 text-blue-400" />
                  <Link href="#" className="text-slate-300 hover:text-blue-400 transition-colors">
                    LinkedIn Profile
                  </Link>
                </div> */}
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div className="border-t border-slate-700 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex space-x-6">

              </div>
              <div className="text-slate-400 text-sm text-center md:text-right">
                <p>All transactions are subject to mutual confirmation and valid LOI.</p>
                <p className="mt-1">© {new Date().getFullYear()} Company Name. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
