
import React, { FC } from "react";
import {
  CardImage,
  CardImageWrapper,
  CardInformation,
  CardLink,
  CardSubtitle,
  CardTitle,
  CardTitleBox,
  RFCard,
} from "./card.styles";

interface ICard {
  title: string;
  subtitle: string;
  image: string;
}

const Card: FC<ICard> = ({ title, subtitle, image }) => {
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
      <CardTitleBox>
        <CardTitle>{title}</CardTitle>
        <i></i>
        <i></i>
      </CardTitleBox>

      <CardImageWrapper variants={ImageMotion}>
        <CardImage src={image} layout="fill" objectFit="fill" priority={true} />
      </CardImageWrapper>
      <CardInformation variants={LinkMotion}>
        <CardSubtitle variants={LinkMotion}>{subtitle}</CardSubtitle>
      </CardInformation>
    </RFCard>
  );
};

export default Card;
