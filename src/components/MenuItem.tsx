import React from "react";
import type { Prodotto } from "../types";

interface MenuItemProps {
  item: Prodotto;
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-baseline">
        <h4 className="font-serif text-xl text-gray-900 dark:text-brand-text">
          {item.nome}
        </h4>
        <div className="flex-grow border-b border-dashed border-gray-300 dark:border-white/20 mx-2"></div>
        <span className="font-bold text-brand-primary text-xl">
          {item.prezzo}
        </span>
      </div>
      <p className="text-gray-600 dark:text-brand-text-secondary text-sm mt-1">
        {item.descrizione}
      </p>
    </div>
  );
};

export default MenuItem;
