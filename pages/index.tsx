import type { NextPage } from "next";
import { BlinkingText, SlideUpText } from "../components/Text/text.animation";
import { Button } from "../components/Button/Button";
import { Container, Grid } from "../components/Layouts/Layouts";
import { BounceUp, SlideDown, SlideUp } from "../styles/global.animation";
import {
  Avatar,
  AvatarImg,
  Hello,
  JSText,
  ProfileBox,
  ProfileName,
  ProfileRole,
  ProfileSection,
  ReactText,
} from "../styles/homepage.style";
import { motion } from "framer-motion";

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
