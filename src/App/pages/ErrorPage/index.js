import { Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div>
      <Typography variant="h4">Oops!</Typography>
      <p>I did it again!</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
