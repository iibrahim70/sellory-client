import Image from "next/image";
import brandIcon from "@/assets/icons/brand-3.png";
import { FaArrowRight } from "react-icons/fa";

const Brand = () => {
  const products = [
    {
      title: "Apple iPhone 14 Pro Max",
      image:
        "https://atlas-content-cdn.pixelsquid.com/assets_v2/296/2962610729624016433/jpeg-600/G03.jpg?modifiedAt=1",
    },
    {
      title: "Apple MacBook Air (M2, 2022)",
      image:
        "https://atlas-content-cdn.pixelsquid.com/stock-images/midnight-macbook-air-m2-2022-64RewZ3-600.jpg",
    },
    {
      title: "Apple iPad Pro (12.9-inch, M1, 2021)",
      image:
        "https://vibegaming.com.bd/wp-content/uploads/2022/06/Apple-iPad-Pro-2021-M1-Chip-12.9-inch-Retina-XDR-Display-Wi-Fi-128GB-Space-Gray-MHNF3.jpg",
    },
    {
      title: "Apple Watch Series 8",
      image:
        "https://media.e-valy.com/cms/products/images/f46947e6-d01e-44af-859b-369a792ead1c",
    },
    {
      title: "Apple AirPods Pro (2nd Generation)",
      image:
        "https://atlas-content-cdn.pixelsquid.com/stock-images/airpods-pro-2nd-generation-8deGVY7-600.jpg",
    },
    {
      title: "Apple Mac Mini (M1, 2020)",
      image:
        "https://www.custommacbd.com/cdn/shop/products/mac-mini-202011-gallery-3_6540dfde-3c12-42fa-98c8-dc1d25dcc7cf.jpg?v=1628006019",
    },
  ];

  return (
    <section className="section-wrapper py-10 space-y-10">
      <div className="flex items-center justify-between gap-5">
        <div className="flex items-center">
          <Image src={brandIcon} alt="Brand Icon" />
          <h4>Apple</h4>
        </div>

        <button className="flex items-center gap-2">
          <p className="font-semibold">See More</p>
          <FaArrowRight />
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
        {products?.map((item) => (
          <div
            key={item?.title}
            className="flex flex-col items-center justify-center text-center gap-5 shadow-md bg-white p-5"
          >
            <Image
              src={item?.image}
              alt={item?.title}
              width={500}
              height={500}
              className="size-24 object-cover"
            />
            <p className="line-clamp-2">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brand;
