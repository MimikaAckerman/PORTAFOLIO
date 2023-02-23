import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "../assets/themes/Themes";
import { Design, Develope } from "../../src/assets/allSvgs/AllSvgs";

import ParticleComponent from "../components/ParticleComponent/ParticleComponent";
import BigTitle from "../components/BigTitle/BigTitlte";

import {
  Box,
  Main,
  Title,
  Description,
} from "../assets/StyledComponent/MySkillPageStyled";

import BtnBack from '../components/BtnBack/BtnBack'

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <BtnBack/>
      <Box>
        <ParticleComponent theme="light" />
        <Main>
          <Title>Administradora de Sistemas en Redes</Title>

          <Description>
            Soy administradora de Sistemas Informaticos y Redes.
          </Description>
          <Description>
            <strong>Manejo sistemas operativos como:</strong>
            <ul>
              <li>Windows</li>
              <li>Linux y sus diferentes distribuciones</li>
            </ul>
          </Description>
        </Main>
        <Main>
          <Title>
            <Develope width={40} height={40} />
            Full Stack Developer
          </Title>
          <Description>
            Soy Full Stack Developer enfocada en el Front End.
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>
              Html, Css, Sass,Js, PHP, Mysql,MongoDB,React/Vite,
              Styled-component, etc.
            </p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>VScode, Github, Codepen etc.</p>
          </Description>
        </Main>

        <BigTitle text="SKILLS" top="80%" right="30%" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
