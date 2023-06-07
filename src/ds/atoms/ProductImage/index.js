import { Image } from "mui-image";
import { productType } from "../../../utils/types";

export default function ProductImage({ row }) {
  return <Image src={row.imageUrl} alt={row.name} width={200} duration={250} />;
}

ProductImage.propTypes = { row: productType };
