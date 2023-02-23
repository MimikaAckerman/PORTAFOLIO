import React, { useEffect, useRef } from "react";
import { ThemeProvider } from "styled-components";
import { DarkTheme } from "../assets/themes/Themes";

import { Work } from "../assets/data/WorkData";
import Card from "../components/Card/Card";
import BigTitlte from "../components/BigTitle/BigTitlte";

import { Box, Main, container } from "../assets/StyledComponent/WorkPageStyled";

import BtnBack from '../components/BtnBack/BtnBack'
import ParticlesComponent from "../components/ParticleComponent/ParticleComponent";





const WorkPage = () => {
  const ref = useRef(null);
  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;
    };

    window.addEventListener("scroll", rotate);
    return () => {
      window.removeEventListener("scroll", rotate);
    };
  }, []);

  return (
    <>
    <ThemeProvider theme={DarkTheme}>
     <Box>
      <BtnBack/>
      
     <ParticlesComponent theme="dark"/>
     
       <Main ref={ref} variants={container} initial="hidden" animate="show">
         {Work.map((d) => (
           <Card key={d.id} data={d} />
         ))}
       </Main>

       <BigTitlte text="WORKS" top="10%" right="20%" />
     </Box>
   </ThemeProvider>
   

    </>
    
     
  );
};

export default WorkPage;
