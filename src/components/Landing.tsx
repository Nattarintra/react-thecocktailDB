import { useEffect, useState, type ReactElement } from "react";
import { getRandomCocktail } from "../api/cocktailApi";
import type { ICocktail } from "../utils/mapRawCocktailData";
import { CocktailCard } from "./CocktailCard";
import { Link } from "react-router-dom";

export const Landing = (): ReactElement => {
  const [cocktail, setCocktail] = useState<ICocktail>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loadCocktail = () => {
    setIsLoading(true);
    getRandomCocktail()
      .then(setCocktail)
      .finally(() => setIsLoading(false));
  };

  // load first cocktail on mount
  useEffect(() => {
    loadCocktail();
  }, []);

  return (
    <section>
      <article className="center-flex">
        <h2>Discover a Random Cocktail</h2>
        <button className="btn btn--primary" onClick={loadCocktail}>
          Another round
        </button>
        <Link to="/search">
          <button className="btn btn--search">Search</button>
        </Link>
      </article>

      {cocktail ? (
        <CocktailCard item={cocktail} />
      ) : (
        isLoading && <p>Loading…</p>
      )}
    </section>
  );
};
