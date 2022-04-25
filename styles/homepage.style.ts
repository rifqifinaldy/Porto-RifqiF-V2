import { motion } from "framer-motion";
import styled from "styled-components";
import Image from "next/image";

export const ProfileSection = styled.main`
  position: relative;
  padding: 50px 0;
  width: 100%;
  @media screen and (max-width: 768px) {
    padding: 40px 0;
  }
`;

export const Avatar = styled(motion.div)`
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

export const AvatarImg = styled(Image)`
  width: 100%;
  border-radius: 50%;
  border: 10px solid transparent;
  box-shadow: ${({ theme }) => theme.shadow.outer_shadow};
`;

export const ProfileBox = styled.div`
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

export const Hello = styled.small`
  font-size: 18px;
  text-transform: capitalize;
  margin: 0;
  color: ${({ theme }) => theme.colors.orange};
  opacity: ${({ theme }) => theme.opacity.hard};
`;

export const ProfileName = styled(motion.h2)`
  font-size: 55px;
  font-weight: ${({ theme }) => theme.font.weight.extraBold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
  @media screen and (max-width: 564px) {
    font-size: 40px;
  }
`;

export const ProfileRole = styled(motion.h4)`
  font-size: 20px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 0;
  text-transform: capitalize;
  opacity: ${({ theme }) => theme.opacity.hard};
`;

export const JSText = styled(motion.h6)`
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

export const ReactText = styled(motion.h6)`
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