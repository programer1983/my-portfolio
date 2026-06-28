import Link from "next/link";
import "./Footer.scss";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Link href="/contacts" className="footer__content">
              mitucha1983@gmail.com
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
