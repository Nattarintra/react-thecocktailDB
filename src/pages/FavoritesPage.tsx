import type { ReactElement } from "react";
import { useFavorites } from "../hooks/useFavorites";

import { Link } from "react-router-dom";
import { Thumbnail } from "../components/Thumbnail";

export const FavoritesPage = (): ReactElement => {
  const { favorites, remove } = useFavorites();
  const handleRemove = (id: string) => {
    remove(id);
  };

  return (
    <section id="favorites-page" className="container">
      <h2 className="center-text">My Favorites</h2>
      <article className="favorite-wrapper ">
        {favorites.map((item) => (
          <div key={item.id} className="card favorite-card">
            <Thumbnail url={item.thumbnail} alt={item.name} />
            <div className="favorite__inner center-flex">
              <p>{item.name}</p>
              <Link to={`/cocktailinfo/${item.id}`} className="btn btn--ghost">
                see more
              </Link>
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: `"FILL" 1`, cursor: "pointer" }}
                onClick={() => handleRemove(item.id)}
              >
                favorite
              </span>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};
