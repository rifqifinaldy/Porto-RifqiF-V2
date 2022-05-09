import React from "react";
import { Container, Grid } from "../components/Layouts/Layouts";
import PageTitle from "../components/Text/Title";
import { PortfolioItem, PortfolioSection } from "../styles/portfolio.style";

const portfolio = () => {
  return (
    <PortfolioSection>
      <PageTitle title="Portfolio" subtitle="My Projects" />
      <Container>
        <Grid>
          <PortfolioItem>Item1</PortfolioItem>
          <PortfolioItem>Item1</PortfolioItem>
          <PortfolioItem>Item1</PortfolioItem>
        </Grid>
      </Container>
    </PortfolioSection>
  );
};

export default portfolio;
