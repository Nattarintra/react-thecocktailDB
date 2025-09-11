import { useEffect, useState, type ReactElement, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { MenuMobile } from "./MenuMobile";
import { Navbar } from "./Navbar";
import { Button } from "./Button";

export const Header = (): ReactElement => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

  useEffect(() => {
    if (isDesktop) setOpen(false);
  }, [isDesktop]);

  const handleOnClickMenu = () => {
    setOpen((open) => !open);
  };

  const renderMenuForDesktop = (): ReactNode => {
    return isDesktop ? (
      <Navbar />
    ) : (
      <Button variant="menu" onClick={handleOnClickMenu} open={open} />
    );
  };

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
        {renderMenuForDesktop()}
        {open && <MenuMobile isOpen={open} onClose={() => setOpen(false)} />}
      </div>
    </header>
  );
};
