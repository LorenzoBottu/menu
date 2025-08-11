// src/components/PaletteSelectorSection.tsx
import React from "react";
import { motion } from "framer-motion";
import PaletteSwitcher from "./PaletteSwitcher";

const PaletteSelectorSection: React.FC = () => {
  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    // --- MODIFICA QUI: Aggiunto l'ID ---
    <motion.section
      id="palette-selector"
      className="bg-brand-background text-brand-text py-20 md:py-28 transition-colors duration-500"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6 text-center flex flex-col items-center gap-10">
        <h2 className="font-serif text-4xl md:text-5xl text-brand-primary max-w-2xl">
          Scegli lo stile che più ti rappresenta
        </h2>

        <PaletteSwitcher />

        <button
          onClick={scrollToMenu}
          className="mt-4 px-8 py-3 bg-brand-primary text-brand-background font-bold rounded-full shadow-lg hover:opacity-90 transition-opacity duration-300"
        >
          Scopri il Menu
        </button>
      </div>
    </motion.section>
  );
};

export default PaletteSelectorSection;
