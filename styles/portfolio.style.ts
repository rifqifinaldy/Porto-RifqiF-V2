import { motion } from "framer-motion";
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
