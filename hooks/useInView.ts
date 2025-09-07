'use client';

import { useEffect, useState, useRef, RefObject } from 'react';

interface InViewOptions {
    threshold?: number;
    root?: Element | null;
    rootMargin?: string;
}

export function useInView<T extends HTMLElement = HTMLDivElement>(options: InViewOptions = {}): [RefObject<T>, boolean] {
    const elementRef = useRef<T>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true);
                // Once the element is in view, we don't need to observe it anymore
                if (elementRef.current) {
                    observer.unobserve(elementRef.current);
                }
            }
        }, {
            threshold: 0.1,
            ...options,
        });

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [options]);

    return [elementRef, isInView];
};
