import React from "react";
import { motion } from "framer-motion"; // Importa motion
import type { Prodotto } from "../types";

interface ProdottoItemProps {
  prodotto: Prodotto;
}

const ProdottoItem: React.FC<ProdottoItemProps> = ({ prodotto }) => {
  return (
    // Trasformiamo il div in un motion.div e aggiungiamo le animazioni
    <motion.div
      className="bg-white rounded-lg shadow-md p-6 mb-6 transition-transform duration-300 hover:scale-105"
      initial={{ opacity: 0, y: 20 }} // Stato iniziale: invisibile e leggermente spostato in basso
      whileInView={{ opacity: 1, y: 0 }} // Stato finale quando entra in vista: visibile e nella sua posizione
      viewport={{ once: true }} // L'animazione avviene solo una volta
      transition={{ duration: 0.5 }} // Durata dell'animazione
    >
      <div className="flex justify-between items-start">
        <div className="pr-4">
          <h3 className="text-xl font-semibold text-gray-800">
            {prodotto.nome}
          </h3>
          <p className="text-gray-600 mt-1">{prodotto.descrizione}</p>
        </div>
        <p className="text-2xl font-bold text-yellow-600 flex-shrink-0">
          {prodotto.prezzo}
        </p>
      </div>
    </motion.div>
  );
};

export default ProdottoItem;
