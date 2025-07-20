"use client"

import { Button } from "@/components/ui/button"
import { Mail, Phone, Linkedin, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContactPage() {
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
            <Header currentPage="/contact" />

            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-r from-slate-800 to-slate-900 overflow-hidden">
                {/* Animated Contact Flow Background */}
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
                        <span className="text-white text-sm font-medium">Get In Touch</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 hero-element animate-slide-in-up">
                        Contact Us
                    </h1>
                    <p
                        className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12 hero-element animate-fade-in-up"
                        style={{ animationDelay: "0.3s" }}
                    >
                        Ready to start trading? Get in touch with our commodity specialists for competitive quotes and expert
                        guidance.
                    </p>

                    {/* Contact Methods Flow */}
                    <div className="flex justify-center items-center space-x-4 md:space-x-8">
                        {[
                            { method: "Email", icon: <Mail className="h-4 w-4" /> },
                            { method: "Phone", icon: <Phone className="h-4 w-4" /> },
                            { method: "Visit", icon: <MapPin className="h-4 w-4" /> },
                            { method: "24/7", icon: <Clock className="h-4 w-4" /> },
                        ].map((contact, index) => (
                            <div
                                key={contact.method}
                                className="flex items-center opacity-100 transform translate-y-0"
                                style={{
                                    animation: `fadeIn 1s ease-out forwards`,
                                    animationDelay: `${0.5 + index * 0.2}s`,
                                    opacity: 0,
                                }}
                            >
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 mb-2">
                                        {contact.icon}
                                    </div>
                                    <div className="text-slate-300 text-xs">{contact.method}</div>
                                </div>
                                {index < 3 && <div className="w-8 h-0.5 bg-white/30 mx-2 hidden md:block"></div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Request a Quote</h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
                                            First Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            required
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">
                                            Last Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            required
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                                        Company Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        required
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="commodity" className="block text-sm font-medium text-slate-700 mb-2">
                                        Commodity of Interest *
                                    </label>
                                    <select
                                        id="commodity"
                                        name="commodity"
                                        required
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                    >
                                        <option value="">Select a commodity</option>
                                        <option value="aluminum">Aluminum A7</option>
                                        <option value="copper">Copper Cathodes</option>
                                        <option value="coal">Hard Coking Coal</option>
                                        <option value="multiple">Multiple Commodities</option>
                                    </select>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="quantity" className="block text-sm font-medium text-slate-700 mb-2">
                                            Monthly Quantity (MT)
                                        </label>
                                        <input
                                            type="number"
                                            id="quantity"
                                            name="quantity"
                                            placeholder="e.g., 1000"
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="destination" className="block text-sm font-medium text-slate-700 mb-2">
                                            Destination Port
                                        </label>
                                        <input
                                            type="text"
                                            id="destination"
                                            name="destination"
                                            placeholder="e.g., Shanghai, China"
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                                        Additional Requirements
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        placeholder="Please provide any specific requirements, timeline, or questions..."
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                    ></textarea>
                                </div>

                                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                                    Submit Quote Request
                                </Button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Get in Touch</h2>

                            <div className="space-y-8">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-blue-100 p-3 rounded-lg">
                                        <Mail className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Email Us</h3>
                                        <p className="text-slate-600 mb-1">contact@company.com</p>
                                        <p className="text-slate-600">trading@company.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-amber-100 p-3 rounded-lg">
                                        <Phone className="h-6 w-6 text-amber-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Call Us</h3>
                                        <p className="text-slate-600 mb-1">+1 (555) 123-4567</p>
                                        <p className="text-slate-600">+1 (555) 123-4568 (Trading Desk)</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-slate-100 p-3 rounded-lg">
                                        <MapPin className="h-6 w-6 text-slate-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Visit Us</h3>
                                        <p className="text-slate-600">123 Trade Center Plaza</p>
                                        <p className="text-slate-600">International District</p>
                                        <p className="text-slate-600">New York, NY 10001</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-blue-100 p-3 rounded-lg">
                                        <Clock className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Business Hours</h3>
                                        <p className="text-slate-600 mb-1">Monday - Friday: 8:00 AM - 6:00 PM EST</p>
                                        <p className="text-slate-600 mb-1">Saturday: 9:00 AM - 2:00 PM EST</p>
                                        <p className="text-slate-600">24/7 Emergency Trading Support</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-blue-100 p-3 rounded-lg">
                                        <Linkedin className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Connect With Us</h3>
                                        <Link href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
                                            LinkedIn Company Page
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Stats */}
                            <div className="mt-12 bg-slate-50 p-6 rounded-xl">
                                <h3 className="text-lg font-semibold text-slate-900 mb-4">Why Choose Us</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-blue-600 mb-1">24hrs</div>
                                        <div className="text-sm text-slate-600">Response Time</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-blue-600 mb-1">50+</div>
                                        <div className="text-sm text-slate-600">Countries Served</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-blue-600 mb-1">99.8%</div>
                                        <div className="text-sm text-slate-600">On-Time Delivery</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-blue-600 mb-1">15+</div>
                                        <div className="text-sm text-slate-600">Years Experience</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
