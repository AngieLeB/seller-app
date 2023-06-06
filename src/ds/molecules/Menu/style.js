import { styled } from "@mui/material/styles";
import { Link } from "@mui/material";

export const Nav = styled("nav")(({ theme }) => ({
  background: theme.palette.secondary.main,
}));

export const MenuList = styled("ol")(() => ({
  display: "flex",
  listStyleType: "none",
  padding: 0,
  margin: 0,
  height: "40px",
}));

export const MenuListItem = styled("li")(() => ({
  color: "white",
  height: "40px",
}));

export const MenuListLink = styled(Link, {
  shouldForwardProp: (prop) => prop !== "current",
})(({ current, theme }) => ({
  display: "flex",
  alignItems: "center",
  height: theme.spacing(5),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  textDecoration: "none",
  color: theme.palette.common.white,
  ...(current && {
    backgroundColor: theme.palette.primary.dark,
  }),
}));
