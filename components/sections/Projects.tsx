"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "INFINEURONITY",
        description:
            "Production RAG SaaS Platform serving 500+ users with 87% answer accuracy. Semantic search pipeline with 150ms p95 latency.",
        tech: ["LangChain", "FAISS", "Hugging Face", "FastAPI", "Android"],
        github: "https://github.com/mrpravin",
        demo: null,
    },
    {
        title: "HumanIO",
        description:
            "Real-time Gesture Control System achieving 30 FPS on CPU with 94% accuracy and sub-100ms latency.",
        tech: ["Python", "OpenCV", "MediaPipe", "Kalman Filtering"],
        github: "https://github.com/mrpravin",
        demo: null,
    },
    {
        title: "AI Financial Agent",
        description:
            "Autonomous budgeting & investment advisor using LangChain agents with tool calling capabilities.",
        tech: ["LangChain", "OpenAI API", "Tool Calling"],
        github: "https://github.com/mrpravin",
        demo: null,
    },
    {
        title: "Multimodal Document Analyzer",
        description:
            "RAG + vision system for PDF/image ingestion with semantic Q&A capabilities using multimodal models.",
        tech: ["LLaVA", "Hugging Face", "RAG", "PDF Processing"],
        github: "https://github.com/mrpravin",
        demo: null,
    },
    {
        title: "Personalized News Summarizer",
        description:
            "Fine-tuned embeddings + LLM for personalized daily news digests with semantic relevance scoring.",
        tech: ["Sentence Transformers", "FAISS", "Fine-tuning"],
        github: "https://github.com/mrpravin",
        demo: null,
    },
    {
        title: "Voice-Activated Task Assistant",
        description:
            "Speech-to-text + agent system with real-time streaming for hands-free task management.",
        tech: ["Whisper", "LangChain", "Real-time Streaming"],
        github: "https://github.com/mrpravin",
        demo: null,
    },
    {
        title: "Predictive Maintenance Dashboard",
        description:
            "Time-series ML for equipment failure prediction with interactive visualization dashboard.",
        tech: ["TensorFlow", "Prophet", "Visualization"],
        github: "https://github.com/mrpravin",
        demo: null,
    },
    {
        title: "Sentiment Analysis API",
        description:
            "Real-time NLP service deployed on Vercel for sentiment classification with sub-second response times.",
        tech: ["Hugging Face", "FastAPI", "Vercel"],
        github: "https://github.com/mrpravin",
        demo: null,
    },
    {
        title: "Chat with Your Docs",
        description:
            "Private RAG chatbot with local vector DB integration for secure document Q&A without cloud dependencies.",
        tech: ["Ollama", "Local Vector DB", "RAG"],
        github: "https://github.com/mrpravin",
        demo: null,
    },
];

export function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-7xl">
                <motion.h2
                    className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                >
                    Projects
                </motion.h2>

                <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Card className="h-full flex flex-col hover:shadow-lg hover:shadow-primary/10 transition-shadow">
                                <CardHeader>
                                    <CardTitle className="text-xl flex items-start justify-between gap-2">
                                        <span>{project.title}</span>
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="min-h-[44px] min-w-[44px] flex items-center justify-center hover:text-primary transition-colors"
                                                aria-label={`${project.title} GitHub repository`}
                                            >
                                                <Github className="h-5 w-5" />
                                            </a>
                                        )}
                                    </CardTitle>
                                    <CardDescription className="text-sm leading-relaxed">
                                        {project.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="mt-auto">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2 py-1 text-xs bg-accent text-accent-foreground rounded border border-border"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-4 inline-flex items-center gap-2 text-sm text-primary hover:underline min-h-[44px]"
                                        >
                                            <ExternalLink className="h-4 w-4" />
                                            Live Demo
                                        </a>
                                    )}
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
