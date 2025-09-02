import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import App from "./App"
import { CocktailInfoPage } from "./pages/CocktailInfoPage"
import { FavoritesPage } from "./pages/FavoritesPage"
import { HomePage } from "./pages/HomePage"
import { IngredientPage } from "./pages/IngredientPage"
import { SearchPage } from "./pages/SearchPage"

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/cocktailinfo" element={<CocktailInfoPage />} />
      <Route path="/ingredient" element={<IngredientPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
    </Route>
  )
)
