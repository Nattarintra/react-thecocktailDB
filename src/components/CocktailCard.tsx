import type { ReactElement } from "react";
import { Thumpnail } from "./Thumpnail";
import type { ICocktail } from "../utils/mapRawCocktailData";

interface ICocktailCardProps {
  item: ICocktail;
}

export const CocktailCard = ({ item }: ICocktailCardProps): ReactElement => {
  const { thumbnail, name } = item;
  return (
    <section>
      <Thumpnail url={thumbnail} alt={name} />
      <div>
        <p>{name}</p>
        <button>see more</button>
      </div>
    </section>
  );
};
