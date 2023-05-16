import type { NextPage } from "next";
import { BlinkingText, SlideUpText } from "../components/Text/text.animation";
import { Button } from "../components/Button/Button";
import { Container, Grid } from "../components/Layouts/Layouts";
import { FloatUp, BounceDown, SlideUp } from "../styles/global.animation";
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
import Link from "next/link";

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
              variants={FloatUp}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "mirror",
                ease: [0.455, 0.03, 0.515, 0.955],
              }}
            >
              <AvatarImg
                layout="responsive"
                src="/me-3.png"
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
              <SlideUpText>I&apos;m Rifqi Finaldy</SlideUpText>
            </ProfileName>
            <ProfileRole variants={SlideUp}>Frontend Developer</ProfileRole>
            <motion.div variants={BounceDown}>
              <Link href="/about">
                <a>
                  <Button mt="l" color="purple">
                    More About Me
                  </Button>
                </a>
              </Link>
            </motion.div>
          </ProfileBox>
        </Grid>
      </Container>
    </ProfileSection>
  );
};

export default Home;
