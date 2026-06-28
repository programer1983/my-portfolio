import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero__content">
          <h1 className="hero__title" data-aos="fade-up">
            Мене звуть Дмитро
          </h1>
          <p className="hero__text" data-aos="fade-up" data-aos-delay="200">
            Розробляю фулстек додатки з лицьовою частиною сайту, сервером та
            базою даних - повноцінні бізнеси для компаній, агентств, приватних
            офісів.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
