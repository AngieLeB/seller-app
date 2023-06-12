import { Box, Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Outlet, useParams } from "react-router-dom";
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
  {
    field: "name",
    headerName: "Produit",
    renderCell: ProductLink,
    width: 325,
  },
  {
    field: "condition",
    headerName: "Condition",
    width: 125,
    renderCell: ConditionProductChip,
  },
  {
    field: "price",
    headerName: "Prix",
    width: 75,
    renderCell: Price,
  },
  {
    field: "stock",
    headerName: "Stock",
    description: "Stock disponible à la vente",
    width: 25,
  },
];

export default function ProductsPage() {
  const { isLoading, products } = useProducts();
  const { productId } = useParams();
  const leftWidth = productId ? 7 : 12;
  const rigthWidth = productId ? 5 : 12;
  return (
    <>
      <Grid container>
        <Grid item xs={leftWidth}>
          <Box sx={{ height: 800 }}>
            <DataGrid
              rows={products}
              columns={columns}
              disableRowSelectionOnClick
              rowHeight={100}
              loading={isLoading}
            />
          </Box>
        </Grid>
        <Grid item component="aside" xs={rigthWidth}>
          <aside>
            <Outlet />
          </aside>
        </Grid>
      </Grid>
    </>
  );
}
