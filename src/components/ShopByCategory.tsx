import { categories } from "@/assets/data/categories";
import Image from "next/image";
import Link from "next/link";
import { BlurredImage } from "./shared";

const ShopByCategory = () => {
  return (
    <section className="container py-20 space-y-10">
      <h3>Shop by Category</h3>

      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-10 gap-5">
        {categories?.map((item, index) => (
          <Link key={index} href="/" className="group text-center space-y-2.5">
            <div className="size-32 bg-gray-200 rounded-full overflow-hidden border-2 border-transparent group-hover:border-purple-600 group-hover:shadow-md transition-all duration-300 transform group-hover:scale-105">
              <BlurredImage
                src={item?.image}
                alt={item?.name}
                className="p-5 w-full h-full object-cover"
              />
            </div>

            <p className="font-semibold group-hover:text-purple-600 transition-colors duration-300">
              {item?.name}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ShopByCategory;
