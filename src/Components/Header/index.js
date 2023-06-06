import { Typography, AppBar, Toolbar } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" component="h1">
          SellerApp
        </Typography>
        <Typography sx={{ paddingLeft: 3 }}>
          <p>Bienvenue dans votre espace vendeur</p>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
