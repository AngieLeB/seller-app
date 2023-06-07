import { MenuList, MenuListLink, Nav } from "./style";
import { arrayOf, shape, string } from "prop-types";
import { Link } from "react-router-dom";

export default function Menu({ items }) {
  return (
    <Nav>
      <MenuList>
        {items.map(({ name, route }) => (
          <li key={route}>
            <MenuListLink to={route} component={Link}>
              {name}
            </MenuListLink>
          </li>
        ))}
      </MenuList>
    </Nav>
  );
}

Menu.propTypes = {
  items: arrayOf(shape({ name: string, route: string })),
};
