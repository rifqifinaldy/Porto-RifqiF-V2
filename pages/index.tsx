import type { NextPage } from "next";
import Image from "next/image";
import { Button } from "../components/Button/Button";
import styled from "styled-components";
import { Container, Grid } from "../components/Layouts/Layouts";
import { motion } from "framer-motion";
import { BlinkingText, SlideUpText } from "../components/Text/text.animation";
import { BounceUp, SlideDown, SlideUp } from "../styles/global.animation";

const ProfileSection = styled.main`
  position: relative;
  padding: 50px 0;
  width: 100%;
  @media screen and (max-width: 768px) {
    padding: 40px 0;
  }
`;

const Avatar = styled(motion.div)`
  max-width: 450px;
  display: block;
  margin: auto;
  border-radius: 50%;
  padding: 15px;
  box-shadow: ${({ theme }) => theme.shadow.inner_shadow};
  @media screen and (max-width: 768px) {
    max-width: 360px;
  }
  @media screen and (max-width: 574px) {
    max-width: 260px;
  }
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
  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    text-align: center;
    padding: 0;
  }
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
  @media screen and (max-width: 564px) {
    font-size: 40px;
  }
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
  @media screen and (max-width: 768px) {
    top: 0;
    left: 0;
  }
  @media screen and (max-width: 540px) {
    top: 0;
    right: 90%;
  }
`;

const ReactText = styled(motion.h6)`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.font.weight.normal};
  color: ${({ theme }) => theme.colors.blue};
  margin: 0;
  text-transform: capitalize;
  position: absolute;
  right: 30%;
  margin: 0 auto;
  bottom: 0;
  @media screen and (max-width: 768px) {
    right: 0;
  }
`;

const Home: NextPage = () => {
  return (
    <ProfileSection>
      <Container>
        <Grid>
          <JSText>
            <BlinkingText>
              React Addict Javascript Enthusiast CSS Maniac
            </BlinkingText>
          </JSText>
          <ReactText>
            <BlinkingText>
              This App Created Using React, NextJs, Typescript, Contentful,
              Framer-Motion, Styled-Components
            </BlinkingText>
          </ReactText>
          <ProfileBox>
            <Avatar
              variants={BounceUp}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "mirror",
                ease: [0.455, 0.03, 0.515, 0.955],
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
            </ProfileName>
            <ProfileRole variants={SlideUp}>Frontend Developer</ProfileRole>
            <motion.div variants={SlideDown}>
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
