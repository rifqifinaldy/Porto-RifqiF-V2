import { AnimatePresence, motion } from "framer-motion";
import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { Button } from "../components/Button/Button";
import { Container, Grid } from "../components/Layouts/Layouts";
import { SlideUpText } from "../components/Text/text.animation";
import PageTitle from "../components/Text/Title";
import {
  AboutImage,
  ImageBox,
  ImageFrame,
  ImageWrapper,
  InformationWrapper,
  SocialMediaIcon,
  SliderTitle,
  SliderWrapper,
  SkillBox,
  AboutSection,
} from "../styles/about.style";
import {
  BounceDown,
  FadingDown,
  FadingUP,
  Rotate,
  SlideRight,
  ZoomRotate,
} from "../styles/global.animation";

const skill = [
  { id: 0, name: "HTML" },
  { id: 1, name: "CSS" },
  { id: 2, name: "Javascript" },
  { id: 4, name: "React" },
  { id: 5, name: "Next" },
  { id: 6, name: "Typescript" },
  { id: 7, name: "Redux" },
];

const About: NextPage = () => {
  const [next, setNext] = useState<boolean>(true);
  setTimeout(() => {
    setNext(!next);
  }, 8000);

  const SliderMotion = {
    initial: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      display: "block",
      x: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    hide: {
      opacity: 0,
      display: "none",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
  };

  return (
    <AboutSection>
      <Container>
        <PageTitle title="About" subtitle="My Profile" />
        <Grid>
          <ImageWrapper>
            <ImageBox variants={Rotate}>
              <ImageFrame>
                <AboutImage
                  layout="responsive"
                  src="/me2.png"
                  alt="Rifqi Finaldy"
                  objectFit="cover"
                  width={64}
                  height={64}
                  priority
                />
              </ImageFrame>
            </ImageBox>
          </ImageWrapper>
          <InformationWrapper>
            <motion.p variants={FadingUP}>
              <span>Greeting I&apos;m, Rifqi Finaldy, </span> you can also call me
              Javascript Enthusiast, React Addict, Experienced Frontend
              Developer. Also Experienced in driving various Web App with
              different Bussiness Logic. Im easily inspired and prefer to keep
              learning and continue challenging myself as &quot;Skill can be
              Taught and Personality is Inherent&quot;.
            </motion.p>
            <motion.p variants={FadingDown}>
              Read more about my personality, education, skills, experience in
              the PDF (CV) attached below.
            </motion.p>
            <motion.div variants={BounceDown}>
              <a href="/cv_rifqifinaldy.pdf" target="_blank">
                <Button color="purple">Download CV</Button>
              </a>
            </motion.div>
            <SliderWrapper variants={FadingDown}>
              <AnimatePresence>
                <motion.section
                  key="1"
                  variants={SliderMotion}
                  animate={next ? "show" : "hide"}
                >
                  <SliderTitle>Contact Me</SliderTitle>
                  <Link href="https://github.com/rifqifinaldy" passHref={true}>
                    <SocialMediaIcon
                      target="_blank"
                      variants={ZoomRotate}
                      whileHover="hover"
                    >
                      <AiFillGithub />
                    </SocialMediaIcon>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/rifqi-finaldy-705a541b7"
                    passHref={true}
                  >
                    <SocialMediaIcon
                      target="_blank"
                      variants={ZoomRotate}
                      whileHover="hover"
                    >
                      <AiFillLinkedin />
                    </SocialMediaIcon>
                  </Link>
                  <Link
                    href="https://www.instagram.com/rifqifinaldy"
                    passHref={true}
                  >
                    <SocialMediaIcon
                      target="_blank"
                      variants={ZoomRotate}
                      whileHover="hover"
                    >
                      <AiFillInstagram />
                    </SocialMediaIcon>
                  </Link>
                </motion.section>
                <motion.section
                  key="2"
                  variants={SliderMotion}
                  animate={next ? "hide" : "show"}
                >
                  <SliderTitle>Primary Skill</SliderTitle>
                  {skill.map((skill, i) => {
                    return <SkillBox key={i}>{skill.name}</SkillBox>;
                  })}
                </motion.section>
              </AnimatePresence>
            </SliderWrapper>
          </InformationWrapper>
        </Grid>
      </Container>
    </AboutSection>
  );
};

export default About;
