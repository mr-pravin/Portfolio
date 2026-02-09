"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center">
                        About Me
                    </h2>
                    <div className="prose prose-lg prose-invert max-w-none">
                        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                            AI/ML Engineer with production experience deploying RAG systems to 500+ users.
                            Specialized in optimizing ML pipelines while maintaining 85%+ accuracy. Strong
                            foundation in deep learning, NLP, and real-time systems with demonstrated ability to
                            ship production-grade ML products from concept to deployment.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
