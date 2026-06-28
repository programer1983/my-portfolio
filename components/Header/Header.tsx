"use client";

import { useEffect, useState, useRef } from "react"; // Добавили useRef
import { headerData } from "../../Data/header-data";
import MobileMenu from "../MobileMenu/MobileMenu";
import "./Header.scss";

export interface HeaderItem {
  name: string;
  path: string;
  className?: string;
}

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const isScrollingToAnchor = useRef(false);

  const toggleMenu = () => setActiveMenu(!activeMenu);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingToAnchor.current) return;

      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const handleLinkClick = (path: string) => {
    const targetId = path.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      isScrollingToAnchor.current = true;

      targetElement.scrollIntoView({ behavior: "smooth" });

      history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search,
      );

      setTimeout(() => {
        isScrollingToAnchor.current = false;
        setLastScrollY(window.scrollY);
      }, 1000);
    }

    setActiveMenu(false);
  };

  return (
    <>
      <MobileMenu activeMenu={activeMenu} toggleMenu={toggleMenu} />
      <header className={`header ${!show ? "hidden" : ""}`}>
        <div className="container">
          <div className="header__inner">
            <ul className="header__list">
              {headerData.map((data) => (
                <li
                  className={data.className || "header__item"}
                  key={data.name}
                >
                  <a
                    href={data.path}
                    className="header__link"
                    onClick={(e) => {
                      if (data.path.startsWith("#")) {
                        e.preventDefault();
                        handleLinkClick(data.path);
                      } else {
                        setActiveMenu(false);
                      }
                    }}
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
            <div
              className={`header__burger ${activeMenu ? "active" : ""}`}
              onClick={() => setActiveMenu(!activeMenu)}
            >
              <span></span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
