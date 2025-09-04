import type { ReactElement } from "react";

export interface IThumbnailProps {
  url: string;
  alt?: string;
}

export const Thumbnail = ({ url, alt }: IThumbnailProps): ReactElement => {
  return (
    <figure>
      <img src={url} alt={alt} />
    </figure>
  );
};
