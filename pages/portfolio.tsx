import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import { Container, Grid } from "../components/Layouts/Layouts";
import PageTitle from "../components/Text/Title";
import {
  FilterItem,
  PortfolioFilter,
  PortfolioItem,
  PortfolioSection,
  PortfolioWrapper,
} from "../styles/portfolio.style";
import { AnimatePresence, motion } from "framer-motion";

const portfolio = () => {
  const portfolios = [
    {
      id: 0,
      title: "Projects 1",
      tag: ["Tag 1", "Tag 2"],
      filter: "projects",
    },
    {
      id: 1,
      title: "Projects 2",
      tag: ["Tag 3", "Tag 4"],
      filter: "mini",
    },
    {
      id: 3,
      title: "Projects 3",
      tag: ["Tag 3", "Tag 4"],
      filter: "mini",
    },
    {
      id: 4,
      title: "Projects 4",
      tag: ["Tag 3", "Tag 4"],
      filter: "projects",
    },
  ];
  const [data, setData] = useState(portfolios);
  const [filtered, setFiltered] = useState(portfolios);
  const [active, setActive] = useState("all");

  useEffect(() => {
    if (active === "all") {
      setFiltered(portfolios);
      return;
    }
    const filtered = portfolios.filter((data) => data.filter.includes(active));
    setFiltered(filtered);
  }, [active]);

  return (
    <PortfolioSection>
      <PageTitle title="Portfolio" subtitle="My Works" />
      <Container>
        <PortfolioFilter>
          <FilterItem
            isSelected={active === "all" ? true : false}
            onClick={() => setActive("all")}
          >
            All
          </FilterItem>
          <FilterItem
            isSelected={active === "projects" ? true : false}
            onClick={() => setActive("projects")}
          >
            Projects
          </FilterItem>
          <FilterItem
            isSelected={active === "mini" ? true : false}
            onClick={() => setActive("mini")}
          >
            Mini Projects
          </FilterItem>
        </PortfolioFilter>
        <PortfolioWrapper layout>
          <AnimatePresence>
            {filtered.map((data, i) => {
              let tag = data.tag.join(", ");
              return (
                <PortfolioItem key={i}>
                  <Card title={data.title} subtitle={tag} />
                </PortfolioItem>
              );
            })}
          </AnimatePresence>
        </PortfolioWrapper>
      </Container>
    </PortfolioSection>
  );
};

export default portfolio;
