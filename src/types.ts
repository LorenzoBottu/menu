// src/types.ts
export interface Prodotto {
  immagine: string | undefined;
  id: number;
  nome: string;
  prezzo: string;
  descrizione: string;
}

export interface Categoria {
  nome: string;
  prodotti: Prodotto[];
}