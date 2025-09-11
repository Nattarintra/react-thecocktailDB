import type { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "../../hooks/useMediaQuery";

interface INavbarProps {
  onClick?: () => void;
}

export const Navbar = ({ onClick }: INavbarProps): ReactElement => {
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

  const classes: string[] = ["text-capitalize"];
  if (isDesktop) classes.push("nav");
  else classes.push("drawer-nav");

  return (
    <nav className={classes.join(" ")} onClick={onClick}>
      <NavLink className="link" to="/">
        home
      </NavLink>
      <NavLink className="link" to="/search">
        search
      </NavLink>
      <NavLink className="link" to="/favorites">
        favorites
      </NavLink>
    </nav>
  );
};
