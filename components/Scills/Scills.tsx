import Image from "next/image";
import { scillstData } from "../../Data/scillstData";
import "./Scills.scss";
import { motion } from "framer-motion";

const Scills = () => {
  return (
    <section className="scills" id="scills">
      <div className="container">
        <h2 className="scills__title title">Мої технології</h2>
        <ul className="scills__list">
          {scillstData.map((data, index) => (
            <motion.li
              className="scills__list-item"
              key={data.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{
                once: true,
                amount: 0.3,
                margin: "0px 0px 100px 0px",
              }}
              transition={{
                type: "tween",
                duration: 0.7,
                ease: "easeOut",
                delay: index * 0.1,
              }}
            >
              <Image
                src={data.src}
                alt={data.name}
                width={190}
                height={210}
                className="scills__list-image"
              />
              <h3 className="scills__list-name">{data.name}</h3>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Scills;
