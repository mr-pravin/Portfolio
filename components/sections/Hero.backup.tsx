"use client";

// ALTERNATIVE VERSION: Hero without Spline 3D (use this if Spline continues to have issues)
// To use: Uncomment this file and update Hero.tsx to remove the Background3D import

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
    {
        name: "GitHub",
        href: "https://github.com/mrpravin",
        icon: Github,
    },
    {
        name: "LinkedIn",
        href: "https://linkedin.com/in/mr-pravin",
        icon: Linkedin,
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/pravin.zz",
        icon: Instagram,
    },
    {
        name: "YouTube",
        href: "https://youtube.com/@infinity-fin-tech",
        icon: Youtube,
    },
];

export function HeroNoSpline() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden"
        >
            {/* Static Gradient Background (No Spline) */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
            </div>

            {/* Content */}
            <div className="container mx-auto max-w-5xl text-center relative z-20">
                {/* Profile Photo */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-8"
                >
                    <div className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto">
                        <Image
                            src="/images/profile.jpg"
                            alt="PRAVIN MR — AI/ML Engineer"
                            fill
                            priority
                            className="rounded-full object-cover shadow-2xl shadow-primary/30 ring-4 ring-primary/40"
                            sizes="(max-width: 640px) 160px, 192px"
                        />
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent"
                >
                    PRAVIN MR
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-lg sm:text-xl md:text-2xl text-foreground/90 mb-3 font-medium"
                >
                    AI/ML Engineer • RAG Specialist • Founder @ INFINEURONITY
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-base sm:text-lg text-muted-foreground mb-6"
                >
                    Building production-grade intelligent systems, real-time ML pipelines & personalized AI
                    from Chennai, India 🇮🇳
                </motion.p>

                <motion.blockquote
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-lg sm:text-xl md:text-2xl font-medium italic text-primary mb-8 max-w-3xl mx-auto"
                >
                    &ldquo;Ship production-grade ML from concept to deployment&rdquo;
                </motion.blockquote>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm sm:text-base text-foreground/80 mb-8"
                >
                    <a
                        href="tel:+916380555595"
                        className="hover:text-primary transition-colors min-h-[44px] flex items-center"
                    >
                        +91 6380555595
                    </a>
                    <span className="hidden sm:inline">•</span>
                    <a
                        href="mailto:mrpravin000@gmail.com"
                        className="hover:text-primary transition-colors min-h-[44px] flex items-center"
                    >
                        mrpravin000@gmail.com
                    </a>
                    <span className="hidden sm:inline">•</span>
                    <span className="min-h-[44px] flex items-center">Chennai, India</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="mb-8"
                >
                    <Button
                        asChild
                        size="lg"
                        className="min-h-[44px] px-8 text-base font-semibold shadow-2xl shadow-primary/40 hover:shadow-primary/60 transition-all"
                    >
                        <a href="/resume/PravinMR.pdf" download="Pravin_MR_Resume.pdf">
                            <Download className="mr-2 h-5 w-5" />
                            Download Resume
                        </a>
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    className="flex items-center justify-center gap-4"
                >
                    {socialLinks.map(({ name, href, icon: Icon }) => (
                        <a
                            key={name}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-accent hover:bg-primary/30 transition-colors shadow-lg"
                            aria-label={name}
                        >
                            <Icon className="h-5 w-5" />
                        </a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
