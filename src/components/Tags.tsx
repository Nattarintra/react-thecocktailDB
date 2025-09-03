import type { ReactElement } from "react";
import { Link } from "react-router";

export const Tags = (): ReactElement => {
  return (
    <div>
      <Link to="/"> This is tag</Link>
      <Link to="/"> This is tag</Link>
      <Link to="/"> This is tag</Link>
    </div>
  );
};
