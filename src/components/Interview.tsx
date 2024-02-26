import { useState } from "react";
import { interviewData } from "../data";
import ModalVideo from "react-modal-video";
import "../modalVideo.scss";

const Interview = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { title, btnText, btnIcon } = interviewData;

  return (
    <section className="section bg-interview bg-no-repeat bg-cover bg-center lg:h-[812px]">
      <div className="container mx-auto h-full">
        <div className="flex flex-col justify-center h-full">
          <div className="flex flex-col items-start max-w-[880px]">
            <h3 className="text-white text-[40px] lg:text-[60px] leading-[1.1] font-tertiary   -tracking-[1.5px] capitalize mb-8">
              {title}
            </h3>
            <div className="flex  items-center gap-5">
              <div
                onClick={() => setIsOpen(true)}
                className="w-[70px] h-[70px] lg:w-[91px] lg:h-[91px] border border-white/40 rounded-full text-dark p-[5px] lg:p-[8px] cursor-pointer hover:opacity-80 transition"
              >
                <div className="bg-white w-full h-full rounded-full flex justify-center items-center">
                  <div className="pl-1">{btnIcon}</div>
                </div>
              </div>
              <div className="font-primary uppercase text-white">{btnText}</div>
              <ModalVideo
                channel="youtube"
                isOpen={isOpen}
                videoId="_l1mqYQuNf8"
                onClose={() => setIsOpen(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interview;
