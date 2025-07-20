"use client"

import { useState, useEffect } from "react"
import { TrendingUp, TrendingDown, Minus, RefreshCw } from "lucide-react"
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

    // Mock data for demonstration - replace with actual API calls
    const mockPrices: CommodityPrice[] = [
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
            symbol: "COP",
            name: "Copper",
            price: 8247.25,
            change: -45.3,
            changePercent: -0.55,
            unit: "USD/MT",
            lastUpdate: new Date().toISOString(),
        },
        {
            symbol: "COAL",
            name: "Coal",
            price: 142.8,
            change: 2.15,
            changePercent: 1.53,
            unit: "USD/MT",
            lastUpdate: new Date().toISOString(),
        },
    ]

    const fetchPrices = async () => {
        setLoading(true)
        setError(null)

        try {
            // Replace this with actual Trading Economics API calls
            // const response = await fetch('/api/commodity-prices')
            // const data = await response.json()

            // Simulate API delay
            await new Promise((resolve) => setTimeout(resolve, 1000))

            // For now, use mock data with slight random variations
            const updatedPrices = mockPrices.map((price) => ({
                ...price,
                price: price.price + (Math.random() - 0.5) * 50,
                change: (Math.random() - 0.5) * 100,
                changePercent: (Math.random() - 0.5) * 4,
                lastUpdate: new Date().toISOString(),
            }))

            // Track which items were updated for animation
            const newUpdatedItems = new Set<string>()
            updatedPrices.forEach((newPrice) => {
                const oldPrice = prices.find((p) => p.symbol === newPrice.symbol)
                if (oldPrice && oldPrice.price !== newPrice.price) {
                    newUpdatedItems.add(newPrice.symbol)
                }
            })

            setUpdatedItems(newUpdatedItems)
            setPrices(updatedPrices)
            setLastRefresh(new Date())

            // Clear update indicators after animation
            // setTimeout(() => setUpdatedItems(new Set()), 2000)
        } catch (err) {
            setError("Failed to fetch commodity prices")
            console.error("Error fetching prices:", err)
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

    const formatChange = (change: number) => {
        const sign = change >= 0 ? "+" : ""
        return `${sign}${new Intl.NumberFormat("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(change)}`
    }

    const formatPercent = (percent: number) => {
        const sign = percent >= 0 ? "+" : ""
        return `${sign}${percent.toFixed(2)}%`
    }

    const getTrendIcon = (change: number) => {
        if (change > 0) return <TrendingUp className="h-4 w-4 text-green-500" />
        if (change < 0) return <TrendingDown className="h-4 w-4 text-red-500" />
        return <Minus className="h-4 w-4 text-slate-400" />
    }

    const getTrendColor = (change: number) => {
        if (change > 0) return "text-green-600"
        if (change < 0) return "text-red-600"
        return "text-slate-600"
    }

    const getGradientColor = (symbol: string) => {
        switch (symbol) {
            case "ALU":
                return "from-blue-500 to-blue-600"
            case "COP":
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
                    {prices.map((commodity, index) => (
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
                                <div className="flex items-center space-x-2">
                                    <span className="text-lg font-bold text-slate-900">
                                        $
                                        <AnimatedCounter value={commodity.price} duration={800} decimals={2} className="" />
                                    </span>
                                    <div className={`transform transition-all duration-300`}>{getTrendIcon(commodity.change)}</div>
                                </div>
                                <div className={`text-sm ${getTrendColor(commodity.change)} transition-colors duration-300`}>
                                    <span>
                                        <AnimatedCounter
                                            value={commodity.change}
                                            duration={800}
                                            decimals={2}
                                            prefix={commodity.change >= 0 ? "+" : ""}
                                        />
                                    </span>
                                    <span className="ml-1">
                                        (
                                        <AnimatedCounter
                                            value={commodity.changePercent}
                                            duration={800}
                                            decimals={2}
                                            prefix={commodity.changePercent >= 0 ? "+" : ""}
                                            suffix="%"
                                        />
                                        )
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div className="mt-6 pt-4 border-t border-slate-200 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="animate-pulse">Prices updated every 30 seconds</span>
                    <span>Source: Trading Economics</span>
                </div>
            </div>
        </div>
    )
}
