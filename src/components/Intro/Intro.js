import React from "react";
import Me from "../../assets/Images/profile-img .png";
import { motion } from "framer-motion";

import { Box, SubBox, Text } from "../../assets/StyledComponent/IntroStyled";

const Intro = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: "55vh" }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text>
          <h1>Hi! 👋</h1>
          <h3>I'm Mimika Ackerman.</h3>
          <h6>I am a Full Stack Programmer focused on the Front End</h6>
        </Text>
      </SubBox>
      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <img className="pic" src={Me} alt="Profile Pic" />
        </motion.div>
      </SubBox>
    </Box>
  );
};

export default Intro;
