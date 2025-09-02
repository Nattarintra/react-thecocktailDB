import type { ReactElement } from "react";

export interface IThumpnailProps {
  url: string;
  alt: string;
}

export const Thumpnail = ({ url, alt }: IThumpnailProps): ReactElement => {
  return (
    <figure>
      <img src={url} alt={alt} />
    </figure>
  );
};
