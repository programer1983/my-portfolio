import "./Contact.scss";

const Contact = () => {
  return (
    <section className="contacts" id="contacts">
      <div className="container">
        <h2 className="contacts__title title" data-aos="fade-up">
          Напишіть мені
        </h2>
        <form className="contacts__form">
          <div
            className="contacts__form-block"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <label className="contacts__form-label" htmlFor="name">
              Ваше імя
            </label>
            <input
              className="contacts__form-input"
              type="text"
              id="name"
              required
            />
          </div>
          <div
            className="contacts__form-block"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <label className="contacts__form-label" htmlFor="email">
              Ваша електронна адреса
            </label>
            <input
              className="contacts__form-input"
              type="email"
              id="email"
              required
            />
          </div>
          <div
            className="contacts__form-block"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <label className="contacts__form-label" htmlFor="text">
              Вашe повідомлення
            </label>
            <textarea
              className="contacts__form-area"
              id="text"
              required
            ></textarea>
            <button className="contacts__form-button" type="submit">
              Надіслати
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
