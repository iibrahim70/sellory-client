import Link from "next/link";
import { BlurredImage } from "../shared";
import { Button, buttonVariants, Rating } from "../ui";
import { IVendor } from "@/types/vendors";

export const VendorCard = ({ data }: { data: IVendor[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {data?.map((item) => (
        <Link
          href="/"
          key={item?.name}
          className="shadow border rounded p-5 space-y-5"
        >
          <div className="flex items-center justify-between gap-5">
            <div className="flex items-center gap-5">
              <BlurredImage
                src={item?.avatar}
                alt={item?.name}
                className="rounded-full size-20 object-cover"
              />

              <div className="space-y-1">
                <h6 className="whitespace-nowrap">{item?.name}</h6>

                <div className="flex items-center gap-2.5">
                  <p className="font-semibold">Products ({item?.products})</p>
                  <Rating
                    rating={item?.rating}
                    totalRatings={item?.totalRating}
                  />
                </div>
              </div>
            </div>

            <Link href="/" className={buttonVariants({ size: "sm" })}>
              Visit Store
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <BlurredImage
              src={item?.images[0]}
              alt="Product Image"
              className="h-full w-full object-cover rounded"
            />

            <div className="space-y-2">
              <BlurredImage
                src={item?.images[1]}
                alt="Product Image"
                className="w-full object-cover rounded"
              />

              <BlurredImage
                src={item?.images[2]}
                alt="Product Image"
                className="w-full object-cover rounded"
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
