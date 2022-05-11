import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";

export const RFCard = styled(motion.div)`
  
  position: relative;
  padding: 0;
  border-radius: 5px 5px 0 0;
  height: 240px;
  width: 100%;
  box-shadow: 6px 6px 0 rgb(100 100 100 / 15%);
`;

export const CardImageWrapper = styled(motion.div)`
  
  position: relative;
  width: 100%;
  height: 100%;
`;

export const CardImage = styled(Image)`
  width: 100%;
  border-radius: 5px 5px 0 0;
`;

export const CardTitleBox = styled.div`
  display: block;
  position: absolute;
  height: 24px;
  border-radius: 5px 5px 0 0;
  background-color: ${({ theme }) => theme.colors.blue};
  width: 100%;
  color: #131313;
  z-index: 10;
  & > i {
    height: 12px;
    width: 12px;
    display: inline-block;
    background-color: ${({ theme }) => theme.colors.red};
    border-radius: 50%;
    position: absolute;
    top: 6px;
    right: 10px;
    &:nth-child(2) {
      right: 30px;
      background-color: ${({ theme }) => theme.colors.background};
    }
  }
`;

export const CardTitle = styled.h4`
  text-align: left;
  margin-left: 0.5em;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: 14px;
`;

export const CardSubtitle = styled(motion.p)`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-weight: ${({ theme }) => theme.font.weight.light};
  font-size: 14px;
`;

export const CardInformation = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CardLink = styled(motion.a)`
  text-decoration: none;
  border-radius: 5px;
  padding: 0.5em;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.colors.orange};
  cursor: pointer;
  &:nth-child(2) {
    margin-left: 0.5em;
    color: ${({ theme }) => theme.colors.purple};
    border: 1px solid ${({ theme }) => theme.colors.purple};
  }
`;
