"use client";
import VerticalCutReveal, {
  VerticalCutRevealRef,
} from "@/components/fancy/text/vertical-cut-reveal";
import ScrambleHover from "@/components/fancy/text/scramble-hover";
import {
  useInView,
  useScroll,
  useTransform,
  motion,
  AnimatePresence,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const introRef = useRef(null);
  const introTextRef = useRef<VerticalCutRevealRef>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: introRef,
    offset: ["start start", "end start"],
  });
  const fadeOutOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const isIntroInView = useInView(introRef, { once: false });

  useEffect(() => {
    if (isIntroInView) {
      introTextRef.current?.startAnimation();
    } else {
      introTextRef.current?.reset();
    }
  }, [isIntroInView]);

  const projects = [
    {
      name: "Portfolio Website (Next.js, TailwindCSS)",
      date: "2024",
      image: "/images/portfolio.png",
    },
    {
      name: "E-Commerce Platform (MERN, Stripe)",
      date: "2023",
      image: "/images/ecommerce.png",
    },
    {
      name: "AI Content Generator (Gemini API)",
      date: "2025",
      image: "/images/ai-generator.png",
    },
    {
      name: "Task Management App (Kanban Board)",
      date: "2023",
      image: "/images/task-app.png",
    },
    {
      name: "Quiz Platform (Real-time Analytics)",
      date: "2024",
      image: "/images/quiz-platform.png",
    },
  ];

  return (
    <div className="bg-white">
      {/* Intro Section */}
      <div ref={introRef} className="h-[200vh]">
        <motion.div
          style={{ opacity: fadeOutOpacity }}
          className="sticky top-0 w-dvw h-dvh xs:text-2xl text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl flex flex-col items-start justify-center font-overused-grotesk p-10 md:p-16 lg:p-24 text-[#89fd24] tracking-wide uppercase"
        >
          <VerticalCutReveal
            splitBy="characters"
            staggerDuration={0.025}
            staggerFrom="first"
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 21,
            }}
          >
            {`HI 👋, I'm!`}
          </VerticalCutReveal>
          <VerticalCutReveal
            splitBy="characters"
            staggerDuration={0.025}
            staggerFrom="first"
            reverse={true}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 21,
              delay: 0.5,
            }}
          >
            {`Muhammad Asim Ali Murtaza`}
          </VerticalCutReveal>
          <VerticalCutReveal
            splitBy="characters"
            staggerDuration={0.025}
            staggerFrom="center"
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 21,
              delay: 1.1,
            }}
          >
            {`A Passionate Developer.`}
          </VerticalCutReveal>
        </motion.div>
      </div>
      {/* Projects Section */}
      <div className="w-dvw h-dvh flex flex-col justify-center items-end bg-white text-foreground dark:text-muted text-2xl font-overused-grotesk overflow-hidden py-20 px-8 sm:px-16 md:px-24 lg:px-32">
        <div className="relative w-full h-full">
          <h2 className="text-3xl font-thin mb-6">Projects</h2>
          <div className="flex flex-col justify-center items-end space-y-6 text-right">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                onHoverStart={() => setHoveredProject(project.name)}
                onHoverEnd={() => setHoveredProject(null)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1 + 0.5,
                  ease: "easeOut",
                }}
                className="w-full flex justify-between items-center cursor-pointer"
              >
                <ScrambleHover
                  text={project.name}
                  scrambleSpeed={50}
                  maxIterations={8}
                  useOriginalCharsOnly={true}
                  className="text-lg sm:text-xl md:text-2xl font-thin text-gray-800 dark:text-gray-200"
                />
                <span className="text-sm sm:text-md md:text-lg text-gray-400">
                  {project.date}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Project Image Preview */}
          <AnimatePresence>
            {hoveredProject && (
              <motion.div
                key={hoveredProject}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 hidden md:block"
              >
                <img
                  src={
                    projects.find((p) => p.name === hoveredProject)?.image || ""
                  }
                  alt={hoveredProject}
                  className="w-56 h-36 object-cover rounded-lg shadow-xl"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
