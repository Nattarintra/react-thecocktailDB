import { useEffect, useState, type ReactElement } from "react";
import { fetchRandomCocktail } from "../api/cocktailApi";
import type { ICocktail } from "../utils/mapRawCocktailData";
import { CocktailCard } from "./CocktailCard";

export const Landing = (): ReactElement => {
  const [cocktail, setCocktail] = useState<ICocktail>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loadCocktail = () => {
    setIsLoading(true);
    fetchRandomCocktail()
      .then(setCocktail)
      .finally(() => setIsLoading(false));
  };

  // load first cocktail on mount
  useEffect(() => {
    loadCocktail();
  }, []);

  return (
    <section>
      <h1>Random Cocktail</h1>
      <button onClick={loadCocktail}>Another round</button>

      {cocktail ? (
        <CocktailCard item={cocktail} />
      ) : (
        isLoading && <p>Loading…</p>
      )}
    </section>
  );
};
