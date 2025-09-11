import { useEffect, useState, type ReactElement } from "react";
import { getRandomCocktail } from "../api/cocktailApi";
import type { ICocktail } from "../utils/mapRawCocktailData";
import { CocktailCard } from "./CocktailCard";
import { Link } from "react-router-dom";
import { useMediaQuery } from "../hooks/useMediaQuery";

export const Landing = (): ReactElement => {
  const [cocktail, setCocktail] = useState<ICocktail>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

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
    <article>
      <div className={`${isDesktop ? "center-flex" : "center-text"}`}>
        <h2>Discover a Random Cocktail</h2>
        <div className="center-flex mt mb">
          <button className="btn btn--primary" onClick={loadCocktail}>
            Another round
          </button>
          <Link to="/search">
            <button className="btn btn--search">Search</button>
          </Link>
        </div>
      </div>

      {cocktail ? (
        <CocktailCard item={cocktail} />
      ) : (
        isLoading && <p>Loading…</p>
      )}
    </article>
  );
};
