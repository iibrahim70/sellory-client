import Hero from "@/components/Hero";
import PromotionalMessage from "@/components/promotional/PromotionalMessage";
import ShopByCategory from "@/components/ShopByCategory";
import BannerOne from "@/components/promotional/BannerOne";
import BannerTwo from "@/components/promotional/BannerTwo";
import DealOfTheDay from "@/components/DealOfTheDay";
import OnSellingProducts from "@/components/OnSellingProducts";
import Brand from "@/components/Brand";
import TopVendors from "@/components/TopVendors";
import DailyDiscover from "@/components/DailyDiscover";
import MostViewdItems from "@/components/MostViewdItems";

const Home = () => {
  return (
    <main>
      <Hero />
      <PromotionalMessage />
      <ShopByCategory />
      <DealOfTheDay />
      <OnSellingProducts />
      <BannerOne />
      <Brand />
      <MostViewdItems />
      <TopVendors />
      <BannerTwo />
      <DailyDiscover />
    </main>
  );
};

export default Home;
