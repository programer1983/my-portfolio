import Image from "next/image";
import { aboutData } from "../../Data/aboutDta";
import "./About.scss";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="about__title title">Про мене</h2>
        <div className="about__content">
          <Image
            src="/images/About/abaut-image.jpg"
            alt="about-image"
            width={550}
            height={300}
            className="about__image"
            data-aos="fade-right"
            data-aos-duration="1500"
          />
          <div className="about__info">
            {aboutData.map((data, i) => (
              <p
                className="about__desc"
                key={data.id}
                data-aos="fade-up"
                data-aos-delay={`${i * 100}`}
              >
                {data.desc}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
