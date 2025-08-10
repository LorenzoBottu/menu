import React from "react";
import { motion } from "framer-motion";
import type { Prodotto } from "../types"; // Assicurati che types.ts abbia anche "immagine: string"
// Assicurati che types.ts abbia anche "immagine: string"

interface ProdottoCardProps {
  prodotto: Prodotto;
}

const ProdottoCard: React.FC<ProdottoCardProps> = ({ prodotto }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="bg-brand-surface rounded-lg overflow-hidden shadow-lg group"
      variants={cardVariants}
    >
      <div className="relative">
        <img
          src={prodotto.immagine}
          alt={prodotto.nome}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <p className="absolute bottom-4 right-4 text-3xl font-bold text-brand-primary drop-shadow-lg">
          {prodotto.prezzo}
        </p>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-serif font-bold text-brand-primary">
          {prodotto.nome}
        </h3>
        <p className="text-brand-text-secondary mt-2 h-12">
          {prodotto.descrizione}
        </p>
      </div>
    </motion.div>
  );
};

export default ProdottoCard;
