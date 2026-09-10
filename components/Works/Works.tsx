"use client";

import Image from "next/image";
import { workstData } from "../../Data/worksData";
import "./Works.scss";
import { motion } from "framer-motion";
import Link from "next/link";
import { Navigation } from "lucide-react";

const Works = () => {
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
    <section className="works" id="works">
      <div className="container">
        <h2 className="works__title title">Mої проекти</h2>
        <div className="works__items">
          {workstData.map((data) => {
            return (
              <motion.article
                className="works__item"
                key={data.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
                variants={cardVariants}
              >
                <a href={data.path} className="works__link" target="_blank">
                  <div className="works__card">
                    <div className="works__card-img">
                      <Image
                        src={data.src}
                        alt="image-site"
                        fill
                        className="works__image"
                      />
                    </div>
                  </div>
                  <p className="work__text">{data.text}</p>
                </a>
              </motion.article>
            );
          })}
        </div>
        <Link href="/works">
          <button type="button" className="works_button">
            <span>Більше моїх робіт</span>
            <div className="works_button-iconbg">
              <Navigation className="works_button-icon" />
            </div>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Works;
