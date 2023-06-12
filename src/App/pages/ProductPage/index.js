import { useProducts } from "../../../hooks";
import { useParams } from "react-router-dom";
import { CircularProgress, Typography } from "@mui/material";
import { Image } from "mui-image";

//TODO refactor Image and ProductImage
export default function ProductPage() {
  const { productId } = useParams();
  const { isLoading, product } = useProducts({ productId });
  if (isLoading) return <CircularProgress />;
  const { name, imageUrl } = product;
  return (
    <>
      <Typography variant="h2">{name}</Typography>
      <Image src={imageUrl} alt={name} width={200} duration={250} />
    </>
  );
}
