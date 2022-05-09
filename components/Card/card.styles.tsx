import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";

export const RFCard = styled(motion.div)`
  cursor: pointer;
  position: relative;
  padding: 5px;
  border-radius: 2px;
  width: 100%;
  box-shadow: 0.2px 0.2px 2px 0.5px ${({theme}) => theme.colors.purple};
`;

export const CardImageWrapper = styled(motion.div)`
  cursor: pointer;
  position: relative;
  border-radius: 20px;
  width: 100%;
  height: 150px;
`;

export const CardImage = styled(Image)`
  width: 100%;
  vertical-align: middle;
  border-radius: 5px;
`;

export const CardTitle = styled.h4`
  text-align: center;
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: ${({ theme }) => theme.font.weight.normal};
  font-size: 16px;
`;

export const CardSubtitle = styled.p`
  text-align: center;
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
  font-size: 18px;
  border: 1px solid ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.colors.orange};
  cursor: pointer;
  margin-left: 1em;
  &:nth-child(2) {
    color: ${({ theme }) => theme.colors.purple};
    border: 1px solid ${({ theme }) => theme.colors.purple};
  }
`;
