import type { ReactElement } from "react";

interface IButtonProps {
  variant: string;
  open?: boolean;
  onClick: () => void;
}

export const Button = ({
  variant,
  open,
  onClick,
}: IButtonProps): ReactElement => {
  return (
    <button
      className="material-symbols-outlined btn--menu"
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      onClick={onClick}
    >
      {variant}
    </button>
  );
};
