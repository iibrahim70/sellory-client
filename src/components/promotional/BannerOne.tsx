import Image from "next/image";
import bannerOne from "@/assets/images/banner-3.png";
import bannerTwo from "@/assets/images/banner-4.png";

const BannerOne = () => {
  return (
    <section className="section-wrapper py-10 grid grid-cols-7 gap-5">
      <div className="col-span-2 space-y-5">
        <Image src={bannerOne} alt="Banner Image" />
        <Image src={bannerOne} alt="Banner Image" />
      </div>

      <div className="col-span-3">
        <Image src={bannerTwo} alt="Banner Image" className="h-full" />
      </div>

      <div className="col-span-2 space-y-5">
        <Image src={bannerOne} alt="Banner Image" />
        <Image src={bannerOne} alt="Banner Image" />
      </div>
    </section>
  );
};

export default BannerOne;
