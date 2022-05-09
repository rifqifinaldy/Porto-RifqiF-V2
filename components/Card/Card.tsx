import React, { FC } from "react";
import {
  CardImage,
  CardImageWrapper,
  CardSubtitle,
  CardTitle,
  RFCard,
} from "./card.styles";

interface ICard {
  title: string;
  subtitle: string;
}

const Card: FC<ICard> = ({ title, subtitle }) => {
  return (
    <RFCard
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      layout
    >
      <CardImageWrapper>
        <CardImage
          src="/project-1.png"
          width="100%"
          height="50"
          layout="responsive"
          priority={true}
        />
      </CardImageWrapper>
      <CardTitle>{title}</CardTitle>
      <CardSubtitle>{subtitle}</CardSubtitle>
    </RFCard>
  );
};

export default Card;
