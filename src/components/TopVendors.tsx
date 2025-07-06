import data from "@/assets/data/vendors.json";
import { VendorCard } from "./cards";

const TopVendors = () => {
  return (
    <section className="container pt-10 lg:pt-20 space-y-5 lg:space-y-10">
      <h4>Weekly Top Vendors</h4>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data?.map((item) => (
          <VendorCard item={item} key={item?.id} />
        ))}
      </div>
    </section>
  );
};

export default TopVendors;
