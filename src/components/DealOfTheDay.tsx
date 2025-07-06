import data from "@/assets/data/products.json";
import { DealOfTheDayCard } from "./cards";

const DealOfTheDay = () => {
  return (
    <section className="container pt-10 lg:pt-20 space-y-5 lg:space-y-10">
      <h4>Deal Of The Day</h4>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {data?.slice(0, 8)?.map((item) => (
          <DealOfTheDayCard item={item} key={item?.id} />
        ))}
      </div>
    </section>
  );
};

export default DealOfTheDay;
