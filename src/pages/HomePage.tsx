import { type ReactElement } from "react";

import { Landing } from "../components/Landing";

export const HomePage = (): ReactElement => {
  return (
    <section id="home-page" className="container">
      <Landing />
    </section>
  );
};
