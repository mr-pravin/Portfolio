"use client";

import { useEffect, useState } from "react";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export function DesktopNav() {
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

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav className="hidden md:flex items-center gap-6" aria-label="Desktop navigation">
            {navItems.map(({ name, href }) => (
                <a
                    key={name}
                    href={href}
                    onClick={(e) => handleClick(e, href)}
                    className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === href.slice(1)
                            ? "text-primary"
                            : "text-muted-foreground"
                        }`}
                    aria-current={activeSection === href.slice(1) ? "page" : undefined}
                >
                    {name}
                </a>
            ))}
        </nav>
    );
}
