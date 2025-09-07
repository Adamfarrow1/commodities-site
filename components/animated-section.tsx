'use client';

import React from 'react';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    animation?: 'fade-in' | 'slide-up' | 'slide-in-left' | 'slide-in-right' | 'scale-up';
    delay?: number;
    threshold?: number;
}

export default function AnimatedSection({
    children,
    className,
    animation = 'fade-in',
    delay = 0,
    threshold = 0.1,
    ...props
}: AnimatedSectionProps) {
    const [elementRef, isInView] = useInView({ threshold });

    let classes = 'opacity-0';
    if (isInView) {
        switch (animation) {
            case 'fade-in':
                classes = 'opacity-100';
                break;
            case 'slide-up':
                classes = 'opacity-100 translate-y-0';
                break;
            case 'slide-in-left':
                classes = 'opacity-100 translate-x-0';
                break;
            case 'slide-in-right':
                classes = 'opacity-100 translate-x-0';
                break;
            case 'scale-up':
                classes = 'opacity-100 scale-100';
                break;
        }
    } else {
        switch (animation) {
            case 'slide-up':
                classes = 'opacity-0 translate-y-16';
                break;
            case 'slide-in-left':
                classes = 'opacity-0 -translate-x-16';
                break;
            case 'slide-in-right':
                classes = 'opacity-0 translate-x-16';
                break;
            case 'scale-up':
                classes = 'opacity-0 scale-90';
                break;
        }
    }

    return (
        <div
            ref={elementRef}
            className={cn(
                'transition-all duration-1000 ease-out will-change-transform will-change-opacity',
                classes,
                className
            )}
            style={{
                transitionDelay: `${delay}ms`
            }}
            {...props}
        >
            {children}
        </div>
    );
}
