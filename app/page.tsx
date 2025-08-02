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
import ContactSection from "@/components/ContactSection";

export default function Home() {
  const introRef = useRef(null);
  const projectsRef = useRef(null);
  const introTextRef = useRef<VerticalCutRevealRef>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  // Intro Scroll Fade Out
  const { scrollYProgress: introScrollY } = useScroll({
    target: introRef,
    offset: ["start start", "end start"],
  });
  const introOpacity = useTransform(introScrollY, [0, 0.3], [1, 0]);

  // Projects Scroll Fade Out
  const { scrollYProgress: projectsScrollY } = useScroll({
    target: projectsRef,
    offset: ["start start", "end start"],
  });
  const projectsOpacity = useTransform(projectsScrollY, [0, 0.3], [1, 0]);

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
      name: "Portfolio",
      date: "2025",
      image:
        "https://github.com/AsimAliMurtaza/resources/blob/main/projects/portfolio.png?raw=true",
    },
    {
      name: "Cognivia",
      date: "2025",
      image:
        "https://github.com/AsimAliMurtaza/resources/blob/main/projects/cognivia.png?raw=true",
    },
    {
      name: "ZenFlow",
      date: "2025",
      image:
        "https://github.com/AsimAliMurtaza/resources/blob/main/projects/zenflow.png?raw=true",
    },
    {
      name: "E-commerce App",
      date: "2024",
      image:
        "https://github.com/AsimAliMurtaza/resources/blob/main/projects/ecommerce.png?raw=true",
    },
    {
      name: "Social Media Sentiment Analysis",
      date: "2024",
      image:
        "https://github.com/AsimAliMurtaza/resources/blob/main/projects/sentiment-project.jpg?raw=true",
    },
    {
      name: "The Notes App",
      date: "2024",
      image:
        "https://github.com/AsimAliMurtaza/resources/blob/main/projects/notes-app.png?raw=true",
    },
  ];

  return (
    <div className="bg-white">
      {/* Intro Section */}
      <div ref={introRef} className="h-[200vh]">
        <motion.div
          style={{ opacity: introOpacity }}
          className="sticky top-0 w-dvw h-dvh xs:text-2xl text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl flex flex-col items-start justify-center font-overused-grotesk p-16 md:p-16 lg:p-24 text-[#000000] tracking-wide uppercase"
        >
          <div className="mb-4">
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
              {`HI THERE👋, I'm!`}
            </VerticalCutReveal>
          </div>
          <div className="mb-4">
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
              {`Muhammad Asim Ali Murtaza,`}
            </VerticalCutReveal>
          </div>
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

      {/* Projects Section with Sticky + Fade Out */}
      <div ref={projectsRef} className="h-[250vh] relative">
        <motion.div
          style={{ opacity: projectsOpacity }}
          className="sticky top-0 w-dvw h-dvh xs:text-2xl text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl flex flex-col items-start justify-center font-overused-grotesk p-10 md:p-16 lg:p-24 text-[#000000] tracking-wide uppercase"
        >
          <div className="mb-10">
            <VerticalCutReveal
              splitBy="characters"
              staggerDuration={0.025}
              staggerFrom="first"
              reverse={true}
              autoStart={true}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 21,
                delay: 0.5,
              }}
            >
              {`Projects`}
            </VerticalCutReveal>
          </div>

          <div className="relative w-full flex flex-col md:flex-row md:justify-between md:items-center">
            {/* Project List */}
            <div className="flex flex-col justify-center items-end space-y-6 text-right w-full md:w-1/2">
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
                    useOriginalCharsOnly={false}
                    className="text-lg sm:text-xl md:text-2xl font-thin text-gray-800 dark:text-gray-200"
                  />
                  <span className="text-sm sm:text-md md:text-lg text-gray-400">
                    {project.date}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Project Image Preview */}
            <div className="hidden md:flex md:w-1/2 md:justify-end md:items-end md:pl-12">
              <AnimatePresence>
                {hoveredProject && (
                  <motion.div
                    key={hoveredProject}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="w-186 h-80 object-cover rounded-lg shadow-xl"
                  >
                    <img
                      src={
                        projects.find((p) => p.name === hoveredProject)
                          ?.image || ""
                      }
                      alt={hoveredProject}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Contact Section */}
      <div className="w-dvw h-dvh flex items-center justify-center">
        <ContactSection />
      </div>
    </div>
  );
}
