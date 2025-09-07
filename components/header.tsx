"use client"

import { useState, useRef, useEffect } from "react"
import { Menu, X, Mail, Phone, ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface HeaderProps {
    currentPage?: string
}

export default function Header({ currentPage = "/" }: HeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isProductsOpen, setIsProductsOpen] = useState(false)
    const [isServicesOpen, setIsServicesOpen] = useState(false)
    const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)

    const navItems = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        {
            name: "Products",
            href: "/products",
            hasDropdown: true,
            dropdownItems: [
                { name: "All Products", href: "/products" },
                { name: "Aluminum A7 Ingots", href: "/products/aluminum" },
                { name: "Copper Cathodes", href: "/products/copper" },
                { name: "Hard Coking Coal", href: "/products/coal" },
            ],
        },
        {
            name: "Services",
            href: "/services",
            hasDropdown: true,
            dropdownItems: [
                { name: "All Services", href: "/services" },
                { name: "Commodity Trading", href: "/services/commodity-trading" },
                { name: "Supply Chain Management", href: "/services/supply-chain" },
                { name: "Quality Assurance", href: "/services/quality-assurance" },
                { name: "Logistics & Shipping", href: "/services/logistics" },
            ],
        },
        { name: "Trade Process", href: "/trade-process" },
        { name: "FAQs", href: "/faqs" },
        { name: "Contact", href: "/contact" },
    ]

    const handleNavClick = () => {
        setIsMenuOpen(false)
        setIsProductsOpen(false)
        setIsServicesOpen(false)
    }

    const handleProductsDropdownEnter = () => {
        if (dropdownTimeoutRef.current) {
            clearTimeout(dropdownTimeoutRef.current)
        }
        setIsProductsOpen(true)
        setIsServicesOpen(false)
    }

    const handleProductsDropdownLeave = () => {
        dropdownTimeoutRef.current = setTimeout(() => {
            setIsProductsOpen(false)
        }, 150)
    }

    const handleServicesDropdownEnter = () => {
        if (dropdownTimeoutRef.current) {
            clearTimeout(dropdownTimeoutRef.current)
        }
        setIsServicesOpen(true)
        setIsProductsOpen(false)
    }

    const handleServicesDropdownLeave = () => {
        dropdownTimeoutRef.current = setTimeout(() => {
            setIsServicesOpen(false)
        }, 150)
    }

    useEffect(() => {
        return () => {
            if (dropdownTimeoutRef.current) {
                clearTimeout(dropdownTimeoutRef.current)
            }
        }
    }, [])

    return (
        <>
            {/* Contact Banner */}
            <div className="bg-slate-900 text-white py-2 px-4">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
                    <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6">
                        <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4 text-blue-400" />
                            <span>jason@global-commodity-hub.com</span>
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
                                <div key={item.name} className="relative">
                                    {item.hasDropdown ? (
                                        <div
                                            className="relative"
                                            onMouseEnter={
                                                item.name === "Products" ? handleProductsDropdownEnter : handleServicesDropdownEnter
                                            }
                                            onMouseLeave={
                                                item.name === "Products" ? handleProductsDropdownLeave : handleServicesDropdownLeave
                                            }
                                        >
                                            <button
                                                className={`flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200 ${currentPage?.startsWith(item.href)
                                                    ? "text-blue-600 font-semibold"
                                                    : "text-slate-700 hover:text-blue-600"
                                                    }`}
                                            >
                                                {item.name}
                                                <ChevronDown className="ml-1 h-4 w-4" />
                                            </button>

                                            {/* Dropdown Menu */}
                                            {((item.name === "Products" && isProductsOpen) ||
                                                (item.name === "Services" && isServicesOpen)) && (
                                                    <div className="absolute top-full left-0 mt-0 w-56 bg-white rounded-lg shadow-lg border border-slate-200 py-2 z-50">
                                                        {item.dropdownItems?.map((dropdownItem) => (
                                                            <Link
                                                                key={dropdownItem.name}
                                                                href={dropdownItem.href}
                                                                onClick={handleNavClick}
                                                                className={`block px-4 py-2 text-sm transition-colors duration-200 ${currentPage === dropdownItem.href
                                                                    ? "text-blue-600 bg-blue-50 font-medium"
                                                                    : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                                                                    }`}
                                                            >
                                                                {dropdownItem.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                )}
                                        </div>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            onClick={handleNavClick}
                                            className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${item.href === currentPage ? "text-blue-600 font-semibold" : "text-slate-700 hover:text-blue-600"
                                                }`}
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </div>
                            ))}

                            {/* Prominent Contact Button */}
                            <Link href="/contact" onClick={handleNavClick}>
                                <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-6 py-2 ml-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-md">
                                    Get Quote
                                </button>
                            </Link>
                        </nav>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors duration-200"
                            >
                                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <div className="md:hidden border-t border-slate-200">
                            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
                                {navItems.map((item) => (
                                    <div key={item.name}>
                                        {item.hasDropdown ? (
                                            <>
                                                <button
                                                    onClick={() => {
                                                        if (item.name === "Products") {
                                                            setIsProductsOpen(!isProductsOpen)
                                                            setIsServicesOpen(false)
                                                        } else if (item.name === "Services") {
                                                            setIsServicesOpen(!isServicesOpen)
                                                            setIsProductsOpen(false)
                                                        }
                                                    }}
                                                    className={`flex items-center justify-between w-full px-3 py-2 text-base font-medium transition-colors duration-200 ${currentPage?.startsWith(item.href)
                                                        ? "text-blue-600 font-semibold"
                                                        : "text-slate-700 hover:text-blue-600"
                                                        }`}
                                                >
                                                    {item.name}
                                                    <ChevronDown
                                                        className={`h-4 w-4 transition-transform ${(item.name === "Products" && isProductsOpen) ||
                                                            (item.name === "Services" && isServicesOpen)
                                                            ? "rotate-180"
                                                            : ""
                                                            }`}
                                                    />
                                                </button>
                                                {((item.name === "Products" && isProductsOpen) ||
                                                    (item.name === "Services" && isServicesOpen)) && (
                                                        <div className="pl-4 space-y-1">
                                                            {item.dropdownItems?.map((dropdownItem) => (
                                                                <Link
                                                                    key={dropdownItem.name}
                                                                    href={dropdownItem.href}
                                                                    className={`block px-3 py-2 text-sm transition-colors duration-200 ${currentPage === dropdownItem.href
                                                                        ? "text-blue-600 font-semibold"
                                                                        : "text-slate-600 hover:text-blue-600"
                                                                        }`}
                                                                    onClick={handleNavClick}
                                                                >
                                                                    {dropdownItem.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    )}
                                            </>
                                        ) : (
                                            <Link
                                                href={item.href}
                                                className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${item.href === currentPage
                                                    ? "text-blue-600 font-semibold"
                                                    : "text-slate-700 hover:text-blue-600"
                                                    }`}
                                                onClick={handleNavClick}
                                            >
                                                {item.name}
                                            </Link>
                                        )}
                                    </div>
                                ))}

                                {/* Mobile Contact Button */}
                                <div className="px-3 py-2">
                                    <Link href="/contact" onClick={handleNavClick}>
                                        <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold w-full py-3 shadow-lg rounded-md transition-colors duration-200">
                                            Get Quote
                                        </button>
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
