import { motion, AnimatePresence } from "framer-motion";

const Welcome = () => {
  return (
    <motion.div
      className="page"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 50, opacity: 0 }}
      transition={{ type: "spring", duration: 0.5 }}
    >
      <div className="hero">
        <h2>
          Dawn DeWaay is a <br />
          <span style={{ color: "#308ef1" }}>Fullstack Developer</span>
          <br />
          With a Knack for Design
          <p>Based in Des Moines, Iowa</p>
        </h2>
      </div>
    </motion.div>
  );
};

export default Welcome;
