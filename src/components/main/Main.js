import { motion } from "framer-motion";
import React, { useState } from "react";
import SocialIcons from "../socialIcons/SocialIcons";
import Intro from "../Intro/Intro";

import {
  MainContainer,
  Container,
  Contact,
  DarkDiv,
  BottomBar,
  SKILLS,
  WORK,
  ABOUT,
  Center,
  OpenBtn,
} from "../../assets/StyledComponent/MainStyled";

import ParticlesComponent from "../ParticleComponent/ParticleComponent";



const Main = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <MainContainer>
      <ParticlesComponent theme="light"/>
      <DarkDiv click={click} />
      <Container>
        <SocialIcons theme={click ? "dark" : "light"} />

        <Center click={click}>
          <OpenBtn
            onClick={() => handleClick()}
            width={click ? 120 : 200}
            height={click ? 120 : 200}
            fill="currentColor"
          >
            click here
          </OpenBtn>
        </Center>

        <Contact target="_blank" href="mailto:emily.herreragomez@gmail.com">
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Contact with me ✉️
          </motion.h2>
        </Contact>

        <WORK to="/work" click={+click}>
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Projects
          </motion.h2>
        </WORK>
        <BottomBar>
          <ABOUT to="/about" click={+click}>
            <motion.h2
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              About me 🤖
            </motion.h2>
          </ABOUT>
          <SKILLS to="/skills">
            <motion.h2
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              My Skills 🛠️
            </motion.h2>
          </SKILLS>
        </BottomBar>
      </Container>
      {click ? <Intro click={click} /> : null}
    </MainContainer>
  );
};

export default Main;
