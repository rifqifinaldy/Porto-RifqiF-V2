import React, { FC, ReactNode } from "react";
import { BaseColors, Margin } from "../../types/styled";
import { MotionButton, RFButton } from "./button.style";

export interface IButton {
  children?: ReactNode;
  color?: BaseColors;
  mt?: Margin;
  mb?: Margin;
  ml?: Margin;
  mr?: Margin;
  onClick?: () => void;
}

export const Button: FC<IButton> = ({
  children,
  onClick,
  color,
  mt,
  ml,
  mb,
  mr,
}) => {
  return (
    <RFButton
      variants={MotionButton}
      whileHover="hover"
      whileTap="tap"
      mt={mt}
      mb={mb}
      mr={mr}
      ml={ml}
      color={color}
      onClick={onClick}
    >
      {children}
    </RFButton>
  );
};
