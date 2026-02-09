"use client";

import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 backdrop-blur-md bg-background/80">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <a
                        href="#hero"
                        className="text-xl font-bold text-foreground hover:text-primary transition-colors"
                        aria-label="PRAVIN MR - Home"
                    >
                        PRAVIN MR
                    </a>
                    <DesktopNav />
                    <MobileNav />
                </div>
            </div>
        </header>
    );
}
