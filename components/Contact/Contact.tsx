"use client";

import "./Contact.scss";
import { useEffect, useRef, useState, FormEvent } from "react"; // Добавили FormEvent
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";

const Contacts = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);

          form.current?.reset();

          setTimeout(() => {
            setIsSent(false);
          }, 5000);
        },
        (error) => {
          console.error(error.text);
          setError("Помилка при відправці.");
        },
      );
  };

  return (
    <section className="contacts" id="contact">
      <div className="container">
        <h2 className="contacts__title title" data-aos="fade-up">
          Напишіть мені
        </h2>
        <form className="contacts__form" ref={form} onSubmit={sendEmail}>
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
              name="user_name"
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
              name="user_email"
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
              name="message"
              required
            ></textarea>
            <button className="contacts__form-button" type="submit">
              Надіслати
            </button>
          </div>
        </form>
        <div className="contacts__messages">
          {isSent && (
            <p style={{ color: "rgb(255, 170, 0)", fontSize: "30px" }}>
              Повідомлення відправленно!
            </p>
          )}
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </div>
    </section>
  );
};

export default Contacts;
