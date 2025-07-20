"use client"

import { useEffect, useRef, useState } from "react"

interface AnimatedCounterProps {
    value: number
    duration?: number
    decimals?: number
    prefix?: string
    suffix?: string
    className?: string
}

export default function AnimatedCounter({
    value,
    duration = 1000,
    decimals = 2,
    prefix = "",
    suffix = "",
    className = "",
}: AnimatedCounterProps) {
    const [displayValue, setDisplayValue] = useState(value)

    // Keep track of the previous target value without triggering re-renders
    const previousValueRef = useRef(value)

    useEffect(() => {
        const startValue = previousValueRef.current
        const difference = value - startValue
        const startTime = performance.now()

        let frameId: number

        const step = (now: number) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)

            // Ease-out cubic
            const easedProgress = 1 - Math.pow(1 - progress, 3)
            setDisplayValue(startValue + difference * easedProgress)

            if (progress < 1) {
                frameId = requestAnimationFrame(step)
            } else {
                previousValueRef.current = value // store for the next animation
            }
        }

        frameId = requestAnimationFrame(step)

        return () => cancelAnimationFrame(frameId)
    }, [value, duration]) // 🚑 only run when the target value or duration changes

    const format = (num: number) =>
        new Intl.NumberFormat("en-US", {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
        }).format(num)

    return (
        <span className={className}>
            {prefix}
            {format(displayValue)}
            {suffix}
        </span>
    )
}
