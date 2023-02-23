import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { DarkTheme } from "../assets/themes/Themes";

import ParticleComponent from "../components/ParticleComponent/ParticleComponent";
import BigTitle from "../components/BigTitle/BigTitlte";
/* import astronaut from "../assets/Images/spaceman.png"; */

import cyberpunk from '../assets/Images/rebec.png'

import {
  Box,
  Rebec,
  Main,
  IconsProgramming
} from "../assets/StyledComponent/AboutStyled";
import BtnBack from "../components/BtnBack/BtnBack";

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <ParticleComponent theme="dark" />
          <BtnBack/>
        <Rebec>
          <img src={cyberpunk} alt="spaceman" />
        </Rebec>

        <Main>
          Un placer! 👋
          <br /> <br />
          Mi nombre es Emily Herrera y soy Venezolana con nacionalidad Española.
          Llevo 7 años en españa y mi comienzo en el mundo del IT comenzo con una formación profesional grado superior en Sistemas Informaticos y Redes.
          <br /> <br />
          Lo complemente con certificados como Seguridad empresarial , Seguridad para el usuario he Ingles B1 📚
          <br /> <br />
          Tuve la oportunidad del entrar en el mundo de la programación asi que comence realizando un master de Full Stack Developer .💻 
        </Main>
        
        <BigTitle text="ABOUT 🤖" top="10%" left="5%" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
