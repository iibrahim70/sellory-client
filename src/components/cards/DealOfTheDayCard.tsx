import { Eye, Hand, Tag } from "lucide-react";
import { BlurredImage } from "../shared";
import { Badge, Button } from "../ui";
import { IProduct } from "@/types";

export const DealOfTheDayCard = ({ item }: { item: IProduct }) => {
  return (
    <div className="flex items-center justify-between gap-1.5 border rounded overflow-hidden group transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-pointer">
      <div className="w-[40%] relative h-full">
        <BlurredImage
          src={item?.image}
          alt={item?.title}
          className="w-full h-full object-cover"
        />

        <Badge className="absolute top-2 left-2" variant="destructive">
          {Math.round(
            ((item?.price - item?.discountPrice) / item?.price) * 100
          )}
          % OFF
        </Badge>
      </div>

      <div className="w-[60%] p-3.5 space-y-3.5">
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

        <div className="bg-green-100 font-semibold rounded-md p-1.5 flex items-center justify-center gap-2">
          <Tag className="size-5" />
          <span>
            You Can Save ${(item?.price - item?.discountPrice).toFixed(2)}!
          </span>
        </div>

        <div className="space-y-3.5">
          <div className="flex items-center justify-between">
            <Button className="w-[60%]">
              <Hand />
              <span>Grab Deal</span>
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
