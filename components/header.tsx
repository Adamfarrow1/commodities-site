"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Mail, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface HeaderProps {
    currentPage?: string
}

export default function Header({ currentPage = "/" }: HeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

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
        <>
            {/* Contact Banner */}
            <div className="bg-slate-900 text-white py-2 px-4">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
                    <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6">
                        <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4 text-blue-400" />
                            <span>contact@company.com</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4 text-amber-400" />
                            <span>+1 (814) 787-2149</span>
                        </div>
                    </div>
                    <div className="hidden sm:flex items-center space-x-4 text-slate-300">
                        <span>Mon-Fri: 8AM-6PM EST</span>
                        <span className="text-amber-400">•</span>
                        <span>24/7 Emergency Support</span>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-24">
                        {/* Logo */}
                        <div className="flex items-center">
                            <Link href="/" onClick={handleNavClick} className="flex items-center">
                                <Image
                                    src="/images/logo.png"
                                    alt="Company Logo"
                                    width={100}
                                    height={150}
                                    className="w-auto h-21 object-contain max-w-none"
                                    priority
                                />
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={handleNavClick}
                                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${item.href === currentPage ? "text-blue-600 font-semibold" : "text-slate-700 hover:text-blue-600"
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            ))}

                            {/* Prominent Contact Button */}
                            <Link href="/contact" onClick={handleNavClick}>
                                <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-6 py-2 ml-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                    Get Quote
                                </Button>
                            </Link>
                        </nav>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-700">
                                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </Button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <div className="md:hidden border-t border-slate-200">
                            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${item.href === currentPage ? "text-blue-600 font-semibold" : "text-slate-700 hover:text-blue-600"
                                            }`}
                                        onClick={handleNavClick}
                                    >
                                        {item.name}
                                    </Link>
                                ))}

                                {/* Mobile Contact Button */}
                                <div className="px-3 py-2">
                                    <Link href="/contact" onClick={handleNavClick}>
                                        <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold w-full py-3 shadow-lg">
                                            Get Quote
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </header>
        </>
    )
}
