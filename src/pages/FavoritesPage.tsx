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
      <h2 className="center-text mb">My Favorites</h2>
      <article className="favorite-wrapper center-flex ">
        {favorites ? (
          favorites.map((item) => (
            <div key={item.id} className="card favorite-card">
              <Thumbnail url={item.thumbnail} alt={item.name} />
              <div className="favorite__inner center-flex text-size">
                <p>{item.name}</p>
                <Link to={`/cocktailinfo/${item.id}`} className="btn--ghost">
                  see more
                </Link>
                <span
                  className="material-symbols-outlined"
                  style={{
                    fontVariationSettings: `"FILL" 1`,
                    cursor: "pointer",
                  }}
                  onClick={() => handleRemove(item.id)}
                >
                  favorite
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="center-text mt mb">You have no favorite items yet...</p>
        )}
      </article>
    </section>
  );
};
