import { useEffect, useState, type ReactElement, type ReactNode } from "react";
import { FavoriteContext, type IFavoriteContext } from "./FavoriteContext";
import type { ICocktail } from "../utils/mapRawCocktailData";

interface IFavoriteContextProviderProps {
  children: ReactNode;
}

const LS_KEY = "cocktail:favorites:v1";
export const FavoriteContextProvider = ({
  children,
}: IFavoriteContextProviderProps): ReactElement => {
  const [favorites, setFavorites] = useState<ICocktail[]>(() => {
    try {
      const raw = localStorage.getItem(LS_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  const add = (item: ICocktail) =>
    setFavorites((prev) =>
      prev.some((x) => x.id === item.id) ? prev : [item, ...prev]
    );

  const checkIfFavorite = (id: string) => favorites.some((f) => f.id === id);
  const remove = (id: string) =>
    setFavorites((prev) => prev.filter((f) => f.id !== id));

  const values: IFavoriteContext = {
    add,
    favorites,
    checkIfFavorite,
    remove,
  };
  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoriteContext.Provider value={values}>
      {children}
    </FavoriteContext.Provider>
  );
};
