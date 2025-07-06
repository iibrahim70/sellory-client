import { CreditCard, Eye } from "lucide-react";
import { BlurredImage } from "../shared";
import { Badge, Button, CountdownTimer } from "../ui";
import { IProduct } from "@/types";

export const FlashSaleCard = ({ item }: { item: IProduct }) => {
  return (
    <div className="border rounded overflow-hidden group transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-pointer">
      <div className="relative">
        <BlurredImage
          src={item?.image}
          alt={item?.title}
          className="w-full h-[200px] object-cover"
        />

        <Badge className="absolute top-2 right-2" variant="destructive">
          {Math.round(
            ((item?.price - item?.discountPrice) / item?.price) * 100
          )}
          % OFF
        </Badge>
      </div>

      <div className="p-3.5 space-y-3.5">
        <div className="space-y-1">
          <h6 className="truncate">{item?.title}</h6>
          <p>{item?.description}</p>
        </div>

        <div className="flex items-center gap-2.5">
          <h6>${item?.discountPrice}</h6>

          <span className="text-sm text-gray-500 line-through">
            ${item?.price}
          </span>
        </div>

        <div className="space-y-3.5">
          <CountdownTimer targetDate={item?.endTime} />

          <div className="flex items-center justify-between">
            <Button className="w-[60%]">
              <CreditCard />
              <span>Buy Now</span>
            </Button>

            <Button variant="outline" className="w-[35%]">
              <Eye />
              <span>Preview</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
