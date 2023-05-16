import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React, { useState } from "react";
import { Container, Grid } from "../../components/Layouts/Layouts";
import PageTitle from "../../components/Text/Title";
import { IPortfolioFields } from "../../src/@types/contentful";
import ContentService from "../../src/util/content-service";
import {
  CarouselBox,
  CarouselImages,
  CarouselNavigation,
  Description,
  LeftArrow,
  RightArrow,
  StackWrapper,
  TextWrapper,
} from "../../styles/portfolio.style";
import { AnimatePresence, Variants } from "framer-motion";
import { useEffect } from "react";
import { Button } from "../../components/Button/Button";
import Link from "next/link";
import { Spinner } from "../../components/Spinner/spinner.styles";

interface Props {
  portfolio: IPortfolioFields;
}

export const getStaticProps: GetStaticProps<Props, { slug: string }> = async (
  ctx
) => {
  const { slug } = ctx.params!;
  const portfolio = await ContentService.instance.getPortfolioBySlug(slug);

  if (!portfolio) {
    return { notFound: true };
  }

  return {
    props: {
      portfolio: portfolio.fields,
    },
    revalidate: 1,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const portfolio =
    await ContentService.instance.getEntriesByType<IPortfolioFields>(
      "portfolio"
    );

  return {
    paths: portfolio.map((portfolio) => ({
      params: {
        slug: portfolio.fields.slug,
      },
    })),
    fallback: false,
  };
};

const variants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const PortfolioDetail: NextPage<Props> = ({
  portfolio: {
    name,
    images,
    url,
    repository,
    type,
    tags,
    description,
  },
}) => {
  
  const [isLoading, setIsLoading] = useState(true);
  const [source, setSource] = useState("");
  const [index, setIndex] = useState(0);

  function next() {
    console.log("NEXT");
    setIndex((prev) => (prev + 1) % images.length);
  }

  function previous() {
    console.log("PREVIOUS");
    setIndex((prev) => (prev !== 0 ? prev - 1 : images.length - 1));
  }

  async function loadImage(imageUrl: string) {
    let img: HTMLImageElement = null!;

    const imageLoadPromise = new Promise((resolve, reject) => {
      img = new Image();
      setIsLoading(true);
      img.onload = () => {
        resolve(img);
      };

      img.onerror = () => {
        reject();
      };
      img.src = imageUrl;
    });

    await imageLoadPromise;
    setIsLoading(false);
    return img;
  }

  useEffect(() => {
    loadImage(images[index].fields.file.url).then((img) => setSource(img.src));
  }, [index, images]);

  return (
    <Container>
      <PageTitle title={type} subtitle="Preview" />
      <Grid>
        <TextWrapper>
          <h1>{name}</h1>
          <h2> {tags.join(", ")} </h2>
          <Description>
            {description ? documentToReactComponents(description) : null}
          </Description>
        </TextWrapper>
        <StackWrapper>
          <CarouselBox>
            <AnimatePresence>
              {isLoading ? (
                <Spinner />
              ) : (
                <CarouselImages
                  loading="lazy"
                  key={index}
                  src={source}
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                />
              )}
            </AnimatePresence>
          </CarouselBox>
          <CarouselNavigation>
            <LeftArrow onClick={previous} />
            <RightArrow onClick={next} />
          </CarouselNavigation>
        </StackWrapper>
        {url && (
          <Link href={url}>
            <a target="_blank">
              <Button color="blue">Visit This Website</Button>
            </a>
          </Link>
        )}

        {repository && (
          <Link href={repository}>
            <a target="_blank">
            <Button color="orange">View Sources</Button>
            </a>
          </Link>
        )}
      </Grid>
    </Container>
  );
};

export default PortfolioDetail;
