import { MenuList, MenuListItem, MenuListLink, Nav } from "./style";
import { arrayOf, shape, string } from "prop-types";

export default function Menu({ items }) {
  return (
    <Nav>
      <MenuList>
        {items.map(({ name, route }) => (
          <MenuListItem key={route}>
            <MenuListLink href={route}>{name}</MenuListLink>
          </MenuListItem>
        ))}
      </MenuList>
    </Nav>
  );
}

Menu.propTypes = {
  items: arrayOf(shape({ name: string, route: string })),
};
