import Image from "next/image";
import { Button } from "./ui/button";
import { FiShoppingCart } from "react-icons/fi";
import { GoGitCompare } from "react-icons/go";
import { HiMiniViewfinderCircle } from "react-icons/hi2";
import banner from "@/assets/images/banner-2.png";

const DealOfTheDay = () => {
  const data = [
    {
      title: "Samsung Galaxy S21 Ultra",
      description:
        "Experience the power of Samsung Galaxy S21 Ultra with its stunning camera system and cutting-edge features.",
      image:
        "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s21-ultra-5g-1.jpg",
      price: 1199.99,
      discount: 0.1,
      discountPrice: 1079.99,
      ratings: 4.7,
      ratingsNumber: 500,
    },
    {
      title: "Apple MacBook Pro (M1 Chip)",
      description:
        "Get the ultimate performance and battery life with the new Apple MacBook Pro featuring the revolutionary M1 Chip.",
      image:
        "https://dvf83rt16ac4w.cloudfront.net/upload/product/20211110_1636549088_550946.png",
      price: 1299.99,
      discount: 0.05,
      discountPrice: 1234.99,
      ratings: 4.9,
      ratingsNumber: 300,
    },
  ];

  return (
    <section className="section-wrapper py-10 space-y-10">
      <h4>Deal Of TheDay</h4>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {data?.map((item) => (
          <div key={item?.title} className="flex flex-col gap-5">
            <div className="bg-white flex items-center gap-5 shadow-md p-5">
              <Image
                src={item?.image}
                alt={item?.title}
                width={200}
                height={200}
              />

              <div className="space-y-3">
                <h5 className="line-clamp-1">{item?.title}</h5>

                <div className="flex items-center gap-3">
                  <h5>${item?.discountPrice}</h5>

                  <div className="flex items-center gap-3">
                    <s>${item?.price}</s>
                    <p>-{item?.discount}%</p>
                  </div>
                </div>

                <p>{item?.description}</p>

                <div className="flex items-center gap-5">
                  <Button
                    variant="secondary"
                    className="w-full flex items-center gap-3"
                  >
                    <HiMiniViewfinderCircle className="size-5" />
                    Preview
                  </Button>

                  <Button
                    variant="secondary"
                    className="w-full flex items-center gap-3"
                  >
                    <GoGitCompare className="size-5" />
                    Compare
                  </Button>
                </div>

                <Button className="w-full flex items-center gap-3">
                  <FiShoppingCart className="size-5" />
                  Add To Cart
                </Button>
              </div>
            </div>

            <Image src={banner} alt="Banner Image" className="w-full" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default DealOfTheDay;
