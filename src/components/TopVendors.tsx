import data from "@/assets/data/vendors.json";
import { VendorCard } from "./cards";

const TopVendors = () => {
  return (
    <section className="container py-10 space-y-10">
      <h4>Weekly Top Vendors</h4>

      <VendorCard data={data} />
    </section>
  );
};

export default TopVendors;
