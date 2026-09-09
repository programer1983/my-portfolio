import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div>
            <div className="footer__content">
              <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "rgb(249, 115, 22)" }}
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
