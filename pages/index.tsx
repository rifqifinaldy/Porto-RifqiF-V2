import type { NextPage } from "next";
import Image from "next/image";
import { Button } from "../components/Button/Button";
import styled from "styled-components";
import { Container, Grid } from "../components/Layouts/Layouts";
import { motion } from "framer-motion";

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

const ProfileName = styled.h2`
  font-size: 55px;
  font-weight: ${({ theme }) => theme.font.weight.extraBold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
`;

const ProfileRole = styled.h4`
  font-size: 20px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 0;
  text-transform: capitalize;
  opacity: ${({ theme }) => theme.opacity.hard};
`;

const AvatarMotion = {
  initial: { y: 0 },
  animate: { y: -25},
};

const Home: NextPage = () => {
  return (
    <ProfileSection>
      <Container>
        <Grid>
          <ProfileBox>
            <Avatar
              variants={AvatarMotion}
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
            <ProfileName>I'm Rifqi Finaldy</ProfileName>
            <ProfileRole>Frontend Developer</ProfileRole>
            <Button
              mt="l"
              color="purple"
              onClick={() => {
                console.log("TEST");
              }}
            >
              More About Me
            </Button>
          </ProfileBox>
        </Grid>
      </Container>
    </ProfileSection>
  );
};

export default Home;
