import { motion } from "framer-motion";

const Hero = () => {
  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="h-screen w-full bg-cover bg-center flex flex-col justify-center items-center relative"
      style={{ backgroundImage: "url('/images/hero-background.png')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <motion.div
        className="relative z-10 text-center text-white p-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1 className="text-7xl md:text-9xl font-serif font-bold text-brand-primary drop-shadow-2xl">
          Caffè del Corso
        </h1>
        <p className="mt-4 text-xl md:text-2xl font-sans text-white drop-shadow-lg">
          Dove stile e sapore si incontrano.
        </p>
      </motion.div>

      <motion.div
        className="absolute bottom-12 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <button onClick={scrollToMenu} className="animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-brand-primary"
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
        </button>
      </motion.div>
    </div>
  );
};

export default Hero;
