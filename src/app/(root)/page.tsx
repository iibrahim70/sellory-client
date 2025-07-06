import Hero from "@/components/Hero";
import ShopByCategory from "@/components/ShopByCategory";
import PromotionalBanner from "@/components/PromotionalBanner";
import TopVendors from "@/components/TopVendors";
import FlashSale from "@/components/FlashSale";
import DealOfTheDay from "@/components/DealOfTheDay";
import Products from "@/components/Products";

const Home = () => {
  return (
    <main>
      <Hero />
      <ShopByCategory />
      <FlashSale />
      <TopVendors />
      <DealOfTheDay />
      <PromotionalBanner />
      <Products />
    </main>
  );
};

export default Home;
