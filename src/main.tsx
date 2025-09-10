import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";
import { FavoriteContextProvider } from "./context/FavoriteContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <FavoriteContextProvider>
    <RouterProvider router={router} />
  </FavoriteContextProvider>
);
