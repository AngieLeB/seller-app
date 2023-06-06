import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
import { Header, Menu } from "../ds/molecules";

const items = [
  { name: "Produits", route: "/products" },
  { name: "Commandes", route: "/commandes" },
  { name: "Finances", route: "/finances" },
  { name: "Rapports", route: "/rapports" },
  { name: "Messages", route: "/messages" },
  { name: "Marketplaces", route: "/marketplaces" },
];

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header
        title="Seller Zone"
        caption="Bienvenue dans votre espace vendeur"
      />
      <Menu items={items} />
    </ThemeProvider>
  );
}
