import { NextResponse } from "next/server"

// Use Node.js runtime instead of edge
export const runtime = 'nodejs'

export async function GET() {
    try {
        // Temporary mock data since we need a reliable free API
        const mockPrices = [
            {
                symbol: "ALU",
                name: "Aluminum",
                price: 2156.5 + (Math.random() * 100 - 50), // Add some random variation
                change: 23.75,
                changePercent: 1.11,
                unit: "USD/MT",
                lastUpdate: new Date().toISOString(),
            },
            {
                symbol: "COP",
                name: "Copper",
                price: 8247.25 + (Math.random() * 200 - 100),
                change: -45.3,
                changePercent: -0.55,
                unit: "USD/MT",
                lastUpdate: new Date().toISOString(),
            },
            {
                symbol: "COAL",
                name: "Coal",
                price: 142.8 + (Math.random() * 10 - 5),
                change: 2.15,
                changePercent: 1.53,
                unit: "USD/MT",
                lastUpdate: new Date().toISOString(),
            },
        ]

        return new NextResponse(JSON.stringify(mockPrices), {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
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

        return new NextResponse(JSON.stringify(mockPrices), {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
    }
}
