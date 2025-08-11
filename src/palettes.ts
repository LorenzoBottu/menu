// src/palettes.ts

export interface ColorScheme {
  primary: string;
  background: string;
  text: string;
  textSecondary: string;
}

export interface Palette {
  light: ColorScheme;
  dark: ColorScheme;
}

// Funzione per convertire HEX in R,G,B per le variabili CSS
function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)} ${parseInt(result[2], 16)} ${parseInt(result[3], 16)}`
    : '0 0 0';
}

// Le tue palette definite con colori HEX
const definedPalettes: Record<string, Palette> = {
  oro: {
    light: {
      primary: '#D4AF37',
      background: '#FFFFFF',
      text: '#1A202C',
      textSecondary: '#718096',
    },
    dark: {
      primary: '#D4AF37',
      background: '#121212',
      text: '#E0E0E0',
      textSecondary: '#A0A0A0',
    },
  },
  oceano: {
    light: {
      primary: '#3182CE',
      background: '#EDF2F7',
      text: '#1A202C',
      textSecondary: '#4A5568',
    },
    dark: {
      primary: '#63B3ED',
      background: '#1A202C',
      text: '#E2E8F0',
      textSecondary: '#A0AEC0',
    },
  },
  foresta: {
    light: {
      primary: '#38A169',
      background: '#F0FFF4',
      text: '#1A202C',
      textSecondary: '#4A5568',
    },
    dark: {
      primary: '#68D391',
      background: '#1A2622',
      text: '#E2E8F0',
      textSecondary: '#A0AEC0',
    },
  },
  // --- NUOVA PALETTE ROSA AGGIUNTA QUI ---
  rosa: {
    light: {
      primary: '#DB9999', // Un rosa intenso e vibrante
      background: '#FFF1F2', // Uno sfondo bianco con una punta di rosa
      text: '#1F2937',
      textSecondary: '#6B7280',
    },
    dark: {
      primary: '#F472B6', // Un rosa più chiaro e leggibile su sfondo scuro
      background: '#1F121A', // Uno sfondo scuro con una punta di viola/rosa
      text: '#F3F4F6',
      textSecondary: '#9CA3AF',
    },
  },
};

// Esportiamo le palette trasformate con valori RGB (logica invariata)
export const palettes: Record<string, Palette> = Object.entries(definedPalettes).reduce(
  (acc, [name, palette]) => {
    acc[name] = {
      light: {
        primary: hexToRgb(palette.light.primary),
        background: hexToRgb(palette.light.background),
        text: hexToRgb(palette.light.text),
        textSecondary: hexToRgb(palette.light.textSecondary),
      },
      dark: {
        primary: hexToRgb(palette.dark.primary),
        background: hexToRgb(palette.dark.background),
        text: hexToRgb(palette.dark.text),
        textSecondary: hexToRgb(palette.dark.textSecondary),
      }
    };
    return acc;
  },
  {} as Record<string, Palette>
);

// Esportiamo anche le palette originali con HEX per l'interfaccia (logica invariata)
export const originalPalettes = definedPalettes;