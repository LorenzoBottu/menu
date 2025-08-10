import React from "react";
import type { Categoria } from "../types";
import ProdottoItem from "./ProdottoItem";

interface CategoriaMenuProps {
  categoria: Categoria;
}

const CategoriaMenu: React.FC<CategoriaMenuProps> = ({ categoria }) => {
  return (
    <div className="mb-12">
      <h2 className="text-4xl font-bold text-yellow-500 border-b-4 border-yellow-500 pb-3 mb-8">
        {categoria.nome}
      </h2>
      <div>
        {categoria.prodotti.map((prodotto) => (
          <ProdottoItem key={prodotto.id} prodotto={prodotto} />
        ))}
      </div>
    </div>
  );
};

export default CategoriaMenu;
