import { motion } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";
import { theme } from "./theme.style";

export const PortfolioSection = styled.main``;

export const PortfolioFilter = styled.div`
  padding: 0 15px;
  flex: 0 0 100%;
  max-width: 100%;
  text-align: center;
  margin-bottom: 20px;
`;

export const FilterItem = styled("span")<{ isSelected: boolean }>`
  display: inline-block;
  margin: 0 5px 10px;
  padding: 5px 10px;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 500;
  text-transform: capitalize;
  font-size: 16px;
  transition: all 0.3s ease;
  ${(props) =>
    props.isSelected &&
    `
  color: ${theme.colors.orange};
  `}
`;

export const PortfolioWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
`;

export const PortfolioItem = styled.div`
  padding: 15px;
  flex-wrap: wrap;
`;

export const TextWrapper = styled.div`
  flex: 0 0 40%;
  max-width: 40%;
  padding: 0 15px;
  height: 360px;
`;

export const StackWrapper = styled.div`
  flex: 0 0 60%;
  max-width: 60%;
  padding: 0 15px;
  align-items: "center";
  justify-content: "center";
  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: ${({ theme }) => theme.margin.m};
    padding: 0;
  }
`;

export const CarouselBox = styled.main`
  position: relative;
  height: 360px;
  place-items: center;
  box-shadow: inset 0px 0px 15px black;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.purple};
`;

export const CarouselNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CarouselImages = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: filter 500ms ease;
`;
