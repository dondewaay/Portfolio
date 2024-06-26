import { motion } from "framer-motion";

const Dropdown = ({ sec, setSection, journal, setInContact, setDropdown }) => {
  return (
    <motion.div
      className="dropdown"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "Linear", duration: 0.3 }}
    >
      <div className="drop-container" style={{ marginBottom: "150px" }}>
        <motion.h2
          key={"zero"}
          onClick={() => {
            setSection(0);
            setDropdown(false);
          }}
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{  opacity: 0 }}
          transition={{ type: "spring", delay: 0.15, duration: 0.5 }}
          style={{ color: "white" }}
        >
          Welcome
          {sec == 0 ? (
            <motion.span
              key="star0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              &nbsp;✦
            </motion.span>
          ) : null}
        </motion.h2>
        <motion.h2
          key={"one"}
          onClick={() => {
            setSection(1);
            setDropdown(false);
          }}
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: "spring", delay: 0.25, duration: 0.5 }}
          style={{ color: "white" }}
        >
          Education
          {sec == 1 ? (
            <motion.span
              key="star1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              &nbsp;✦
            </motion.span>
          ) : null}
        </motion.h2>
        <motion.h2
          key={"two"}
          onClick={() => {
            setSection(2);
            setDropdown(false);
          }}
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: "spring", delay: 0.35, duration: 0.5 }}
          style={{ color: "white" }}
        >
            Projects
          {sec == 2 ? (
            <motion.span
              key="star2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              &nbsp;✦
            </motion.span>
          ) : null}
        </motion.h2>
        <motion.h2
          key={"three"}
          onClick={() => {
            setSection(3);
            setDropdown(false);
          }}
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: "spring", delay: 0.45, duration: 0.5 }}
          style={{ color: "white" }}
        >
          Passions
          {sec == 3 ? (
            <motion.span
              key="star3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              &nbsp;✦
            </motion.span>
          ) : null}
        </motion.h2>
        <motion.h2
          key={"four"}
          onClick={() => {
            setSection(4);
            journal(true);
            setDropdown(false);
          }}
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: "spring", delay: 0.55, duration: 0.5 }}
          style={{ color: "white" }}
        >
          Daily Sketch
          {sec == 4 ? (
            <motion.span
              key="star4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              &nbsp;✦
            </motion.span>
          ) : null}
        </motion.h2>
        <motion.h2
          key={"five"}
          onClick={() => {
            setSection(5);
            setInContact(true);
            setDropdown(false);
          }}
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: "spring", delay: 0.65, duration: 0.5 }}
          style={{ color: "white" }}
        >
          Contact
          {sec == 5 ? (
            <motion.span
              key="star5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              &nbsp;✦
            </motion.span>
          ) : null}
        </motion.h2>
      </div>
    </motion.div>
  );
};

export default Dropdown;
