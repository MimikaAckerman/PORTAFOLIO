import styled from "styled-components";
import { motion } from "framer-motion";

export const Box = styled.div`
background-color: ${(props) => props.theme.body};

height: 400vh;
position: relative;
display: flex;
align-items: center;
`
export const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;

  color: white;
`;
// Framer-motion Configuration
export const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
  
      transition: {
        staggerChildren: 0.5,
        duration: 0.5,
      },
    },
  };
  