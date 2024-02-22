import { aboutData } from "../data";

const About = () => {
  const { title, subtitle1, subtitle2, btnText, btnIcon } = aboutData;
  return (
    <section className="py-20 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="text-[360px] xl:text-[720px] leading-none font-tertiary bg-about bg-no-repeat bg-right bg-cover bg-clip-text text-transparent flex justify-center">
            01
          </div>
          <div>
            <h2 className="h2">{title}</h2>
            <div className="ml-10">
              <p className="mb-6">{subtitle1}</p>
              <p className="mb-9">{subtitle2}</p>
              <button className="btn btn-lg btn-link">
                {btnText} <div className="text-xl">{btnIcon}</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
