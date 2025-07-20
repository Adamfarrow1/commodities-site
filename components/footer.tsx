import { Mail, Phone, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-amber-400">About Our Company</h3>
                        <p className="text-slate-300 leading-relaxed mb-6">
                            We are a global commodities supplier specializing in high-volume exports of Aluminum A7, Copper
                            Cathodes, and Hard Coking Coal. With a 3-year contract model, SBLC payment terms, and CIF delivery to
                            any port, we bring trust and scale to international trade.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-amber-400">Contact Information</h3>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-blue-400" />
                                <span className="text-slate-300">contact@company.com</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-blue-400" />
                                <span className="text-slate-300">+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Linkedin className="h-5 w-5 text-blue-400" />
                                <Link href="#" className="text-slate-300 hover:text-blue-400 transition-colors">
                                    LinkedIn Profile
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-700 mt-8 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="flex space-x-6">
                            <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                                Privacy Policy
                            </Link>
                            <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                                Terms of Trade
                            </Link>
                        </div>
                        <div className="text-slate-400 text-sm text-center md:text-right">
                            <p>All transactions are subject to mutual confirmation and valid LOI.</p>
                            <p className="mt-1">© {new Date().getFullYear()} Company Name. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
