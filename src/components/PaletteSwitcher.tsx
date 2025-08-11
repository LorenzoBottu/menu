import React from "react";
import { useTheme } from "../ThemeContext";
import { originalPalettes } from "../palettes";

const PaletteSwitcher: React.FC = () => {
  const { themeName, setThemeName, mode } = useTheme();
  const availablePalettes = Object.keys(originalPalettes);

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="font-sans text-sm text-brand-text-secondary">
        Scegli il tuo stile
      </p>
      <div className="flex justify-center items-center gap-3">
        {availablePalettes.map((name) => {
          const palette = originalPalettes[name];
          const isActive = themeName === name;
          return (
            <button
              key={name}
              onClick={() => setThemeName(name)}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform ${
                isActive
                  ? "scale-125 ring-2 ring-offset-2 ring-brand-primary ring-offset-brand-background"
                  : "hover:scale-110"
              }`}
              style={{ backgroundColor: palette[mode].primary }}
              aria-label={`Seleziona tema ${name}`}
            >
              {isActive && (
                <div className="w-3 h-3 rounded-full bg-white/80"></div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default PaletteSwitcher;
