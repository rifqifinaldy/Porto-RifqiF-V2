import { motion } from "framer-motion";
import styled from "styled-components";

export const LoadingContainer = styled(motion.div)`
  position: absolute;
  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const LoadingText = styled(motion.h4)`
    font-size: 42px;
`;

export const DotContainer = styled(motion.div)`
  width: 10rem;
  height: 5rem;
  display: flex;
  justify-content: space-around;
`;

export const Dot = styled(motion.span)`
  display: block;
  width: 2rem;
  height: 2rem;
  background: ${({ theme }) => theme.colors.orange};
  border-radius: 50%;
`;
