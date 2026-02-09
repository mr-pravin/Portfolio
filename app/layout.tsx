import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PRAVIN MR — AI/ML Engineer | RAG Specialist | Founder @ INFINEURONITY",
  description:
    "AI/ML Engineer with production experience deploying RAG systems to 500+ users. Specialized in optimizing ML pipelines while maintaining 85%+ accuracy. Building production-grade intelligent systems from Chennai, India.",
  keywords: [
    "AI Engineer",
    "ML Engineer",
    "RAG Systems",
    "LangChain",
    "NLP",
    "Deep Learning",
    "TensorFlow",
    "Hugging Face",
    "FAISS",
    "Vector Databases",
    "Chennai",
    "India",
  ],
  authors: [{ name: "PRAVIN MR" }],
  creator: "PRAVIN MR",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://mrpravin.github.io",
    title: "PRAVIN MR — AI/ML Engineer | RAG Specialist",
    description:
      "Building production-grade intelligent systems, real-time ML pipelines & personalized AI from Chennai, India 🇮🇳",
    siteName: "PRAVIN MR Portfolio",
    images: [
      {
        url: "/images/profile.jpg",
        width: 1200,
        height: 630,
        alt: "PRAVIN MR — AI/ML Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PRAVIN MR — AI/ML Engineer | RAG Specialist",
    description:
      "Building production-grade intelligent systems, real-time ML pipelines & personalized AI",
    images: ["/images/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="PRAVIN MR" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
