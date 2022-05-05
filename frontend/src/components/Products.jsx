import { Grid } from "@chakra-ui/react";
import ProductItem from "./ProductItem.jsx";

const Products = ({ items }) => {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap="8" mt="8">
      {items.map((item, index) => <ProductItem key={index} item={item} />)}
    </Grid>
  );
};

export default Products;
