import React from "react";
import { Container } from "../components/Layouts/Layouts";
import PageTitle from "../components/Text/Title";
import { PortfolioSection } from "../styles/portfolio.style";

const portfolio = () => {
  return (
    <PortfolioSection>
        <PageTitle title="Portfolio" subtitle="My Projects"/>
      <Container>Portfolio</Container>
    </PortfolioSection>
  );
};

export default portfolio;
