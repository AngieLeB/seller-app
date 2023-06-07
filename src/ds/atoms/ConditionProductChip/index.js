import { Chip } from "@mui/material";
import { productType } from "../../../utils/types";

const labels = { new: "Nouveau", used: "Occasion" };

export default function ConditionProductChip({ row: { condition } }) {
  return (
    <Chip
      label={labels[String(condition)]}
      color="primary"
      variant={condition === "used" ? "outlined" : "filled"}
    />
  );
}

ConditionProductChip.propTypes = { row: productType };
