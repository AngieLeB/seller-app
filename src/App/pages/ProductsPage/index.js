import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import {
  ProductImage,
  ConditionProductChip,
  Price,
  ProductLink,
} from "../../../ds/atoms";
import { useProducts } from "../../../hooks";

const columns = [
  {
    field: "imageUrl",
    headerName: "Image",
    width: 125,
    renderCell: ProductImage,
    sortable: false,
  },
  { field: "name", headerName: "Produit", renderCell: ProductLink, width: 500 },
  {
    field: "condition",
    headerName: "Condition",
    width: 150,
    renderCell: ConditionProductChip,
  },
  {
    field: "price",
    headerName: "Prix",
    width: 150,
    renderCell: Price,
  },
  {
    field: "stock",
    headerName: "Stock",
    description: "Stock disponible à la vente",
    width: 150,
  },
];

export default function ProductsPage() {
  const { isLoading, products } = useProducts();

  return (
    <Box sx={{ height: 800 }}>
      <DataGrid
        rows={products}
        columns={columns}
        disableRowSelectionOnClick
        rowHeight={100}
        loading={isLoading}
      />
    </Box>
  );
}
