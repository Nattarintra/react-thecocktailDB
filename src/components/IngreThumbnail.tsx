import type { ReactElement } from "react";
import { getIngredientImage } from "../api/cocktailApi";

interface IIngreThumbnailProps {
  name: string;
}
export const IngreThumbnail = ({
  name,
}: IIngreThumbnailProps): ReactElement => {
  const imageUrl = getIngredientImage(name);
  return <img src={imageUrl} alt={name} />;
};
