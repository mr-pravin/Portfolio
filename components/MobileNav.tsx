"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export function MobileNav() {
    const [open, setOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        navItems.forEach(({ href }) => {
            const element = document.querySelector(href);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const handleClick = (href: string) => {
        setOpen(false);
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden min-h-[44px] min-w-[44px]"
                    aria-label="Open navigation menu"
                >
                    <Menu className="h-6 w-6" />
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px]">
                <nav className="flex flex-col gap-4 mt-8" aria-label="Mobile navigation">
                    {navItems.map(({ name, href }) => (
                        <button
                            key={name}
                            onClick={() => handleClick(href)}
                            className={`text-left text-lg font-medium transition-colors min-h-[44px] px-4 py-2 rounded-md ${activeSection === href.slice(1)
                                    ? "text-primary bg-primary/10"
                                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                                }`}
                            aria-current={activeSection === href.slice(1) ? "page" : undefined}
                        >
                            {name}
                        </button>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
}
