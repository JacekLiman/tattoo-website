import { heroData } from "../data";

const Hero = () => {
  const { title, subtitle, btnText, btnIcon } = heroData;
  return (
    <section className="mt-[99px] bg-hero bg-cover bg-center h-[70vh] lg:h-screen bg-no-repeat relative">
      <div className="container mx-auto text-white h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="hidden md:block"></div>
          <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <h1 className="animate-down h1 opacity-0">{title}</h1>
            <p
              style={{ animationDelay: "1s" }}
              className="animate-down mb-8 lg:mb-16 max-w-lg leading-relaxed opacity-0"
            >
              {subtitle}
            </p>

            <button
              style={{ animationDelay: "2s" }}
              className="animate-down flex items-center btn btn-sm lg:btn-lg btn-outline opacity-0"
            >
              {btnText} <div className="text-xl">{btnIcon}</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
