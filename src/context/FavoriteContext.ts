import { createContext } from "react";
import type { ICocktail } from "../utils/mapRawCocktailData";

export interface IFavoriteContext {
  favorites: ICocktail[];
  add: (item: ICocktail) => void;
  remove: (id: string) => void;
  checkIfFavorite: (id: string) => boolean;
}

export const FavoriteContext = createContext<IFavoriteContext | null>(null);
