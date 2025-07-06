import data from "@/assets/data/products.json";
import { ProductCard } from "./cards";

const Products = () => {
  return (
    <section className="container py-10 lg:py-20 space-y-5 lg:space-y-10">
      <h4>For You Needs</h4>

      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {data?.slice(0, 8)?.map((item) => (
          <ProductCard item={item} key={item?.id} />
        ))}
      </div>
    </section>
  );
};

export default Products;
