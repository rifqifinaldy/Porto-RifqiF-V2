import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React, { useState } from "react";
import { Container, Grid } from "../../components/Layouts/Layouts";
import PageTitle from "../../components/Text/Title";
import { IPortfolioFields } from "../../src/@types/contentful";
import ContentService from "../../src/util/content-service";
import {
  CarouselBox,
  CarouselImages,
  CarouselNavigation,
  StackWrapper,
  TextWrapper,
} from "../../styles/portfolio.style";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useEffect } from "react";

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

const loaderVariants: Variants = {
  initial: {
    opacity: 0,
  },

  animate: (delay: number) => ({
    y: [0, 10, -10],
    opacity: 1,
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: "reverse",
      delay: delay * 0.1,
    },
  }),
  exit: {
    opacity: 0,
  },
};

const variants: Variants = {
  left: {
    x: "-100%",
    opacity: 0,
  },
  center: {
    x: 0,
    opacity: 1,
  },
  right: {
    x: "100%",
    opacity: 0,
  },
};
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const PortfolioDetail: NextPage<Props> = ({
  portfolio: { name, images, url, repository, type, tags, thumbnail },
}) => {
  console.log("DETAILS", images);
  const [isLoading, setIsLoading] = useState(true);
  const [source, setSource] = useState("");
  const [index, setIndex] = useState(0);

  function next() {
    setIndex((prev) => (prev + 1) % images.length);
  }

  function previous() {
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
  }, [index]);

  return (
    <Container>
      <PageTitle title={name} subtitle="My Works" />
      <Grid>
        <TextWrapper></TextWrapper>
        <StackWrapper>
          <CarouselBox>
            <AnimatePresence>
              {isLoading ? (
                <h1>Loading</h1>
              ) : (
                <CarouselImages
                  loading="lazy"
                  key={index}
                  src={source}
                  variants={variants}
                  initial="left"
                  animate="center"
                  exit="right"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);

                    if (swipe < -swipeConfidenceThreshold) {
                      previous();
                    } else if (swipe > swipeConfidenceThreshold) {
                      next();
                    }
                  }}
                />
              )}
            </AnimatePresence>
          </CarouselBox>
          <CarouselNavigation>
            <button onClick={previous}>Previous</button>
            <button onClick={next}>Next</button>
          </CarouselNavigation>
        </StackWrapper>
      </Grid>
    </Container>
  );
};

export default PortfolioDetail;
