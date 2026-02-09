"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Download, Github, Linkedin, Instagram, Youtube, Package } from "lucide-react";
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
    {
        name: "PyPI (linpredict)",
        href: "https://pypi.org/project/linpredict/",
        icon: Package,
    },
];

const certifications = [
    {
        name: "Ability Coding",
        href: "https://www.abilitycoding.com/verify-certificate",
        credential: "STU-241020-462987",
    },
    {
        name: "IBM Data Science AI",
        href: "https://www.coursera.org/account/accomplishments/verify/POHBRV1YE00S",
        credential: "POHBRV1YE00S",
    },
    {
        name: "Meta Data Analytics",
        href: "https://www.coursera.org/account/accomplishments/verify/POHBRV1YE00S",
        credential: "POHBRV1YE00S",
    },
    {
        name: "Claude (Anthropic)",
        href: "https://verify.skilljar.com/c/zrgxqweyzckc",
        credential: "zrgxqweyzckc",
    },
];

export function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/20">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center">
                        Get In Touch
                    </h2>

                    {/* Contact Info */}
                    <div className="text-center mb-8">
                        <p className="text-lg text-muted-foreground mb-2">
                            <a
                                href="tel:+916380555595"
                                className="hover:text-primary transition-colors min-h-[44px] inline-flex items-center"
                            >
                                +91 6380555595
                            </a>
                        </p>
                        <p className="text-lg text-muted-foreground mb-2">
                            <a
                                href="mailto:mrpravin000@gmail.com"
                                className="hover:text-primary transition-colors min-h-[44px] inline-flex items-center"
                            >
                                mrpravin000@gmail.com
                            </a>
                        </p>
                        <p className="text-lg text-muted-foreground">Chennai, India</p>
                    </div>

                    {/* Social Links */}
                    <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                        {socialLinks.map(({ name, href, icon: Icon }) => (
                            <a
                                key={name}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="min-h-[44px] px-4 py-2 flex items-center gap-2 rounded-lg bg-accent hover:bg-primary/20 transition-colors text-sm font-medium"
                                aria-label={name}
                            >
                                <Icon className="h-5 w-5" />
                                <span className="hidden sm:inline">{name}</span>
                            </a>
                        ))}
                    </div>

                    {/* Certifications */}
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-4 text-center">Certifications</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {certifications.map(({ name, href, credential }) => (
                                <a
                                    key={name}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="min-h-[44px] px-4 py-3 flex flex-col justify-center rounded-lg bg-card hover:bg-accent transition-colors border border-border"
                                >
                                    <span className="font-medium text-sm">{name}</span>
                                    <span className="text-xs text-muted-foreground">{credential}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Resume Download */}
                    <div className="text-center">
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="min-h-[44px] px-8 text-base font-semibold"
                        >
                            <a href="/resume/PravinMR.pdf" download="PravinMR_Resume.pdf">
                                <Download className="mr-2 h-5 w-5" />
                                Download Resume
                            </a>
                        </Button>
                    </div>

                    {/* Footer */}
                    <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
                        <p>© 2026 PRAVIN MR. Built with Next.js, TypeScript, and Tailwind CSS.</p>
                        <p className="mt-2">
                            Authored{" "}
                            <span className="font-medium text-foreground">Thanglish Python</span> book — 450+
                            copies distributed
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
