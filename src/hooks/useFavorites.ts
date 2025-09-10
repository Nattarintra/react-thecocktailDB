import { useContext } from "react";
import { FavoriteContext } from "../context/FavoriteContext";

export function useFavorites() {
  const ctx = useContext(FavoriteContext);
  if (!ctx) {
    throw new Error(
      "useFavorites must be used inside <FavoriteContextProvider>"
    );
  }
  return ctx;
}
