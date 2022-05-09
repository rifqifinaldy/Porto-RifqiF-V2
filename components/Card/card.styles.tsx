import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";

export const RFCard = styled(motion.div)`
  padding: 0 0 15px 0;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  box-shadow: 0.5px 2px 1px #242424;
`;

export const CardImageWrapper = styled.div`
  border-radius: 20px;
  width: 100%;
`;

export const CardImage = styled(Image)`
  width: 100%;
  object-fit: cover;
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
