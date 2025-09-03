import { useEffect, useState, type ReactElement } from "react";
import { useParams } from "react-router";
import type { ICocktail } from "../utils/mapRawCocktailData";
import { getCocktailById } from "../api/cocktailApi";
import { InfoCard } from "../components/InfoCard";

export const CocktailInfoPage = (): ReactElement => {
  const { id } = useParams();
  const [cocktailInfo, setCocktailInfo] = useState<ICocktail>();

  useEffect(() => {
    if (id) {
      getCocktailById(id).then(setCocktailInfo);
      console.log("data " + cocktailInfo);
    }
  }, [id]);

  return (
    <section>
      {cocktailInfo ? <InfoCard info={cocktailInfo} /> : <p>Loading...</p>}
    </section>
  );
};
