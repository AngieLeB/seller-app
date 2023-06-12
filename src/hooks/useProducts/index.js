import { useQuery } from "react-query";
import api from "../../api";

export default function useProducts({ productId } = {}) {
  const queryKey = productId ? ["products", { productId }] : ["products"];
  const productUrl = productId ? `products/${productId}` : "products";

  const queryResult = useQuery(
    queryKey,
    async () => await api.get(productUrl).json()
  );
  const ressource = productId
    ? { product: queryResult.data }
    : { products: queryResult.data || [] };
  return { ...queryResult, ...ressource };
}
