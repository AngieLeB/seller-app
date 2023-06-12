import { Outlet } from "react-router-dom";
import { Header, Menu } from "../../molecules";

const items = [
  { name: "Produits", route: "/products" },
  { name: "Commandes", route: "/commandes" },
  { name: "Finances", route: "/finances" },
  { name: "Rapports", route: "/rapports" },
  { name: "Messages", route: "/messages" },
  { name: "Marketplaces", route: "/marketplaces" },
];

export default function Layout() {
  return (
    <>
      <Header
        title="Seller Zone"
        caption="Bienvenue dans votre espace vendeur"
      />
      <Menu items={items} />
      <Outlet />
    </>
  );
}
