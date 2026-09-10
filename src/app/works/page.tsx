"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { worksDataPage } from "./../../../Data/worksData";
import "./works.scss";
import { motion } from "framer-motion";
import Footer from "../../../components/Footer/Footer";
import Link from "next/link";
import { ArrowBigLeft } from "lucide-react";

const categories = [
  { key: "all", label: "Всі" },
  { key: "react", label: "React-Next-Додатки" },
  { key: "scss", label: "Верстка (SCSS/JS)" },
];

const WorkspagePage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 0);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, rotateY: 90 },
    visible: {
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  const filteredProjects = useMemo(() => {
    return worksDataPage.filter((data) => {
      const matchesCategory =
        activeCategory === "all" || data.category === activeCategory;
      const matchesSearch = data.text
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <>
      <section className="workspage" id="workspage">
        <div className="container">
          <Link href="/">
            <button type="button" className="workspage_button">
              <div className="workspage_button-iconbg">
                <ArrowBigLeft className="workspage_button-icon" />
              </div>
              <span>На головну</span>
            </button>
          </Link>
          <h2 className="workspage__title title">Mої проекти</h2>
          <div className="workspage__topblock">
            <input
              type="text"
              placeholder="Пошук проєкту..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="workspage__search"
            />

            <div className="workspage__tabs">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setActiveCategory(cat.key)}
                  className={`workspage__tab ${
                    activeCategory === cat.key ? "workspage__tab--active" : ""
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="workspage__items">
            {filteredProjects.map((data) => {
              return (
                <motion.article
                  className="workspage__item"
                  key={data.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.05 }}
                  variants={cardVariants}
                >
                  <a
                    href={data.path}
                    className="workspage__link"
                    target="_blank"
                  >
                    <div className="workspage__card">
                      <div className="workspage__card-img">
                        <Image
                          src={data.src}
                          alt="image-site"
                          fill
                          className="workspage__image"
                        />
                      </div>
                    </div>
                    <p className="work__text">{data.text}</p>
                  </a>
                </motion.article>
              );
            })}
            {filteredProjects.length === 0 && (
              <p className="workspage__empty">Нічого не знайдено</p>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default WorkspagePage;
