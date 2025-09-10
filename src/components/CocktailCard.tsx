import { type ReactElement } from "react";
import { Thumbnail } from "./Thumbnail";
import type { ICocktail } from "../utils/mapRawCocktailData";
import { Link } from "react-router-dom";

import { useFavorites } from "../hooks/useFavorites";

interface ICocktailCardProps {
  item: ICocktail;
}

export const CocktailCard = ({ item }: ICocktailCardProps): ReactElement => {
  const { id, thumbnail, name } = item;

  const { checkIfFavorite, add, remove } = useFavorites();

  const isFavorite = checkIfFavorite(id);
  const favClasses = ["material-symbols-outlined", "favorite"];
  if (isFavorite) favClasses.push("is-favorite");

  const handleOnFavoriteClick = () => {
    if (isFavorite) {
      return remove(id);
    }

    add(item);
  };
  return (
    <article className="card center-block">
      <Thumbnail url={thumbnail} alt={name} />
      <div className="center-flex ">
        <p>{name}</p>
        <Link to={`/cocktailinfo/${id}`} className="btn btn--ghost">
          see more
        </Link>
        <span className={favClasses.join(" ")} onClick={handleOnFavoriteClick}>
          favorite
        </span>
      </div>
    </article>
  );
};
