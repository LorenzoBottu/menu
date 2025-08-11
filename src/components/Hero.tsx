import React from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  type Variants,
} from "framer-motion"; // <-- 1. IMPORTATO Variants

const Hero: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({
    clientX,
    clientY,
    currentTarget,
  }: React.MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const spotlightStyle = useMotionTemplate`
    radial-gradient(
      600px circle at ${mouseX}px ${mouseY}px,
      rgba(212, 175, 55, 0.15),
      transparent 80%
    )
  `;

  const scrollToNextSection = () => {
    document
      .getElementById("palette-selector")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  // --- 2. APPLICATO IL TIPO Variants ---
  const titleContainerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3, delayChildren: 0.5 } },
  };

  // --- 3. APPLICATO IL TIPO Variants ---
  const titleWordVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const titleText = "Caffè Del Corso";

  return (
    <div
      className="h-screen w-full relative flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 min-w-full min-h-full object-cover z-0"
        poster="/images/hero-background.jpg"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
        Il tuo browser non supporta i video.
      </video>

      <motion.div
        className="absolute inset-0 z-10"
        style={{ background: spotlightStyle }}
      />

      <div className="absolute inset-0 bg-black/70 z-20" />

      <div className="relative z-30 text-center text-white">
        <motion.h1
          className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-brand-primary drop-shadow-2xl flex justify-center gap-x-2 md:gap-x-4"
          variants={titleContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {titleText.split(" ").map((word, index) => (
            <motion.span
              key={index}
              variants={titleWordVariants}
              className="inline-block"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl font-sans text-white/90 drop-shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          Un'esperienza da assaporare.
        </motion.p>

        <motion.div
          className="absolute -bottom-24 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.2 }}
        >
          <button
            onClick={scrollToNextSection}
            className="group flex flex-col items-center gap-2 text-brand-primary"
            aria-label="Scorri per continuare"
          >
            <span className="font-sans text-sm tracking-widest transition-opacity group-hover:opacity-80">
              SCOPRI
            </span>
            <span className="animate-bounce">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
