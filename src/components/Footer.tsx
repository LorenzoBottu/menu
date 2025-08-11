// src/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-black/50 p-8 transition-colors duration-500">
      <div className="container mx-auto text-center">
        <p className="font-serif text-2xl text-brand-primary">
          Caffè Del Corso
        </p>
        <p className="text-sm mt-1 text-brand-text-secondary">
          Corso Manfredo Fanti, 93 - Carpi(MO)
        </p>

        <hr className="my-8 border-gray-300 dark:border-white/20" />
        <div className="mt-6 text-xs text-brand-text-secondary">
          <p>© {currentYear} Lorenzo Botti.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
