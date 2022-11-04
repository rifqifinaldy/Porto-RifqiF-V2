import { motion } from "framer-motion";
import Image from "next/image";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
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
  &:hover {
    color: ${({ theme }) => theme.colors.purple};
  }
  ${(props) =>
    props.isSelected &&
    `
  color: ${theme.colors.orange};
  `}
`;

export const PortfolioWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
`;

export const PortfolioItem = styled.div`
  padding: 15px;
  flex-wrap: wrap;
`;

export const Notes = styled.small`
  display: block;
  text-align: center;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const TextWrapper = styled.div`
  flex: 0 0 40%;
  max-width: 40%;
  padding: 0 15px;
  height: 360px;
  & > h2 {
    font-size: 18px;
    opacity: 0.65;
    color: ${({ theme }) => theme.colors.orange};
  }
  & > h4 {
    font-weight: ${({ theme }) => theme.font.weight.normal};
    color: ${({ theme }) => theme.colors.orange};
  }
  & h6 {
    & span {
      font-weight: ${({ theme }) => theme.font.weight.bold};
      &:nth-child(2) {
        color: ${({ theme }) => theme.colors.red};
      }
    }
    & a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.blue};
    }
    font-weight: ${({ theme }) => theme.font.weight.normal};
    margin-top: 1em;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.text.primary};
  }
  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: ${({ theme }) => theme.margin.m};
    padding: 1em;
    height: auto;
  }
`;

export const Description = styled.div`
  margin-top: 1em;
  max-height: 280px;
  overflow: auto;
  & p {
    margin-top: 0.5em;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.text.secondary};
  }
  & a {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export const StackWrapper = styled.div`
  position: relative;
  flex: 0 0 60%;
  max-width: 60%;
  padding: 0 15px;
  align-items: "center";
  justify-content: "center";
  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: ${({ theme }) => theme.margin.m};
    padding: 1em;
    height: auto;
  }
`;

export const CarouselBox = styled.main`
  position: relative;
  height: 360px;
  border-radius: 5px;
  place-items: center;
  box-shadow: inset 0px 0px 15px black;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.purple};
  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
    height: auto;
    margin-bottom: ${({ theme }) => theme.margin.m};
    padding: 0;
  }
`;

export const CarouselNavigation = styled.div``;

export const LeftArrow = styled(AiFillCaretLeft)`
  margin-left: 0.4em;
  color: ${({ theme }) => theme.colors.orange};
  font-size: 32px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 0;
  transition: 0.45s ease;
  &:hover {
    opacity: 0.5;
  }
`;

export const RightArrow = styled(AiFillCaretRight)`
  margin-right: 0.4em;
  color: ${({ theme }) => theme.colors.orange};
  font-size: 32px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 0;
  transition: 0.45s ease;
  &:hover {
    opacity: 0.5;
  }
`;

export const CarouselImages = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: filter 500ms ease;
`;
