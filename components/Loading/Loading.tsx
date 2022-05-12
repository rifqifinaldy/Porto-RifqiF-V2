import React from "react";
import { motion } from "framer-motion";
import { Container } from "../Layouts/Layouts";
import { DotContainer, Dot, LoadingText, LoadingContainer } from "./loading.style";

const ContainerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const DotVariants = {
  initial: {
    y: "0%",
  },
  animate: {
    y: "100%",
  },
};

const DotTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: "easeInOut",
};

const Loading = () => {
  return (
    <Container>
      <LoadingContainer>
        <LoadingText>Loading</LoadingText>
        <DotContainer variants={ContainerVariants}>
          <Dot variants={DotVariants} transition={DotTransition} />
          <Dot variants={DotVariants} transition={DotTransition} />
          <Dot variants={DotVariants} transition={DotTransition} />
        </DotContainer>
      </LoadingContainer>
    </Container>
  );
};

export default Loading;
