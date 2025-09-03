import type { ReactElement } from "react";
import type { ICocktail } from "../utils/mapRawCocktailData";
import { Thumpnail } from "./Thumpnail";
import { Tags } from "./Tags";

interface IInfoCardProps {
  info: ICocktail;
}

export const InfoCard = ({ info }: IInfoCardProps): ReactElement => {
  const { thumbnail, name, instructions, ingredients } = info;
  // const imageUrl = fetchIngredientImage(ingredient); // continue working with how to pass ingredient name
  return (
    <article className="center-block">
      <div className="left">
        <p className="top">{name}</p>
        <Thumpnail url={thumbnail} alt={name} />
        <Tags />
      </div>
      <div className="right">
        <p className="center-text top">Ingredients</p>
        <div className="">
          {ingredients.map((igd) => (
            <>
              <p>{igd.ingredient}</p>

              <p>{igd.measure}</p>
            </>
          ))}
        </div>
      </div>

      <div>
        <p>Instructions</p>
        <p>{instructions}</p>
      </div>
    </article>
  );
};
