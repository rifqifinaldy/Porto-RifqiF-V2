import Link from "next/link";
import React, { FC } from "react";
import {
  CardImage,
  CardImageWrapper,
  CardInformation,
  CardLink,
  CardSubtitle,
  CardTitle,
  RFCard,
} from "./card.styles";

interface ICard {
  title: string;
  subtitle: string;
  image: string;
  slug: string;
  url?: string;
}

const Card: FC<ICard> = ({ title, subtitle, image, slug, url }) => {
  const CardMotion = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },
    hover: {
      backgroundColor: "rgba(13, 1, 6, 0.3)",
    },
    exit: {
      opacity: 0,
      scale: 0,
    },
  };

  const LinkMotion = {
    initial: {
      opacity: 0,
    },
    hover: {
      opacity: 1,
    },
  };

  const ImageMotion = {
    initial: {
      opacity: 1,
    },
    hover: {
      opacity: 0.3,
      scale: 0.8,
    },
  };

  return (
    <RFCard
      variants={CardMotion}
      initial="initial"
      animate="animate"
      exit="exit"
      whileHover="hover"
      transition={{ duration: 0.65 }}
      layout
    >
      <CardImageWrapper variants={ImageMotion}>
        <CardImage
          src={image}
          layout="fill"
          objectFit="cover"
          priority={true}
        />
      </CardImageWrapper>
      <CardInformation variants={LinkMotion}>
        <Link href={slug} passHref={true}>
          <CardLink>Preview</CardLink>
        </Link>
        {url && (
          <Link href={url} passHref={true}>
            <CardLink target="_blank">Visit</CardLink>
          </Link>
        )}
      </CardInformation>
      <CardTitle>{title}</CardTitle>
      <CardSubtitle>{subtitle}</CardSubtitle>
    </RFCard>
  );
};

export default Card;
