// src/components/PaletteSwitcher.tsx
import React from "react";
import { useTheme } from "../ThemeContext";
import { originalPalettes } from "../palettes";

const PaletteSwitcher: React.FC = () => {
  const { themeName, setThemeName, mode } = useTheme();
  const availablePalettes = Object.keys(originalPalettes);

  return (
    // Rimosso il div contenitore e il testo, ora è solo la riga di pulsanti
    <div className="flex justify-center items-center gap-4 md:gap-5">
      {availablePalettes.map((name) => {
        const palette = originalPalettes[name];
        const isActive = themeName === name;
        return (
          <button
            key={name}
            onClick={() => setThemeName(name)}
            className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
              isActive
                ? "scale-110 ring-2 ring-offset-4 ring-brand-primary ring-offset-brand-background"
                : "hover:scale-110"
            }`}
            style={{ backgroundColor: palette[mode].primary }}
            aria-label={`Seleziona tema ${name}`}
          >
            {isActive && (
              <div className="w-4 h-4 rounded-full bg-white/80"></div>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default PaletteSwitcher;
