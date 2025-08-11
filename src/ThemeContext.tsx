import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useMemo,
} from "react";
import { palettes, type Palette } from "./palettes";

type Mode = "light" | "dark";

interface ThemeContextType {
  themeName: string;
  setThemeName: (name: string) => void;
  mode: Mode;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [themeName, setThemeName] = useState<string>(() => {
    return localStorage.getItem("themeName") || "oro";
  });

  const [mode, setMode] = useState<Mode>(() => {
    const savedMode = localStorage.getItem("mode") as Mode;
    const userPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return savedMode || (userPrefersDark ? "dark" : "light");
  });

  useEffect(() => {
    const selectedPalette: Palette = palettes[themeName];
    const themeColors = selectedPalette[mode];

    const root = window.document.documentElement;
    Object.entries(themeColors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });

    root.classList.remove("light", "dark");
    root.classList.add(mode);

    localStorage.setItem("themeName", themeName);
    localStorage.setItem("mode", mode);
  }, [themeName, mode]);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const value = useMemo(
    () => ({
      themeName,
      setThemeName,
      mode,
      toggleMode,
    }),
    [themeName, mode]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
