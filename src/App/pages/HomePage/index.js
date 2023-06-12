import { Typography } from "@mui/material";
import { Image } from "mui-image";

export default function HomePage() {
  return (
    <>
      <Typography variant="h2"> {"Hey You!"}</Typography>
      <Image
        src="https://gifdb.com/images/high/mr-bean-waving-fingers-h7zzx33tdipb9fim.gif"
        alt="hey"
        width={200}
      />
    </>
  );
}
