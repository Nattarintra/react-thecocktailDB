import type { ReactElement } from "react";
import { Thumpnail } from "./Thumpnail";
import type { ICocktail } from "../utils/mapRawCocktailData";
import { Link } from "react-router";

interface ICocktailCardProps {
  item: ICocktail;
}

export const CocktailCard = ({ item }: ICocktailCardProps): ReactElement => {
  const { thumbnail, name } = item;
  return (
    <article className="card center-block">
      <Thumpnail url={thumbnail} alt={name} />
      <div className="center-flex ">
        <p>{name}</p>
        <Link to="/ingredient" className="btn btn--ghost">
          see more
        </Link>
      </div>
    </article>
  );
};
