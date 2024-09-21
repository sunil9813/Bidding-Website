import { topList } from "../../utils/data";
import { Caption, Container, Heading } from "../../router";

export const TopCollection = () => {
  return (
    <>
      <section className="process py-12 relative z-10">
        <Container>
          <Heading
            title="Top Collection"
            subtitle="Explore on the world's best & largest Bidding marketplace with our beautiful Bidding products. We want to be a part of your smile, success and future growth."
          />

          <div className="content grid grid-cols-1 md:grid-cols-4 gap-5 mt-8">
            {topList.map((item, index) => (
              <div className="bg-green_100 relative p-3 rounded-xl" key={index + 1}>
                <div className="h-56">
                  <img src={item.img1} alt="" className="w-full h-full object-cover rounded-xl" />
                </div>
                <div className=" absolute top-[45%] left-[38%] w-24 h-24 border-4 border-green rounded-full">
                  <img src={item.img2} alt="" className="w-full h-full object-cover rounded-full" />
                </div>
                <div className="grid grid-cols-3 gap-3 mt-3">
                  <div className="h-28">
                    <img src={item.img3} alt="" className="w-full h-full object-cover rounded-xl" />
                  </div>
                  <div className="h-28">
                    <img src={item.img4} alt="" className="w-full h-full object-cover rounded-xl" />
                  </div>
                  <div className="h-28">
                    <img src={item.img2} alt="" className="w-full h-full object-cover rounded-xl" />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <Caption>{item.catgeory}</Caption>
                  <span className="px-5 py-1 text-sm rounded-md bg-green text-white">{item.total} Items</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};
