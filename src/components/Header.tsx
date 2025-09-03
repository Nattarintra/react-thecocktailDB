import type { ReactElement } from "react";
import { Link, NavLink } from "react-router";

export const Header = (): ReactElement => {
  return (
    <header id="header" className="header">
      <div className="container header__inner">
        <Link to="/" className="brand">
          <h1 className="brand__title">
            Nattarintra
            <span style={{ color: "var(--color-gold)" }}>Mix</span>
          </h1>
          <p className="badge">Cocktail 🍹 Wiki</p>
        </Link>

        <nav className="nav">
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
      </div>
    </header>
  );
};
