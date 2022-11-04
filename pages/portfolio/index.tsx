import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { Container } from "../../components/Layouts/Layouts";
import PageTitle from "../../components/Text/Title";
import {
  FilterItem,
  Notes,
  PortfolioFilter,
  PortfolioItem,
  PortfolioSection,
  PortfolioWrapper,
} from "../../styles/portfolio.style";
import { AnimatePresence } from "framer-motion";
import { IPortfolioFields } from "../../src/@types/contentful";
import { GetStaticProps, NextPage } from "next";
import ContentService from "../../src/util/content-service";
import Link from "next/link";

interface Props {
  portfolio: IPortfolioFields[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const portfolio = (
    await ContentService.instance.getEntriesByType<IPortfolioFields>(
      "portfolio"
    )
  ).map((entry) => entry.fields);

  return {
    props: {
      portfolio,
    },
    revalidate: 1,
  };
};

const Portfolio: NextPage<Props> = ({ portfolio }) => {
  const [filtered, setFiltered] = useState(portfolio);
  const [active, setActive] = useState("all");

  useEffect(() => {
    if (active === "all") {
      setFiltered(portfolio);
      return;
    }
    const filtered = portfolio.filter((data) => data.type.includes(active));
    setFiltered(filtered);
  }, [active, portfolio]);

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
            isSelected={active === "mini app" ? true : false}
            onClick={() => setActive("mini app")}
          >
            Mini Projects
          </FilterItem>
        </PortfolioFilter>
        <Notes>Please Note, that i didn&apos;t share all of my works / contributions here as some of them are still on development process or it&apos;s against the app / company privacy</Notes>
        <PortfolioWrapper layout={true}>
          <AnimatePresence>
            {filtered.map((data, i) => {
              let tag = data.tags.join(", ");
              return (
                <Link key={data.slug} href={`/portfolio/${data.slug}`} passHref={true}>
                  <PortfolioItem>
                    <Card
                      title={data.name}
                      subtitle={tag}
                      image={"https:" + data.thumbnail.fields.file.url}
                    />
                  </PortfolioItem>
                </Link>
              );
            })}
          </AnimatePresence>
        </PortfolioWrapper>
      </Container>
    </PortfolioSection>
  );
};

export default Portfolio;
