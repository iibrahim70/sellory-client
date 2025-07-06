import data from "@/assets/data/vendors.json";
import { VendorCard } from "./cards";

const TopVendors = () => {
  return (
    <section className="container pt-10 lg:pt-20 space-y-5 lg:space-y-10">
      <h4>Weekly Top Vendors</h4>

      <VendorCard data={data} />
    </section>
  );
};

export default TopVendors;
