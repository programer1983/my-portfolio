import Link from "next/link";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div>
            <Link href="/contacts" className="footer__content">
              mitucha1983@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
