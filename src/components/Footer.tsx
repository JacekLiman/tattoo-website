import { footerData } from "../data";

const Footer = () => {
  const { about, links, program, newsletter } = footerData;
  return (
    <footer className="section bg-dark">
      <div className="container mx-auto">
        <div className="text-white grid grid-cols-1 lg:grid-cols-4 gap-20">
          <div className="text-[16px]">
            <h3 className="font-primary uppercase  text-[18px]">
              {about.title}
            </h3>
            <p className="mt-3 mb-6">{about.subtitle}</p>
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <div>{about.address.icon}</div>
                {about.address.name}
              </div>
              <div className="flex items-center gap-3">
                <div>{about.phone.icon}</div>
                {about.phone.number}
              </div>
              <div className="flex items-center gap-3">
                <div>{about.email.icon}</div>
                {about.email.address}
              </div>
            </div>
          </div>
          <div>
            <h3 className="uppercase text-[18px] font-primary">
              {links.title}
            </h3>
            <ul className="mt-3 mb-6 space-y-2">
              {links.items.map((item, idx) => {
                return (
                  <li key={idx} className="text-[16px]">
                    <a className="inline-block" href={item.href}>
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h3 className="uppercase text-[18px] font-primary">
              {program.title}
            </h3>
            <ul className="mt-3 mb-6 space-y-2">
              {program.items.map((item, idx) => {
                return (
                  <li key={idx} className="text-[16px]">
                    <a className="inline-block" href={item.href}>
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h3 className="uppercase text-[18px] font-primary">
              {newsletter.title}
            </h3>
            <p className="mt-3 mb-6 text-[16px]">{newsletter.subtitle}</p>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="flex justify-between items-center border-b-[1px] border-white">
                <input
                  className="flex-1 italic bg-transparent  placeholder:text-[#555] outline-none pb-3"
                  type="text"
                />
                <button>{newsletter.form.icon}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
