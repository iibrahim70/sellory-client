import data from "@/assets/data/products.json";
import { Zap } from "lucide-react";
import { FlashSaleCard } from "./cards";

const FlashSale = () => {
  return (
    <section className="container pt-10 lg:pt-20 space-y-5 lg:space-y-10">
      <div className="flex items-center gap-2.5">
        <Zap className="size-8 text-red-500" />
        <h4>Flash Sale</h4>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {data?.slice(0, 8)?.map((item) => (
          <FlashSaleCard item={item} key={item?.id} />
        ))}
      </div>
    </section>
  );
};

export default FlashSale;
