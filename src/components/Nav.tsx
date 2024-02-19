import { navData } from "../data";

const Nav = () => {
  const { items } = navData;
  return (
    <nav className="">
      <ul className="flex items-center gap-5">
        {items.map((item, idx) => {
          const { href, name } = item;
          return (
            <li key={idx}>
              <a
                className="inline-block text-xl font-primary uppercase py-1 border-b-2 hover:border-dark border-transparent"
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

export default Nav;
