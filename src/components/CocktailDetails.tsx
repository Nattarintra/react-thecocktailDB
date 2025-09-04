import type { ReactElement } from "react";
import type { ICocktail } from "../utils/mapRawCocktailData";
import { Thumbnail } from "./Thumbnail";
import { Tags } from "./Tags";
import { IngreThumbnail } from "./IngreThumbnail";

interface IInfoCardProps {
  info: ICocktail;
}

export const CocktailDetails = ({ info }: IInfoCardProps): ReactElement => {
  const { thumbnail, tags, name, instructions, ingredients, glass, category } =
    info;

  return (
    <article className="info-wrapper">
      <div className="info__inner">
        <div className="left">
          <p className="center-text lare-text">{name}</p>
          <Thumbnail url={thumbnail} alt={name} />
          <div className="center-flex">
            {tags &&
              tags.length > 0 &&
              tags.map((tag) => <Tags key={tag} tag={tag} />)}
          </div>
          <p className="center-text">Category: {category}</p>
        </div>
        <div className="right">
          <p className="center-text medium-text">Ingredients</p>
          <div className="ingredient-wrapper">
            {ingredients.map((ingre) => (
              <div className="ingredient-card">
                <IngreThumbnail name={ingre.ingredient} />
                <div className="center-text">
                  <p>{ingre.ingredient}</p>
                  <p>{ingre.measure}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="instructions">
        <p className="medium-text">Instructions</p>
        <p className="glass">Glass: {glass}</p>
        <p>{instructions}</p>
      </div>
    </article>
  );
};
