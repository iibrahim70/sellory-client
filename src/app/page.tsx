import BannerTwo from "@/components/BannerTwo";
import Hero from "@/components/Hero";
import Promotional from "@/components/Promotional";
import ShopByCategory from "@/components/ShopByCategory";

const Home = () => {
  return (
    <main>
      <Hero />
      <Promotional />
      <ShopByCategory />
      <BannerTwo />
    </main>
  );
};

export default Home;
