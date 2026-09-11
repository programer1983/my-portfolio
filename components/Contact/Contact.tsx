"use client";

import "./Contact.scss";
import { useEffect, useRef, useState, FormEvent } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setError(null);
    setIsSent(false);

    const formData = new FormData(form.current);
    const payload = {
      user_name: formData.get("user_name"),
      user_email: formData.get("user_email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setIsSent(true);
        form.current.reset();

        setTimeout(() => {
          setIsSent(false);
        }, 5000);
      } else {
        setError(result.error || "Помилка при відправці.");
      }
    } catch (err) {
      console.error("Помилка з'єднання з сервером:", err);
      setError("Не вдалося зв'язатися з сервером.");
    }
  };

  return (
    <section className="contacts" id="contacts">
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
              placeholder="name"
              autoComplete="off"
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
              placeholder="example@mail.com"
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
              placeholder="text"
            ></textarea>
            <button className="contacts__form-button" type="submit">
              Надіслати
            </button>
          </div>
        </form>
        <div className="contacts__messages">
          {isSent && (
            <p className="contacts__messages-success">
              Повідомлення відправленно!
            </p>
          )}
          {error && <p className="contacts__messages-error">{error}</p>}
        </div>
      </div>
    </section>
  );
};

export default Contacts;
