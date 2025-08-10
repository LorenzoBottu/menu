import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProdottoCard from "./ProdottoCard";
import menuData from "../menu.json";
import type { Prodotto } from "../types";

type MenuSezione = "caffetteria" | "americanBar";

const MenuTabs: React.FC = () => {
  const [sezioneAttiva, setSezioneAttiva] =
    useState<MenuSezione>("caffetteria");

  const menuAttuale: Prodotto[] = menuData[sezioneAttiva];

  const TabButton: React.FC<{ sezione: MenuSezione; label: string }> = ({
    sezione,
    label,
  }) => (
    <button
      className={`relative px-6 py-3 text-2xl font-bold transition-colors ${
        sezioneAttiva === sezione
          ? "text-brand-primary"
          : "text-brand-text-secondary hover:text-white"
      }`}
      onClick={() => setSezioneAttiva(sezione)}
    >
      {label}
      {sezioneAttiva === sezione && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-brand-primary"
          layoutId="underline" // Animazione magica!
        />
      )}
    </button>
  );

  return (
    <div className="w-full">
      {/* Selettori Tab */}
      <div className="flex justify-center border-b border-white/20 mb-12">
        <TabButton sezione="caffetteria" label="Caffetteria" />
        <TabButton sezione="americanBar" label="American Bar" />
      </div>

      {/* Griglia dei Prodotti */}
      <AnimatePresence mode="wait">
        <motion.div
          key={sezioneAttiva}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
        >
          {menuAttuale.map((prodotto) => (
            <ProdottoCard key={prodotto.id} prodotto={prodotto} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MenuTabs;
