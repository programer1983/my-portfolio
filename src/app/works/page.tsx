"use client";

import Image from "next/image";
import { worksDataPage } from "./../../../Data/worksData";
import "./works.scss";
import { motion } from "framer-motion";
import Footer from "../../../components/Footer/Footer";
import Link from "next/link";
import { ArrowBigLeft } from "lucide-react";

const workspagePage = () => {
  const cardVariants = {
    hidden: { opacity: 0, rotateY: 90 },
    visible: {
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

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
          <div className="workspage__items">
            {worksDataPage.map((data) => {
              return (
                <motion.article
                  className="workspage__item"
                  key={data.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.05 }}
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
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default workspagePage;
