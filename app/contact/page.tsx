"use client"

import { Button } from "@/components/ui/button"
import { Mail, Phone, Linkedin, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AnimatedSection from "@/components/animated-section"

export default function ContactPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null;
        message: string;
    }>({ type: null, message: '' })
    const formRef = useRef<HTMLFormElement>(null)

    // Scroll to top instantly when component mounts
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus({ type: null, message: '' })

        const formData = new FormData(e.currentTarget)
        const data = {
            firstName: formData.get('firstName') as string,
            lastName: formData.get('lastName') as string,
            company: formData.get('company') as string,
            email: formData.get('email') as string,
            phone: formData.get('phone') as string,
            commodity: formData.get('commodity') as string,
            quantity: formData.get('quantity') as string,
            destination: formData.get('destination') as string,
            message: formData.get('message') as string,
        }

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            const result = await response.json()

            if (response.ok) {
                setSubmitStatus({
                    type: 'success',
                    message: 'Thank you! Your quote request has been submitted successfully. We\'ll respond within 24 hours.'
                })
                // Reset form using ref
                if (formRef.current) {
                    formRef.current.reset()
                }
                // Clear success message after 5 seconds
                setTimeout(() => {
                    setSubmitStatus({ type: null, message: '' })
                }, 5000)
            } else {
                throw new Error(result.details || 'Failed to submit quote request')
            }
        } catch (error) {
            setSubmitStatus({
                type: 'error',
                message: error instanceof Error ? error.message : 'An unexpected error occurred. Please try again.'
            })
        } finally {
            setIsSubmitting(false)
        }
    }

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
                    <AnimatedSection animation="fade-in" delay={300}>
                        <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
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
                    </AnimatedSection>

                    <AnimatedSection animation="slide-up" delay={500}>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Contact Us
                        </h1>
                    </AnimatedSection>

                    <AnimatedSection animation="fade-in" delay={700}>
                        <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12">
                            Ready to start trading? Get in touch with our commodity specialists for competitive quotes and expert
                            guidance.
                        </p>
                    </AnimatedSection>

                    {/* Contact Methods Flow */}
                    <div className="flex justify-center items-center space-x-4 md:space-x-8">
                        {[
                            { method: "Email", icon: <Mail className="h-4 w-4" /> },
                            { method: "Phone", icon: <Phone className="h-4 w-4" /> },
                            { method: "Visit", icon: <MapPin className="h-4 w-4" /> },
                            { method: "24/7", icon: <Clock className="h-4 w-4" /> },
                        ].map((contact, index) => (
                            <AnimatedSection key={contact.method} animation="scale-up" delay={900 + index * 200}>
                                <div className="flex items-center">
                                    <div className="text-center">
                                        <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 mb-2">
                                            {contact.icon}
                                        </div>
                                        <div className="text-slate-300 text-xs">{contact.method}</div>
                                    </div>
                                    {index < 3 && <div className="w-8 h-0.5 bg-white/30 mx-2 hidden md:block"></div>}
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <AnimatedSection animation="slide-up" delay={300}>
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-6">Request a Quote</h2>

                                {/* Status Messages */}
                                {submitStatus.type && (
                                    <div className={`mb-6 p-4 rounded-lg ${submitStatus.type === 'success'
                                        ? 'bg-green-50 border border-green-200 text-green-800'
                                        : 'bg-red-50 border border-red-200 text-red-800'
                                        }`}>
                                        {submitStatus.message}
                                    </div>
                                )}

                                <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
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
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-slate-900 bg-white"
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
                                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-slate-900 bg-white"
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
                                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-slate-900 bg-white"
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
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-slate-900 bg-white"
                                        ></textarea>
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                                    </Button>
                                </form>
                            </div>
                        </AnimatedSection>

                        {/* Contact Information */}
                        <AnimatedSection animation="slide-up" delay={500}>
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-6">Get in Touch</h2>

                                <div className="space-y-8">
                                    <div className="flex items-start space-x-4">
                                        <div className="bg-blue-100 p-3 rounded-lg">
                                            <Mail className="h-6 w-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-slate-900 mb-2">Email Us</h3>
                                            <p className="text-slate-600 mb-1">jason@global-commodity-hub.com</p>

                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="bg-amber-100 p-3 rounded-lg">
                                            <Phone className="h-6 w-6 text-amber-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-slate-900 mb-2">Call Us</h3>
                                            <p className="text-slate-600 mb-1">+1 (814) 787-2149</p>
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
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
