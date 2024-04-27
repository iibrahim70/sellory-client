import Hero from "@/components/Hero";
import Promotional from "@/components/promotional/Promotional";
import ShopByCategory from "@/components/ShopByCategory";
import BannerOne from "@/components/promotional/BannerOne";
import BannerTwo from "@/components/promotional/BannerTwo";
import DealOfTheDay from "@/components/DealOfTheDay";

const Home = () => {
  return (
    <main>
      <Hero />
      <Promotional />
      <ShopByCategory />
      <DealOfTheDay />
      <BannerOne />
      <BannerTwo />
    </main>
  );
};

export default Home;
