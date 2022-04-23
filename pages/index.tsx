import type { NextPage } from "next";
import Image from "next/image";
import { Button } from "../components/Button/Button";
import styled from "styled-components";
import { Container, Grid } from "../components/Layouts/Layouts";
import { motion } from "framer-motion";
import { theme } from "../styles/theme.style";
import { BlinkingText, SlideUpText } from "../components/Text/text.animation";

const ProfileSection = styled.main`
  position: relative;
  padding: 50px 0;
  width: 100%;
`;

const Avatar = styled(motion.div)`
  max-width: 450px;
  display: block;
  margin: auto;
  border-radius: 50%;
  padding: 15px;
  box-shadow: ${({ theme }) => theme.shadow.inner_shadow};
`;

const AvatarImg = styled(Image)`
  width: 100%;
  border-radius: 50%;
  border: 10px solid transparent;
  box-shadow: ${({ theme }) => theme.shadow.outer_shadow};
`;

const ProfileBox = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  padding: 0 15px;
`;

const Hello = styled.small`
  font-size: 18px;
  text-transform: capitalize;
  margin: 0;
  color: ${({ theme }) => theme.colors.orange};
  opacity: ${({ theme }) => theme.opacity.hard};
`;

const ProfileName = styled(motion.h2)`
  font-size: 55px;
  font-weight: ${({ theme }) => theme.font.weight.extraBold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
`;

const ProfileRole = styled(motion.h4)`
  font-size: 20px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 0;
  text-transform: capitalize;
  opacity: ${({ theme }) => theme.opacity.hard};
`;

const JSText = styled(motion.h6)`
  font-size: 20px;
  font-weight: ${({ theme }) => theme.font.weight.normal};
  color: ${({ theme }) => theme.colors.blue};
  margin: 0;
  text-transform: capitalize;
  position: absolute;
  transform: rotateX(50deg) rotateZ(45deg);
  left: 80%;
  bottom: 10%;
`;

const ReactText = styled(motion.h6)`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.font.weight.normal};
  color: ${({ theme }) => theme.colors.blue};
  margin: 0;
  text-transform: capitalize;
  position: absolute;
  right : 30%;
  margin: 0 auto;
  bottom: 0;
`;

const BounceUp = {
  initial: { y: 0 },
  animate: { y: -25 },
};

// For Animation Purpose
const SlideUp = {
  hidden: {
    color: theme.colors.background,
    y: 25,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
  },
  visible: {
    color: theme.colors.text.primary,
    y: 0,
    transition: {
      delay: 0.75,
      ease: [0.455, 0.03, 0.515, 0.955],
      duration: 0.75,
    },
  },
};

const SlideDown = {
  hidden: {
    opacity: 0,
    y: "-200%",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.2,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
  },
  exit: {
    y: -1000,
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

const Home: NextPage = () => {
  return (
    <ProfileSection>
      <Container>
        <Grid>
          <JSText>
            <BlinkingText>React Addict Javascript Enthusiast CSS Maniac</BlinkingText>
          </JSText>
          <ReactText>
            <BlinkingText>This App Created Using React, NextJs, Typescript, Contentful, Framer-Motion, Styled-Components, </BlinkingText>
          </ReactText>
          <ProfileBox>
            <Avatar
              variants={BounceUp}
              initial="initial"
              animate="animate"
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            >
              <AvatarImg
                layout="responsive"
                src="/me.png"
                alt="Rifqi Finaldy"
                objectFit="cover"
                width={64}
                height={64}
                priority
              />
            </Avatar>
          </ProfileBox>
          <ProfileBox>
            <Hello>Salute</Hello>
            <ProfileName>
              <SlideUpText>I'm Rifqi Finaldy</SlideUpText>

              {/* {fullName.split("").map((char, i) => {
                return (
                  <motion.span
                    style={{ display: "inline-block" }}
                    variants={letter}
                    transition={{
                      repeatType: "mirror",
                      duration: 0.78,
                    }}
                    key={char + "-" + i}
                  >
                    {char}
                  </motion.span>
                );
              })} */}
            </ProfileName>
            <ProfileRole variants={SlideUp} initial="hidden" animate="visible">
              Frontend Developer
            </ProfileRole>
            <motion.div variants={SlideDown} initial="hidden" animate="visible">
              <Button
                mt="l"
                color="purple"
                onClick={() => {
                  console.log("TEST");
                }}
              >
                More About Me
              </Button>
            </motion.div>
          </ProfileBox>
        </Grid>
      </Container>
    </ProfileSection>
  );
};

export default Home;
