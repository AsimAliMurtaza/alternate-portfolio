"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import StackingCards, {
  StackingCardItem,
} from "@/components/fancy/blocks/stacking-cards";

// Hardcoded Projects Array
const projects = [
  {
    bgColor: "bg-[#f97316]",
    title: "Portfolio Website",
    description:
      "A sleek personal portfolio built with Next.js, Framer Motion, and TailwindCSS.",
    image: "",
  },
  {
    bgColor: "bg-[#0015ff]",
    title: "E-Commerce Platform",
    description:
      "An end-to-end MERN Stack e-commerce web app with Stripe integration.",
    image: "",
  },
  {
    bgColor: "bg-[#ff5941]",
    title: "AI Content Generator",
    description:
      "An AI-powered blog & image generator using Gemini API and LangChain RAG.",
    image: "",
  },
  {
    bgColor: "bg-[#1f464d]",
    title: "Task Management App",
    description:
      "A collaborative Kanban board application built with Next.js and MongoDB.",
    image: "",
  },
  {
    bgColor: "bg-[#0015ff]",
    title: "Quiz Conduction Platform",
    description:
      "An interactive quiz platform for teachers and students with real-time analytics.",
    image: "",
  },
];

export default function StackingCardsDemo() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Hydration completed
    if (containerRef.current) {
      setIsMounted(true);
    }
  }, []);

  return (
    <div
      className="h-[620px] bg-white overflow-auto text-white"
      ref={containerRef}
    >
      {isMounted && (
        <StackingCards
          totalCards={projects.length}
          scrollOptons={{ container: { current: containerRef.current } }}
        >
          {projects.map(({ bgColor, description, image, title }, index) => (
            <StackingCardItem key={index} index={index} className="h-[620px]">
              <div
                className={cn(
                  bgColor,
                  "h-[80%] sm:h-[70%] flex-col sm:flex-row aspect-video px-8 py-10 flex w-11/12 rounded-3xl mx-auto relative"
                )}
              >
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="font-bold text-2xl mb-5">{title}</h3>
                  <p>{description}</p>
                </div>

                <div className="w-full sm:w-1/2 rounded-xl aspect-video relative overflow-hidden">
                  {/* <Image
                    src={image}
                    alt={title}
                    className="object-cover"
                    fill
                  /> */}
                </div>
              </div>
            </StackingCardItem>
          ))}

          <div className="w-full h-80 relative overflow-hidden">
            <h2 className="absolute bottom-0 left-0 translate-y-1/3 sm:text-[192px] text-[80px] text-[#ff5941] font-calendas">
              fancy
            </h2>
          </div>
        </StackingCards>
      )}
    </div>
  );
}
