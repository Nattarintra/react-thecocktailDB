import type { ReactElement } from "react";
import { NavLink } from "react-router";

export const Header = (): ReactElement => {
  return (
    <header id="header">
      <h1> The CocktailDB</h1>
      <nav>
        <NavLink className="link" to="/">
          home
        </NavLink>
        <NavLink className="link" to="/search">
          search
        </NavLink>
        <NavLink className="link" to="/cocktail-info">
          cocktail info
        </NavLink>
      </nav>
    </header>
  );
};
