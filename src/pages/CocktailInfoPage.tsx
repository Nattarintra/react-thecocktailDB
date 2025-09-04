import { useEffect, useState, type ReactElement } from "react";
import { useParams } from "react-router";
import type { ICocktail } from "../utils/mapRawCocktailData";
import { getCocktailById } from "../api/cocktailApi";
import { CocktailDetails } from "../components/CocktailDetails";

export const CocktailInfoPage = (): ReactElement => {
  const { id } = useParams();
  const [cocktailInfo, setCocktailInfo] = useState<ICocktail>();

  useEffect(() => {
    if (id) {
      getCocktailById(id).then(setCocktailInfo);
    }
  }, [id]);

  return (
    <section id="cocktail-info-page" className="container">
      {cocktailInfo ? (
        <CocktailDetails info={cocktailInfo} />
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
};
