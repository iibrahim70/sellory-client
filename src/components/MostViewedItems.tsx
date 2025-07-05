import Image from "next/image";
import productsData from "@/assets/data/products.json";
import Rating from "./ui/Rating";
import {
  CarouselNext,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
} from "./ui/carousel";

const MostViewedItems = () => {
  return (
    <section className="container py-10 space-y-10">
      <h4>Most Viewd Items</h4>

      <Carousel className="w-full">
        <CarouselContent className="gap-5 p-5">
          {productsData?.map((item) => (
            <CarouselItem
              key={item?.title}
              className="bg-white shadow-md p-0 sm:basis-1/2 md:basis-1/3 xl:basis-1/4"
            >
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

                <Rating
                  rating={item?.rating}
                  totalRatings={item?.totalRating}
                />

                <div className="flex items-center gap-3">
                  <h6>${item?.discountPrice}</h6>

                  <div className="flex items-center gap-3">
                    <s>${item?.price}</s>
                    <p>-{item?.discount}%</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default MostViewedItems;
