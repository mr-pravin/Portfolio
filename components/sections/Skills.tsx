"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Brain, Database, Sparkles } from "lucide-react";

const skillCategories = [
    {
        title: "Core Engineering",
        icon: Code2,
        skills: ["Python", "SQL", "Git", "Docker", "Linux"],
    },
    {
        title: "ML & Deep Learning",
        icon: Brain,
        skills: ["TensorFlow", "Scikit-learn", "Hugging Face Transformers"],
    },
    {
        title: "Data Engineering",
        icon: Database,
        skills: [
            "NumPy",
            "Pandas",
            "Airflow",
            "FAISS",
            "Vector Databases",
            "Matplotlib",
            "Seaborn",
        ],
    },
    {
        title: "NLP & Generative AI",
        icon: Sparkles,
        skills: [
            "RAG Systems",
            "LangChain",
            "Sentence Transformers",
            "Prompt Engineering",
            "Fine-tuning",
        ],
    },
];

export function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/20">
            <div className="container mx-auto max-w-6xl">
                <motion.h2
                    className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                >
                    Technical Skills
                </motion.h2>

                <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map(({ title, icon: Icon, skills }, index) => (
                        <motion.div
                            key={title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full hover:shadow-lg hover:shadow-primary/10 transition-shadow">
                                <CardHeader>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-2 rounded-lg bg-primary/10">
                                            <Icon className="h-6 w-6 text-primary" />
                                        </div>
                                    </div>
                                    <CardTitle className="text-xl">{title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
