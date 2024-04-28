import Hero from "@/components/Hero";
import Promotional from "@/components/promotional/Promotional";
import ShopByCategory from "@/components/ShopByCategory";
import BannerOne from "@/components/promotional/BannerOne";
import BannerTwo from "@/components/promotional/BannerTwo";
import DealOfTheDay from "@/components/DealOfTheDay";
import OnSellingProducts from "@/components/OnSellingProducts";
import Brand from "@/components/Brand";

const Home = () => {
  return (
    <main>
      <Hero />
      <Promotional />
      <ShopByCategory />
      <DealOfTheDay />
      <OnSellingProducts />
      <BannerOne />
      <Brand />
      <BannerTwo />
    </main>
  );
};

export default Home;
