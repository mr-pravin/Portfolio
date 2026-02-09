"use client";

import { Suspense, useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import Spline to reduce initial bundle size
const Spline = dynamic(() => import("@splinetool/react-spline"), {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-background" />,
});

interface Background3DProps {
    className?: string;
}

export function Background3D({ className = "" }: Background3DProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        // Disable on mobile for performance
        const isMobile = window.innerWidth < 768;

        // Only render if conditions are met
        if (!prefersReducedMotion && !isMobile) {
            setShouldRender(true);
        }
    }, []);

    // Show fallback gradient if conditions aren't met or error occurred
    if (!shouldRender || hasError) {
        return (
            <div className={`absolute inset-0 ${className}`}>
                {/* Fallback cosmic gradient for mobile/reduced-motion */}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-950/30 to-background" />
            </div>
        );
    }

    return (
        <div className={`absolute inset-0 ${className}`}>
            <Suspense
                fallback={
                    <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-background" />
                }
            >
                <div
                    className="absolute inset-0 transition-opacity duration-1000"
                    style={{ opacity: isLoaded ? 0.4 : 0 }}
                >
                    <Spline
                        scene="https://prod.spline.design/dFB3lhSqmfx60XNv/scene.splinecode"
                        onLoad={() => {
                            console.log("Spline scene loaded successfully");
                            setIsLoaded(true);
                        }}
                        onError={(error: any) => {
                            console.warn("Spline scene failed to load, using fallback:", error);
                            setHasError(true);
                        }}
                        style={{
                            width: "100%",
                            height: "100%",
                            pointerEvents: "none", // Non-interactive background
                        }}
                    />
                </div>
            </Suspense>
        </div>
    );
}
