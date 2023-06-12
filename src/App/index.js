import { CssBaseline, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import theme from "./theme";
import router from "./router";
import { UserContext } from "../context";

const client = new QueryClient();
const user = {};

export default function App() {
  return (
    <QueryClientProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <UserContext.Provider user={user}>
          <RouterProvider router={router} />
        </UserContext.Provider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
