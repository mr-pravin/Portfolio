"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Eye } from "lucide-react";
import {
    Code2,
    Brain,
    Database,
    Boxes,
    Container,
    GitBranch,
    Cloud,
    Sparkles,
    Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Background3D } from "@/components/Background3D";

const techIcons = [
    { name: "Python", icon: Code2, color: "#3b82f6" },
    { name: "TensorFlow", icon: Brain, color: "#8b5cf6" },
    { name: "Hugging Face", icon: Sparkles, color: "#ec4899" },
    { name: "LangChain", icon: Zap, color: "#06b6d4" },
    { name: "FAISS", icon: Database, color: "#10b981" },
    { name: "Docker", icon: Container, color: "#3b82f6" },
    { name: "Git", icon: GitBranch, color: "#f59e0b" },
    { name: "React", icon: Boxes, color: "#06b6d4" },
    { name: "AWS", icon: Cloud, color: "#f59e0b" },
];

export function Hero() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <section
            id="hero"
            className="relative h-screen flex items-center overflow-hidden bg-[#0a0a0f]"
        >
            {/* Spline 3D Background - z-0 */}
            <Background3D className="z-0" />

            {/* Purple orb glow at top center */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-600/40 via-blue-600/20 to-transparent blur-3xl" />
            </div>

            {/* Particles/stars background - client-only to avoid hydration mismatch */}
            {isMounted && (
                <div className="absolute inset-0 z-5">
                    {[...Array(50)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                animation: `twinkle ${2 + Math.random() * 3}s infinite`,
                                animationDelay: `${Math.random() * 2}s`,
                            }}
                        />
                    ))}
                </div>
            )}

            {/* Content Container */}
            <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">

                    {/* Left Column - Text Content */}
                    <div className="space-y-6 text-left">

                        {/* Pill Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                                <Sparkles className="w-4 h-4 text-blue-400" />
                                <span className="text-xs font-medium text-gray-300">
                                    AI/ML Engineer • RAG Specialist • Founder @ INFINEURONITY
                                </span>
                            </div>
                        </motion.div>

                        {/* Greeting & Name */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-2"
                        >
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
                                Hi, I'm
                            </h2>
                            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none">
                                <span className="bg-gradient-to-r from-[#06b6d4] via-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent">
                                    PRAVIN
                                </span>
                            </h1>
                            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-none">
                                MR
                            </h1>
                        </motion.div>

                        {/* Bio */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-lg sm:text-xl text-gray-400 max-w-xl leading-relaxed"
                        >
                            Building production-grade intelligent systems, real-time ML pipelines & personalized AI from Chennai, India 🇮🇳
                        </motion.p>

                        {/* Quote */}
                        <motion.blockquote
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-base italic text-gray-500 max-w-xl pt-2"
                        >
                            "Ship production-grade ML from concept to deployment"
                        </motion.blockquote>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="flex flex-wrap items-center gap-4 pt-6"
                        >
                            <Button
                                asChild
                                size="lg"
                                className="min-h-[48px] px-8 text-base font-medium rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-600/30"
                            >
                                <a href="#projects">
                                    <Eye className="mr-2 h-5 w-5" />
                                    View Projects
                                </a>
                            </Button>

                            <Button
                                asChild
                                size="lg"
                                className="min-h-[48px] px-8 text-base font-medium rounded-lg bg-white/10 hover:bg-white/20 hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-white/20"
                            >
                                <a href="/resume/PravinMR.pdf" download="Pravin_MR_Resume.pdf">
                                    <Download className="mr-2 h-5 w-5" />
                                    Download Resume
                                </a>
                            </Button>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="flex flex-wrap items-center gap-3 text-sm text-gray-500 pt-4"
                        >
                            <a href="tel:+916380555595" className="hover:text-blue-400 transition-colors">
                                +91 6380555595
                            </a>
                            <span>|</span>
                            <a href="mailto:mrpravin000@gmail.com" className="hover:text-blue-400 transition-colors">
                                mrpravin000@gmail.com
                            </a>
                            <span>|</span>
                            <span>Chennai, India</span>
                        </motion.div>

                    </div>

                    {/* Right Column - Photo + Tech Icons */}
                    <div className="relative flex items-center justify-center lg:justify-end">

                        {/* Profile Photo with Glow */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="relative z-20"
                        >
                            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
                                {/* Purple glow ring */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/60 to-blue-600/60 blur-2xl animate-pulse" />

                                {/* Photo */}
                                <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-purple-500/40 shadow-2xl shadow-purple-600/50">
                                    <Image
                                        src="/images/profile.png"
                                        alt="PRAVIN MR — AI/ML Engineer"
                                        fill
                                        priority
                                        className="object-cover"
                                        sizes="(max-width: 768px) 288px, 384px"
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* Tech Icons Grid - Circular arrangement on right */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] hidden xl:block pointer-events-none">
                            {techIcons.map((tech, index) => {
                                const angle = (index / techIcons.length) * 2 * Math.PI - Math.PI / 2;
                                const radius = 180;
                                const x = Math.cos(angle) * radius + 200;
                                const y = Math.sin(angle) * radius + 200;

                                return (
                                    <motion.div
                                        key={tech.name}
                                        className="absolute"
                                        style={{
                                            left: `${x}px`,
                                            top: `${y}px`,
                                        }}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                                        whileHover={{ scale: 1.2 }}
                                    >
                                        <div
                                            className="w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-md border"
                                            style={{
                                                backgroundColor: `${tech.color}15`,
                                                borderColor: `${tech.color}40`,
                                                boxShadow: `0 0 20px ${tech.color}30`,
                                            }}
                                        >
                                            <tech.icon className="w-7 h-7" style={{ color: tech.color }} />
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
