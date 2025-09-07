"use client"

import { useState, useEffect } from "react"
import { RefreshCw } from "lucide-react"
import AnimatedCounter from "./animated-counter"

interface CommodityPrice {
    symbol: string
    name: string
    price: number
    change: number
    changePercent: number
    unit: string
    lastUpdate: string
}

export default function LivePricing() {
    const [prices, setPrices] = useState<CommodityPrice[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [lastRefresh, setLastRefresh] = useState<Date>(new Date())
    const [updatedItems, setUpdatedItems] = useState<Set<string>>(new Set<string>())

    const fetchPrices = async () => {
        setLoading(true)
        setError(null)

        try {
            const response = await fetch('/api/commodity-prices')

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            const data = await response.json()

            // Track which items were updated for animation
            const newUpdatedItems = new Set<string>()
            data.forEach((newPrice: CommodityPrice) => {
                const oldPrice = prices.find((p) => p.symbol === newPrice.symbol)
                if (oldPrice && oldPrice.price !== newPrice.price) {
                    newUpdatedItems.add(newPrice.symbol)
                }
            })

            setUpdatedItems(newUpdatedItems)
            setPrices(data)
            setLastRefresh(new Date())

            // Clear update indicators after animation
            setTimeout(() => setUpdatedItems(new Set()), 2000)
        } catch (err) {
            setError("Failed to fetch commodity prices")
            console.error("Error fetching prices:", err)

            // Fallback to mock data on error
            const fallbackPrices: CommodityPrice[] = [
                {
                    symbol: "ALU",
                    name: "Aluminum",
                    price: 2156.5,
                    change: 23.75,
                    changePercent: 1.11,
                    unit: "USD/MT",
                    lastUpdate: new Date().toISOString(),
                },
                {
                    symbol: "XCU",
                    name: "Copper",
                    price: 8247.25,
                    change: -45.3,
                    changePercent: -0.55,
                    unit: "USD/MT",
                    lastUpdate: new Date().toISOString(),
                },
            ]
            setPrices(fallbackPrices)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchPrices()

        // Refresh prices every 30 seconds
        const interval = setInterval(fetchPrices, 30000)

        return () => clearInterval(interval)
    }, [])

    const getGradientColor = (symbol: string) => {
        switch (symbol) {
            case "ALU":
                return "from-blue-500 to-blue-600"
            case "XCU":
                return "from-amber-500 to-amber-600"
            case "COAL":
                return "from-slate-500 to-slate-600"
            default:
                return "from-blue-500 to-blue-600"
        }
    }

    if (error) {
        return (
            <div className="bg-white rounded-lg shadow-lg p-6 border border-slate-200 animate-fade-in">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-slate-900">Live Market Prices</h3>
                    <button
                        onClick={fetchPrices}
                        className="p-2 text-slate-500 hover:text-slate-700 transition-colors hover:scale-110 transform"
                        title="Refresh prices"
                    >
                        <RefreshCw className="h-4 w-4" />
                    </button>
                </div>
                <div className="text-center py-8">
                    <p className="text-red-600 mb-4 animate-bounce">{error}</p>
                    <button
                        onClick={fetchPrices}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                        Retry
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-white rounded-lg shadow-lg p-6 border border-slate-200 animate-fade-in">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-slate-900 animate-slide-in-left">Live Market Prices</h3>
                <div className="flex items-center space-x-2 animate-slide-in-right">
                    <span className="text-xs text-slate-500">Last updated: {lastRefresh.toLocaleTimeString()}</span>
                    <button
                        onClick={fetchPrices}
                        disabled={loading}
                        className="p-2 text-slate-500 hover:text-slate-700 transition-all duration-300 disabled:opacity-50 hover:scale-110 transform"
                        title="Refresh prices"
                    >
                        <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
                    </button>
                </div>
            </div>

            {loading && prices.length === 0 ? (
                <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>
                            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-slate-200 rounded-full animate-pulse"></div>
                                    <div className="space-y-2">
                                        <div className="w-20 h-4 bg-slate-200 rounded animate-pulse"></div>
                                        <div className="w-16 h-3 bg-slate-200 rounded animate-pulse"></div>
                                    </div>
                                </div>
                                <div className="text-right space-y-2">
                                    <div className="w-24 h-4 bg-slate-200 rounded animate-pulse"></div>
                                    <div className="w-16 h-3 bg-slate-200 rounded animate-pulse"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="space-y-4">
                    {prices.filter(commodity => commodity.symbol !== 'COAL').map((commodity, index) => (
                        <div
                            key={commodity.symbol}
                            className={`flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-all duration-300 hover:scale-[1.02] hover:shadow-md animate-slide-in-up`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex items-center space-x-3">
                                <div
                                    className={`w-8 h-8 bg-gradient-to-br ${getGradientColor(
                                        commodity.symbol,
                                    )} rounded-full flex items-center justify-center transform transition-transform duration-300 hover:scale-110`}
                                >
                                    <span className="text-white text-xs font-bold">{commodity.symbol.slice(0, 2)}</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900 transition-colors duration-300">{commodity.name}</h4>
                                    <p className="text-sm text-slate-500">{commodity.unit}</p>
                                </div>
                            </div>

                            <div className="text-right">
                                <span className="text-lg font-bold text-slate-900">
                                    $<AnimatedCounter value={commodity.price} duration={800} decimals={2} className="" />
                                </span>
                            </div>
                        </div>
                    ))}

                    {/* Contact for Coal pricing */}
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-slate-100 to-slate-50 rounded-lg border border-slate-200">
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-slate-500 to-slate-600 rounded-full flex items-center justify-center">
                                <span className="text-white text-xs font-bold">CO</span>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900">Hard Coking Coal</h4>
                                <p className="text-sm text-slate-500">Contact for pricing</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <a
                                href="/contact"
                                className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-300"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            )}

            <div className="mt-6 pt-4 border-t border-slate-200 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>Source: Metals API</span>
                </div>
            </div>
        </div>
    )
}
