import { categories } from "@/assets/data/categories";
import Link from "next/link";
import { BlurredImage } from "./shared";

const ShopByCategory = () => {
  return (
    <section className="container pt-10 lg:pt-20 space-y-5 lg:space-y-10">
      <h4>Shop by Category</h4>

      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-10 gap-5">
        {categories?.map((item, index) => (
          <Link key={index} href="/" className="group text-center space-y-2.5">
            <div className="size-32 relative rounded-full overflow-hidden group border-2 border-transparent group-hover:border-purple-600 group-hover:shadow-md transition-all duration-300 transform group-hover:scale-105">
              {/* Blurred background image */}
              <BlurredImage
                src={item?.image}
                alt={item?.name}
                className="absolute inset-0 w-full h-full object-cover blur-xl scale-120 z-0"
              />

              {/* Main image on top */}
              <BlurredImage
                src={item?.image}
                alt={item?.name}
                className="relative z-10 p-5 w-full h-full object-cover"
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
