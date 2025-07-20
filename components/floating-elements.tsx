"use client"

import { useEffect, useState } from "react"

export default function FloatingElements() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Floating particles */}
            {[...Array(20)].map((_, i) => (
                <div
                    key={i}
                    className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 10}s`,
                        animationDuration: `${8 + Math.random() * 4}s`,
                    }}
                />
            ))}

            {/* Larger floating elements */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400/60 rounded-full animate-pulse-slow" />
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-slate-300/60 rounded-full animate-ping-slow" />
            <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-blue-400/60 rounded-full animate-bounce-slow" />
            <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-amber-300/60 rounded-full animate-float" />
            <div className="absolute bottom-1/3 right-2/3 w-2 h-2 bg-blue-300/60 rounded-full animate-pulse-slow" />
        </div>
    )
}
