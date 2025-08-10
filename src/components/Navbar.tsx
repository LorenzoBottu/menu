import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import ThemeSwitcher from "./ThemeSwitcher";

// --- Props e Funzioni di utility (invariate) ---
interface MenuNavProps {
  categorie: string[];
}
const formatNavTitle = (title: string) => {
  return title
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

// --- Icone SVG (invariate) ---
const HamburgerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-7 w-7"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);
const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-7 w-7"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

// --- Componente Principale della NavBar (Logica aggiornata) ---
const MenuNav: React.FC<MenuNavProps> = ({ categorie }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // NUOVO: Varianti di animazione per il pannello a schermo intero e i link
  const panelVariants: Variants = {
    hidden: { opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } },
    visible: { opacity: 1, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  const listVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <>
      {/* La barra di navigazione visibile rimane la stessa */}
      <nav className="sticky top-0 z-30 bg-white/80 dark:bg-brand-background/80 backdrop-blur-sm shadow-md transition-colors duration-500">
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          <a
            href="#"
            className="font-serif text-xl font-bold text-brand-primary"
          >
            Caffè del Corso
          </a>
          {/* Navigazione Desktop */}
          <div className="hidden md:flex items-center gap-x-6">
            {categorie.map((categoria) => (
              <a
                key={categoria}
                href={`#${categoria}`}
                className="font-sans font-bold text-gray-600 dark:text-brand-text-secondary hover:text-brand-primary transition-colors"
              >
                {formatNavTitle(categoria)}
              </a>
            ))}
            <ThemeSwitcher />
          </div>
          {/* Bottone Hamburger Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="text-gray-800 dark:text-brand-text"
            >
              <HamburgerIcon />
            </button>
          </div>
        </div>
      </nav>

      {/* MODIFICATO: Menu overlay a schermo intero */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-white dark:bg-brand-background z-50 flex flex-col p-4"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {/* Header del menu overlay */}
            <div className="flex justify-between items-center w-full">
              <span className="font-serif text-xl font-bold text-brand-primary">
                Caffè del Corso
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-800 dark:text-brand-text"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Lista dei link animati */}
            <motion.ul
              className="flex-grow flex flex-col justify-center items-center gap-y-4"
              variants={listVariants}
              initial="hidden"
              animate="visible"
            >
              {categorie.map((categoria) => (
                <motion.li key={categoria} variants={itemVariants}>
                  <a
                    href={`#${categoria}`}
                    onClick={() => setIsOpen(false)}
                    className="font-serif text-4xl text-gray-800 dark:text-brand-text hover:text-brand-primary transition-colors py-3"
                  >
                    {formatNavTitle(categoria)}
                  </a>
                </motion.li>
              ))}
            </motion.ul>

            {/* Footer con lo switcher */}
            <div className="flex justify-center pb-4">
              <ThemeSwitcher />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MenuNav;
