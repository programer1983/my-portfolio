"use client";

import Image from "next/image";
import { workstData } from "../../Data/worksData";
import "./Works.scss";
import { motion } from "framer-motion";

const Works = () => {
  const cardVariants = {
    hidden: { opacity: 0, rotateY: 90 },
    visible: (i: number) => ({
      opacity: 1,
      rotateY: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="works" id="works">
      <div className="container">
        <h2 className="works__title title">Mої проекти</h2>
        <div className="works__items">
          {workstData.map((data, index) => {
            return (
              <motion.article
                className="works__item"
                key={data.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
              >
                <a href={data.path} className="works__link">
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
      </div>
    </section>
  );
};

export default Works;
