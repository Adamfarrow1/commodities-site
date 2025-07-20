import { NextResponse } from "next/server"

// This would be your actual Trading Economics API integration
export async function GET() {
    try {
        // Replace with your actual Trading Economics API key and endpoints
        const API_KEY = process.env.TRADING_ECONOMICS_API_KEY

        if (!API_KEY) {
            throw new Error("Trading Economics API key not configured")
        }

        // Example API calls to Trading Economics
        // You'll need to find the correct commodity symbols and endpoints
        const commodities = [
            { symbol: "ALUMINUM", name: "Aluminum", unit: "USD/MT" },
            { symbol: "COPPER", name: "Copper", unit: "USD/MT" },
            { symbol: "COAL", name: "Coal", unit: "USD/MT" },
        ]

        const pricePromises = commodities.map(async (commodity) => {
            // Replace with actual Trading Economics API endpoint
            const response = await fetch(
                `https://api.tradingeconomics.com/markets/commodity/${commodity.symbol}?c=${API_KEY}`,
                {
                    headers: {
                        Accept: "application/json",
                    },
                    next: { revalidate: 30 }, // Cache for 30 seconds
                },
            )

            if (!response.ok) {
                throw new Error(`Failed to fetch ${commodity.name} price`)
            }

            const data = await response.json()

            // Transform the API response to match your interface
            return {
                symbol: commodity.symbol,
                name: commodity.name,
                price: data.Last || data.price || 0,
                change: data.DailyChange || data.change || 0,
                changePercent: data.DailyPercentualChange || data.changePercent || 0,
                unit: commodity.unit,
                lastUpdate: new Date().toISOString(),
            }
        })

        const prices = await Promise.all(pricePromises)

        return NextResponse.json(prices)
    } catch (error) {
        console.error("Error fetching commodity prices:", error)

        // Return mock data as fallback
        const mockPrices = [
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

        return NextResponse.json(mockPrices)
    }
}
