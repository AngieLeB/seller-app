import { shape, string, oneOf } from "prop-types";

export const productType = shape({
  imageUrl: string,
  name: string,
  condition: oneOf(["new", "used"]),
});
