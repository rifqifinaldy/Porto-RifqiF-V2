import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { Button } from "../components/Button/Button";
import Carousel from "../components/Carousel/Carousel";
import { Container, Grid } from "../components/Layouts/Layouts";
import PageTitle from "../components/Text/Title";
import {
  AboutImage,
  ImageBox,
  ImageFrame,
  ImageWrapper,
  InformationMain,
  InformationText,
  InformationWrapper,
  SocialMedia,
  SocialMediaIcon,
  SocialMediaTitle,
} from "../styles/about.style";

const about = () => {
  return (
    <Container>
      <PageTitle title="About" subtitle="My Profile" />
      <Grid>
        <ImageWrapper>
          <ImageBox>
            <ImageFrame>
              <AboutImage
             
                layout="responsive"
                src="/me.png"
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
          <InformationText>
            <InformationMain>Hello ! Im Rifqi Finaldy</InformationMain>, Im
            creative a Frontend Developer with over 1+ years experience in
            Frontend Development. Also experienced in developing various Web App
            with different Bussiness Logic.
          </InformationText>
          <InformationText>
            You can download my CV down below for more detail about me or click
            here if you wish to review my Project's
          </InformationText>
          <Button color="purple">Download CV</Button>
          <SocialMedia>
            <SocialMediaTitle>Social Media</SocialMediaTitle>
            <Link href="https://github.com/rifqifinaldy">
              <SocialMediaIcon>
                <AiFillGithub />
              </SocialMediaIcon>
            </Link>
            <Link href="https://github.com/rifqifinaldy">
              <SocialMediaIcon>
                <AiFillLinkedin />
              </SocialMediaIcon>
            </Link>
            <Link href="https://github.com/rifqifinaldy">
              <SocialMediaIcon>
                <AiFillInstagram />
              </SocialMediaIcon>
            </Link>
          </SocialMedia>
          <Carousel />
        </InformationWrapper>
        
      </Grid>
    </Container>
  );
};

export default about;
