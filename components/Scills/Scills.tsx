import Image from "next/image";
import { scillstData } from "../../Data/scillstData";
import "./Scills.scss";

const Scills = () => {
  return (
    <section className="scills" id="scills">
      <div className="container">
        <h2 className="scills__title title">Мої технології</h2>
        <ul className="scills__list">
          {scillstData.map((data, index) => (
            <li
              className="scills__list-item"
              key={data.id}
              data-aos="fade-right"
              data-aos-anchor-placement="top-center"
              data-aos-delay={`${index * 100}`}
            >
              <Image
                src={data.src}
                alt={data.name}
                width={190}
                height={210}
                className="scills__list-image"
              />
              <h3 className="scills__list-name">{data.name}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Scills;
