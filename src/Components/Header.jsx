import { motion, AnimatePresence } from "framer-motion";

const Header = ({ journalOpen, setSection, sec }) => {
  return (
    <div className="header">
      <div className="inner-header">
        <AnimatePresence>
          <motion.h1
            key="ddewaay"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "Spring", delay: 0.5, duration: 0.5 }}
            href="/"
            style={{ color: journalOpen ? "white" : "black" }}
            onClick={() => {
              setSection(0);
              setjournalOpen(false);
            }}
          >
            Don DeWaay III
          </motion.h1>
        </AnimatePresence>
        <AnimatePresence>
          <motion.h1
            key="contact"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "Spring", delay: 0.7, duration: 0.5 }}
          >
            <a
              href="mailto:dondewaay@gmail.com"
              style={{ color: journalOpen ? "white" : "black" }}
            >
              Contact
            </a>
          </motion.h1>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Header;
