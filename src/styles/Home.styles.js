import { motion } from "framer-motion";
import styled from "styled-components";

export const HeroContainer = styled.div`
  height: 100vh;
  background: linerar-gradient(120deg, #0f2027, #203a43, #2c5364);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: colum;
  text-align: center;
`;

export const HeroText = styled(motion.div)`
  max-width: 700px;
`;
