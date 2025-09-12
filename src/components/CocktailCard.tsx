import { type ReactElement } from "react";
import { Thumbnail } from "./Thumbnail";
import type { ICocktail } from "../utils/mapRawCocktailData";
import { Link } from "react-router-dom";

import { useFavorites } from "../hooks/useFavorites";

interface ICocktailCardProps {
  item: ICocktail;
  isLoading?: boolean;
}

export const CocktailCard = ({
  item,
  isLoading,
}: ICocktailCardProps): ReactElement => {
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
    <div className="card center-block">
      <Thumbnail url={thumbnail} alt={name} />
      <div className="center-flex mt mb">
        <p>{name}</p>
        <Link to={`/cocktailinfo/${id}`} className="btn--ghost">
          see more
        </Link>
        <span className={favClasses.join(" ")} onClick={handleOnFavoriteClick}>
          favorite
        </span>
      </div>
      {isLoading && <p className="center-text">Loading...</p>}
    </div>
  );
};
