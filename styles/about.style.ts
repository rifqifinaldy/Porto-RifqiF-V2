import { motion } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";

export const AboutSection = styled.main`
  position: relative;
  width: 100%;
  @media screen and (max-width: 768px) {
    padding: 0 10px;
  }
`;

export const ImageWrapper = styled.div`
  flex: 0 0 40%;
  max-width: 40%;
  padding: 0 15px;
  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    padding: 0;
  }
`;

export const ImageBox = styled(motion.div)`
  padding: 15px;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadow.inner_shadow};
  background: "#fefefe";
`;

export const ImageFrame = styled.div`
  border: 10px solid transparent;
  box-shadow: ${({ theme }) => theme.shadow.outer_shadow};
`;

export const AboutImage = styled(Image)`
  width: 100%;
  border: 10px solid transparent;
  vertical-align: middle;
  border-radius: 5px;
  filter: grayscale(80%);
`;

export const InformationWrapper = styled.div`
  flex: 0 0 60%;
  max-width: 60%;
  padding: 0 15px;
  height: 360px;
  & > p {
    margin-bottom: ${({theme}) => theme.margin.m};
    & > span {
      color: ${({theme}) => theme.colors.orange}
    }
  }
  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: ${({ theme }) => theme.margin.m};
    padding: 0;
  }
`;

export const InformationMain = styled.span`
  color: ${({ theme }) => theme.colors.orange};
`;

export const SliderWrapper = styled(motion.div)`
  max-width: 100%;
  bottom: 0;
  text-align: center;
  margin-top: ${({ theme }) => theme.margin.l};
`;

export const SocialMediaIcon = styled(motion.a)`
  display: inline-block;
  height: 40px;
  width: 40px;
  font-size: 24px;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const SkillText = styled(motion.a)`
  display: inline-block;
  font-size: 16px;
  margin: 0 5px;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const SkillBox = styled.div`
  display: inline-block;
  border: ${({ theme }) => theme.colors.purple} 0.5px solid;
  padding: 0.4em 0.65em;
  border-radius: 5px;
  margin-left: ${({ theme }) => theme.margin.s};
  margin-bottom: ${({ theme }) => theme.margin.s};
  font-size: 14px;
  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    padding: 0;
  }
`;

export const SliderTitle = styled.h6`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.font.weight.light};
  opacity: ${({ theme }) => theme.opacity.medium};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: ${({ theme }) => theme.margin.s};
`;
