import Link from "next/link";
import { BlurredImage } from "../shared";
import { Button } from "../ui";
import { IVendor } from "@/types/vendor";
import { Star } from "lucide-react";

export const VendorCard = ({ item }: { item: IVendor }) => {
  return (
    <Link href="/" className="shadow border rounded p-5 space-y-5">
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
              <p className="font-semibold">
                <span className="text-black">Products</span> ({item?.products})
              </p>

              <div className="flex items-center gap-1">
                <Star
                  className="size-5 text-yellow-500"
                  fill="currentColor"
                  stroke="none"
                />

                <div className="flex items-center gap-1 text-sm">
                  <span className="font-semibold">{item?.rating}</span>
                  <span className="text-muted-foreground">
                    ({item?.totalRating})
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Button size="sm">Visit Store</Button>
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
  );
};
