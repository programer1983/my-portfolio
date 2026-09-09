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
            Спеціалізуюсь на розробці high-performance Edge-native вебдодатків
            та Micro-SaaS продуктів. Мій стек — Next.js, Hono та Serverless
            Postgres — дозволяє запускати повноцінні бізнес-рішення швидко і з
            мінімальними витратами на інфраструктуру на старті.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
