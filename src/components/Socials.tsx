import { socialData } from "../data";

const Socials = () => {
  return (
    <ul className="flex items-center gap-2">
      {socialData.map((item, idx) => {
        return (
          <li className="p-2" key={idx}>
            <a className="text-xl" href={item.href}>{item.icon}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
