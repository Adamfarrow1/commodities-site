import { NextResponse } from "next/server"

// Use Node.js runtime instead of edge
export const runtime = 'nodejs'

const METALS_API_KEY = process.env.METALS_API_KEY || "0gM4hvh3v46Wm5q7yt5fyImyb99dkuztm1pixtldy8fltdat267pm3zin"
const METALS_API_BASE_URL = "https://metals-api.com/api/latest"

export async function GET() {
    try {


        // Fetch real-time data from Metals API
        const response = await fetch(
            `${METALS_API_BASE_URL}?access_key=${METALS_API_KEY}&base=USD&symbols=XCU,ALU`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                next: { revalidate: 3600 } // Cache for 1 hour
            }
        )



        if (!response.ok) {
            console.error(`HTTP error! status: ${response.status}`)
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()


        if (!data.success) {
            console.error('API request failed:', data.error)
            throw new Error('API request failed: ' + (data.error?.info || 'Unknown error'))
        }

        // Transform the API response to match our expected format
        const prices = []

        if (data.rates && data.rates.ALU) {
            // Convert from ounces to metric tons (1 MT = 35,274 oz)
            const aluPricePerMT = (1 / data.rates.ALU) * 35274
            prices.push({
                symbol: "ALU",
                name: "Aluminum",
                price: Math.round(aluPricePerMT * 100) / 100,
                change: 0, // API doesn't provide change data
                changePercent: 0,
                unit: "USD/MT",
                lastUpdate: data.timestamp ? new Date(data.timestamp * 1000).toISOString() : new Date().toISOString(),
            })
        }

        if (data.rates && data.rates.XCU) {
            // Convert from ounces to metric tons (1 MT = 35,274 oz)
            const xcuPricePerMT = (1 / data.rates.XCU) * 35274
            prices.push({
                symbol: "XCU",
                name: "Copper",
                price: Math.round(xcuPricePerMT * 100) / 100,
                change: 0, // API doesn't provide change data
                changePercent: 0,
                unit: "USD/MT",
                lastUpdate: data.timestamp ? new Date(data.timestamp * 1000).toISOString() : new Date().toISOString(),
            })
        }

        return new NextResponse(JSON.stringify(prices), {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
    } catch (error) {
        console.error("Error fetching commodity prices:", error)

        // Return mock data as fallback with correct symbols
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
                symbol: "XCU",
                name: "Copper",
                price: 8247.25,
                change: -45.3,
                changePercent: -0.55,
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
