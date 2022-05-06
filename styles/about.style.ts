import { motion } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";

export const ImageWrapper = styled.div`
  flex: 0 0 40%;
  max-width: 40%;
  padding: 0 15px;
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
`;

export const InformationWrapper = styled.div`
  flex: 0 0 60%;
  max-width: 60%;
  padding: 0 15px;
  height: 360px;
`;

export const InformationText = styled(motion.p)`
  font-size: 16px;
  line-height: 26px;
  margin-bottom: ${({ theme }) => theme.margin.m};
`;

export const InformationMain = styled.span`
  color: ${({ theme }) => theme.colors.orange};
`;

export const SliderWrapper = styled(motion.div)`
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
  margin-left: ${({theme}) => theme.margin.s};
  margin-bottom: ${({theme}) => theme.margin.s};
  font-size: 14px;
`;

export const SliderTitle = styled.h6`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.font.weight.light};
  opacity: ${({ theme }) => theme.opacity.medium};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: ${({ theme }) => theme.margin.s};
`;
