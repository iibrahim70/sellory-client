import { ChevronRight } from "lucide-react";
import { categories } from "@/assets/data/categories";
import Link from "next/link";
import HeroSlider from "./HeroSlider";
import { userHighlights } from "@/assets/data/user-highlights";

const Hero = () => {
  return (
    <section className="container pt-5 space-y-5">
      <div className="grid lg:grid-cols-9 gap-5">
        <div className="max-lg:hidden lg:col-span-2 rounded border shadow p-3.5">
          <ul className="space-y-1.5">
            {categories?.map((item, index) => (
              <li key={index}>
                <Link
                  href="/"
                  className="flex items-center justify-between text-gray-500 hover:text-blue-600 hover:bg-blue-50 p-1.5 rounded-md transition-colors duration-300 group"
                >
                  <div className="flex items-center gap-2.5 group-hover:text-blue-600">
                    <item.icon className="text-gray-700" />
                    <span className="font-medium text-sm">{item?.name}</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-gray-500" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-7 rounded overflow-hidden shadow-lg">
          <HeroSlider />
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {userHighlights?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-3.5 rounded shadow border space-y-0.5"
          >
            <item.icon className="size-8 text-primary mb-2.5" />

            <h6>{item?.title}</h6>
            <p>{item?.subTitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
