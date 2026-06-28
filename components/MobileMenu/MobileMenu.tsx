import { headerData } from "../../Data/header-data";
import "./MobileMenu.scss";

type Props = {
  activeMenu: boolean;
  toggleMenu: () => void;
};

const MobileMenu = ({ activeMenu, toggleMenu }: Props) => {
  return (
    <div className={activeMenu ? "mobile__menu-active" : "mobile__menu"}>
      <ul className="mobile__menu-list">
        {headerData.map((data) => (
          <li className="mobile__menu-item" key={data.name}>
            <a
              href={data.path}
              className="mobile__menu-link"
              onClick={toggleMenu}
            >
              {data.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
