import { motion } from "framer-motion";
import React from "react";
import { LinkedIn, Github, StackBlitz } from "../../assets/allSvgs/AllSvgs";
import { Icons, Line } from "../../assets/StyledComponent/SocialIcons";
import { DarkTheme } from "../../assets/themes/Themes";
import { Link } from "react-router-dom";



const SocialIcons = (props) => {
  return (
    <Icons>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <Link to="https://github.com/MimikaAckerman">
        <Github
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </Link>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <Link to="https://www.linkedin.com/in/emilyehg/</motion.div>">
        <LinkedIn
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </Link>
      </motion.div>


      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <Link to="https://stackblitz.com/@MimikaAckerman">
        <StackBlitz
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </Link>
      </motion.div>

      <Line
        color={props.theme}
        initial={{
          height: 0,
        }}
        animate={{
          height: "8rem",
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 0.8,
        }}
      />
    </Icons>
  );
};

export default SocialIcons;
