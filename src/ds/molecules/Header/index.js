import { Typography, AppBar, Toolbar, Link as MuiLink } from "@mui/material";
import { UserContext } from "../../../context";
import { string } from "prop-types";
import { Link } from "react-router-dom";

export default function Header({ title, caption }) {
  const { isLoggedIn, salesChannel } = UserContext.useUser();
  console.log({ isLoggedIn, salesChannel });
  return (
    <AppBar position="static">
      <Toolbar>
        <MuiLink
          component={Link}
          to="/"
          sx={{ color: "white", textDecoration: "none" }}
        >
          <Typography variant="h5" component="h1">
            {title}
          </Typography>
        </MuiLink>
        <Typography sx={{ paddingLeft: 3 }}>{caption}</Typography>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = { title: string, caption: string };
