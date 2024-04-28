import Image from "next/image";
import productsData from "../../public/products.json";
import Rating from "./ui/Rating";
import { FaArrowRight } from "react-icons/fa";

const DailyDiscover = () => {
  return (
    <section className="section-wrapper py-10 space-y-10">
      <div className="flex items-center justify-between gap-5">
        <h4>Daily Discover</h4>

        <button className="flex items-center gap-2">
          <p className="font-semibold">See More</p>
          <FaArrowRight />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {productsData?.map((item) => (
          <div key={item?.title} className="bg-white shadow-md flex flex-col">
            <Image
              src={item?.image}
              alt={item?.title}
              width={500}
              height={500}
              className="w-full size-40 object-cover"
            />

            <div className="p-5 space-y-1">
              <p className="font-semibold text-base line-clamp-1">
                {item?.title}
              </p>

              <Rating rating={item?.rating} totalRatings={item?.totalRating} />

              <div className="flex items-center gap-3">
                <h6>${item?.discountPrice}</h6>

                <div className="flex items-center gap-3">
                  <s>${item?.price}</s>
                  <p>-{item?.discount}%</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DailyDiscover;
