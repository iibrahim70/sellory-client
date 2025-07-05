import categoryOne from "@/assets/images/category-1.png";
import categoryTwo from "@/assets/images/category-2.png";
import categoryThree from "@/assets/images/category-3.png";
import categoryFour from "@/assets/images/category-4.png";
import categoryFive from "@/assets/images/category-5.png";
import categorySix from "@/assets/images/category-6.png";
import categorySeven from "@/assets/images/category-7.png";
import categoryEight from "@/assets/images/category-8.png";
import categoryNine from "@/assets/images/category-9.png";
import categoryTen from "@/assets/images/category-10.png";
import categoryEleven from "@/assets/images/category-11.png";
import categoryTwelve from "@/assets/images/category-12.png";
import Image from "next/image";

const ShopByCategory = () => {
  // Array of category objects with images and titles
  const categories = [
    { image: categoryOne, title: "Category 1" },
    { image: categoryTwo, title: "Category 2" },
    { image: categoryThree, title: "Category 3" },
    { image: categoryFour, title: "Category 4" },
    { image: categoryFive, title: "Category 5" },
    { image: categorySix, title: "Category 6" },
    { image: categorySeven, title: "Category 7" },
    { image: categoryEight, title: "Category 8" },
    { image: categoryNine, title: "Category 9" },
    { image: categoryTen, title: "Category 10" },
    { image: categoryEleven, title: "Category 11" },
    { image: categoryTwelve, title: "Category 12" },
  ];

  return (
    <section className="container py-10 space-y-10">
      <h4>Shop by Category</h4>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
        {categories?.map((item) => (
          <div
            key={item?.title}
            className="flex flex-col items-center gap-5 cursor-pointer"
          >
            <Image src={item?.image} alt={item?.title} className="size-40" />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopByCategory;
