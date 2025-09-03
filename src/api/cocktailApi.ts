import {
  mapRawCocktailData,
  type ICocktail,
} from "../utils/mapRawCocktailData";

const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1";

export const getRandomCocktail = async (): Promise<ICocktail> => {
  const result = await fetch(`${BASE_URL}/random.php`);

  const data = await result.json();
  const cocktail = mapRawCocktailData(data.drinks[0]);

  return cocktail;
};

export const getCocktailById = async (id: string): Promise<ICocktail> => {
  const result = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
  const data = await result.json();
  const cocktailId = mapRawCocktailData(data.drinks[0]);
  return cocktailId;
};

export const getIngredientImage = (name: string): string => {
  return `https://www.thecocktaildb.com/images/ingredients/${name}-small.png`;
};
