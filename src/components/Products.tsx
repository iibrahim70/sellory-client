import data from "@/assets/data/products.json";
import { ProductCard } from "./cards";

const Products = () => {
  return (
    <section className="container py-10 lg:py-20 space-y-5 lg:space-y-10">
      <h4>For You Needs</h4>

      <ProductCard data={data} />
    </section>
  );
};

export default Products;
