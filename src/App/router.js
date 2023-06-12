import { ProductRoute } from "../ds/molecules";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../ds/templates";
import { CommandesPage, ErrorPage, HomePage, ProductsPage } from "./pages";

export default createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
        children: [
          {
            path: ":productId",
            element: <ProductRoute />,
          },
        ],
      },
      {
        path: "commandes",
        element: <CommandesPage />,
      },
    ],
  },
]);
