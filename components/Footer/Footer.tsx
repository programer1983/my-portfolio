import "./Footer.scss";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SiRefinedgithub } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__content">
            <ul className="footer__content-social">
              <li className="footer__social-item">
                <FaFacebookF className="footer__social-link" />
              </li>
              <li className="footer__social-item">
                <FaLinkedinIn className="footer__social-link" />
              </li>
              <li className="footer__social-item">
                <FaTwitter className="footer__social-link" />
              </li>
              <li className="footer__social-item">
                <SiRefinedgithub className="footer__social-link" />
              </li>
            </ul>
            <div className="footer__content-email">
              <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "rgb(249, 115, 22)", fontSize: "18px" }}
              >
                mitucha1983@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
