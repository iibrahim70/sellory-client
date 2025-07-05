import Image from "next/image";
import checkmarkIcon from "@/assets/icons/checkmark.png";

const PromotionalMessage = () => {
  // Create an array of promotional messages
  const promotionalMessages = [
    {
      title: "Quick & Easy Store Pickup",
      subTitle: "Get your order as little as 1hr",
    },
    { title: "Low Price Guarantee", subTitle: "We won't be beat on price" },
    {
      title: "Knowledgeable Advice",
      subTitle: "Answer to your tech questions",
    },
    {
      title: "Lates & Greatest Tech",
      subTitle: "Discover whats new & excitings",
    },
  ];

  return (
    <section className="container grid md:grid-cols-2 xl:grid-cols-4 gap-5 pb-10">
      
    </section>
  );
};

export default PromotionalMessage;
