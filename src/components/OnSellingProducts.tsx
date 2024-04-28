import Image from "next/image";
import productsData from "../../public/products.json";

const OnSellingProducts = () => {
  return (
    <section className="section-wrapper py-10 space-y-10">
      <h4>On Selling Products</h4>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {productsData?.slice(2, 11)?.map((item, index) => (
          <div
            key={index}
            className="bg-white flex items-center gap-5 shadow-md"
          >
            <Image
              src={item?.image}
              alt={item?.title}
              width={500}
              height={500}
              className="size-36 h-full object-cover"
            />

            <div className="space-y-3 py-5 pr-5">
              <h6 className="line-clamp-1">{item?.title}</h6>

              <p className="line-clamp-2">{item?.description}</p>

              <div className="flex items-center gap-3">
                <h6>${item?.discountPrice}</h6>

                <div className="flex items-center gap-3">
                  <s>${item?.price}</s>
                  <p>-{item?.discount}%</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OnSellingProducts;
