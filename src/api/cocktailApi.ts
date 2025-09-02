import {
  mapRawCocktailData,
  type ICocktail,
} from "../utils/mapRawCocktailData";

const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1";

export const fetchRandomCocktail = async (): Promise<ICocktail> => {
  const result = await fetch(`${BASE_URL}/random.php`);

  const data = await result.json();
  const cocktail = mapRawCocktailData(data.drinks[0]);

  return cocktail;
};
