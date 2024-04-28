import Image from "next/image";
import vendorsData from "../../public/vendors.json";
import Rating from "./ui/rating";

const TopVendors = () => {
  return (
    <section className="section-wrapper py-10 space-y-10">
      <h4>Weekly Top Vendors</h4>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {vendorsData?.map((item) => (
          <div key={item?.title} className="bg-white shadow-md p-5 space-y-5">
            <div className="flex items-center gap-5">
              <Image
                src={item?.avatar}
                alt={item?.title}
                width={500}
                height={500}
                className="size-24 object-cover"
              />

              <div className="space-y-1">
                <h6 className="whitespace-nowrap">{item?.title}</h6>

                <div className="flex items-center gap-5">
                  <p className="font-semibold whitespace-nowrap">
                    Items ({item.products})
                  </p>
                  <Rating
                    rating={item?.rating}
                    totalRatings={item?.totalRating}
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <Image
                  src={item?.images[0]}
                  width={500}
                  height={500}
                  alt="Product Image"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="space-y-2">
                <Image
                  src={item?.images[1]}
                  width={500}
                  height={500}
                  alt="Product Image"
                  className="w-full object-cover"
                />

                <Image
                  src={item?.images[2]}
                  width={500}
                  height={500}
                  alt="Product Image"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopVendors;
