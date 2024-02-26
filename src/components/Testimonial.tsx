import { testimonialData } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const Testimonial = () => {
  return (
    <section className="py-[40px] lg:pb-[160px] lg:pt-0">
      <div className="container mx-auto">
        <div>
          <Swiper>
            {testimonialData.map((slide, idx) => {
              const { quoteImg, message, name, occupation } = slide;
              return (
                <SwiperSlide key={idx}>
                  <div className="max-w-[1200px] flex flex-col items-center lg:flex-row lg:items-start gap-x-[38px]">
                    <div>
                      <img src={quoteImg} alt="" />
                    </div>
                    <div className="flex-1 mt-[30px] lg:mt-[54px]">
                      <h2 className="text-2xl lg:text-[36px] leading-normal mb-6 lg:mb-12">
                        {message}
                      </h2>
                      <div className="flex items-center text-xl lg:text-2xl font-primary">
                        <p className="font-semibold">{name}</p>
                        <span className="mx-4">|</span>
                        <p className="font-light">{occupation}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
