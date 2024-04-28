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
    <section className="section-wrapper grid md:grid-cols-2 xl:grid-cols-4 gap-5 pb-10">
      {promotionalMessages?.map((item) => (
        <div
          key={item?.title}
          className="bg-[#F7F8F8] flex items-center gap-2 shadow-md p-3.5"
        >
          <Image src={checkmarkIcon} alt="Checkmark Icon" />
          <div>
            <p className="font-bold text-sm">{item?.title}</p>
            <p className="line-clamp-1">{item?.subTitle}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default PromotionalMessage;
