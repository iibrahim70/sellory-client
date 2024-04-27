import Image from "next/image";
import checkmarkIcon from "../assets/icons/checkmark.png";

const Promotional = () => {
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
    <section className="section-wrapper flex items-center justify-between gap-5">
      {promotionalMessages?.map((item) => (
        <div
          key={item?.title}
          className="bg-[#F7F8F8] flex items-center gap-2 shadow-md p-4 whitespace-nowrap"
        >
          <Image src={checkmarkIcon} alt="Checkmark Icon" />
          <div>
            <p className="font-bold text-sm">{item?.title}</p>
            <p>{item?.subTitle}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Promotional;
