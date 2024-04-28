import Image from "next/image";
import bannerOne from "@/assets/images/banner-1.png";
import bannerTwo from "@/assets/images/banner-2.png";
import bannerThree from "@/assets/images/banner-3.png";
import bannerFour from "@/assets/images/banner-4.png";

const BannerTwo = () => {
  // Banner images for the slider
  const bannerImages = [
    bannerOne,
    bannerTwo,
    bannerOne,
    bannerThree,
    bannerOne,
    bannerFour,
  ];

  return (
    <section className="section-wrapper py-10 grid grid-cols-2 lg:grid-cols-3 gap-5">
      {bannerImages?.map((item, index) => (
        <Image
          key={index}
          src={item}
          alt="Banner Image"
          className="h-40 w-full object-cover"
        />
      ))}
    </section>
  );
};

export default BannerTwo;
