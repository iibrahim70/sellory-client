import data from "@/assets/data/products.json";
import { DealOfTheDayCard } from "./cards";

const DealOfTheDay = () => {
  return (
    <section className="container pt-10 lg:pt-20 space-y-5 lg:space-y-10">
      <h4>Deal Of The Day</h4>

      <DealOfTheDayCard data={data} />
    </section>
  );
};

export default DealOfTheDay;
