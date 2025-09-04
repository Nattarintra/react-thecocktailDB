import type { ReactElement } from "react";
import { getIngredientImage } from "../api/cocktailApi";

interface IIngreThumpnailProps {
  name: string;
}
export const IngreThumpnail = ({
  name,
}: IIngreThumpnailProps): ReactElement => {
  const imageUrl = getIngredientImage(name);
  return <img src={imageUrl} alt={name} />;
};
