import React from "react";
import type { Prodotto } from "../types";
import MenuItem from "./MenuItem";

interface MenuCategoryProps {
  titolo: string;
  prodotti: Prodotto[];
}

const formatTitle = (title: string) => {
  return title
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

const MenuCategory: React.FC<MenuCategoryProps> = ({ titolo, prodotti }) => {
  return (
    <section id={titolo} className="mb-20 scroll-mt-24 md:scroll-mt-28">
      <h2 className="font-serif text-5xl text-brand-primary mb-10 text-center">
        {formatTitle(titolo)}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        {prodotti.map((prodotto) => (
          <MenuItem key={prodotto.id} item={prodotto} />
        ))}
      </div>
    </section>
  );
};

export default MenuCategory;
