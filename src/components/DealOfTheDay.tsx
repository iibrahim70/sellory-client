import Image from "next/image";
import { Button } from "./ui/button";
import { FiShoppingCart } from "react-icons/fi";
import { GoGitCompare } from "react-icons/go";
import { GrView } from "react-icons/gr";
import Rating from "./ui/Rating";
import productsData from "../../public/products.json";
import banner from "@/assets/images/banner-2.png";

const DealOfTheDay = () => {
  return (
    <section className="section-wrapper py-10 space-y-10">
      <h4>Deal Of The Day</h4>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        {productsData?.slice(0, 2)?.map((item) => (
          <div key={item?.id} className="flex flex-col gap-5">
            <div className="bg-white flex flex-col lg:flex-row items-center gap-5 shadow-md p-5">
              <Image
                src={item?.image}
                alt={item?.title}
                width={200}
                height={200}
              />

              <div className="space-y-3">
                <h5 className="line-clamp-1">{item?.title}</h5>

                <Rating
                  rating={item?.rating}
                  totalRatings={item?.totalRating}
                />

                <div className="flex items-center gap-3">
                  <h5>${item?.discountPrice}</h5>

                  <div className="flex items-center gap-3">
                    <s>${item?.price}</s>
                    <p>-{item?.discount}%</p>
                  </div>
                </div>

                <p>{item?.description}</p>

                <div className="flex items-center gap-5">
                  <Button
                    variant="secondary"
                    className="w-full flex items-center gap-3"
                  >
                    <GrView className="size-5" />
                    Preview
                  </Button>

                  <Button
                    variant="secondary"
                    className="w-full flex items-center gap-3"
                  >
                    <GoGitCompare className="size-5" />
                    Compare
                  </Button>
                </div>

                <Button className="w-full flex items-center gap-3">
                  <FiShoppingCart className="size-5" />
                  Add To Cart
                </Button>
              </div>
            </div>

            <Image src={banner} alt="Banner Image" className="w-full" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default DealOfTheDay;
