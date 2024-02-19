import { navData } from "../data";

const NavMobile = () => {
  const { items } = navData;
  return (
    <nav className="w-full h-full flex justify-center items-center">
      <ul className="space-y-5 text-center">
        {items.map((item, idx) => {
          const { href, name } = item;
          return (
            <li key={idx}>
              <a
                className="inline-block text-2xl font-primary uppercase"
                href={href}
              >
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMobile;
