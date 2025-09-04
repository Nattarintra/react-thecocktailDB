import type { ReactElement } from "react";
import { Thumbnail } from "./Thumbnail";
import type { ICocktail } from "../utils/mapRawCocktailData";
import { Link } from "react-router";

interface ICocktailCardProps {
  item: ICocktail;
}

export const CocktailCard = ({ item }: ICocktailCardProps): ReactElement => {
  const { id, thumbnail, name } = item;
  return (
    <article className="card center-block">
      <Thumbnail url={thumbnail} alt={name} />
      <div className="center-flex ">
        <p>{name}</p>
        <Link to={`/cocktailinfo/${id}`} className="btn btn--ghost">
          see more
        </Link>
      </div>
    </article>
  );
};
