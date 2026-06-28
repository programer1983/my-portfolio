"use client";

import { useRouter } from "next/navigation";
import "./contacts.scss";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import emailjs from "emailjs-com";
import { p } from "framer-motion/client";

const page = () => {
  const router = useRouter();
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zggnhtm",
        "template_neckv1k",
        form.current,
        "user_RyWBgBRflyUzGSWbQ6rhV"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);
          form.current.reset();

          setTimeout(() => {
            setIsSent(false);
          }, 5000);
        },
        (error) => {
          console.error(error.text);
          setError("Помилка при відправці.");
        }
      );
  };

  return (
    <section className="contacts">
      <div className="container">
        <button
          className="contacts__backbutton"
          onClick={() => router.push("/")}
        >
          To Home
        </button>
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

export default page;
