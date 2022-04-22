import styled from "styled-components";
import { IButton } from "./Button";
import { motion } from "framer-motion";

export const RFButton = styled(motion.button)<IButton>`
  padding: 10px 25px;
  font-size: 16px;
  font-weight: 500;
  color: ${(props) =>
    props.color ? props.theme.colors[props.color] : props.theme.colors.blue};
  background-color: transparent;
  line-height: 1.5;
  cursor: pointer;
  border-radius: 30px;
  border: 0.5px solid
    ${(props) =>
      props.color ? props.theme.colors[props.color] : props.theme.colors.blue};
  display: inline-block;
  margin-top: ${(props) =>
    props.mt ? props.theme.margin[props.mt] : props.theme.margin.s};
`;

export const MotionButton = {
  hover : {
    scale: 1.1,
    boxShadow : "0px 0px 8px #e2e2e2",
    transition: {
      duration : 0.2,
    }
  },
  tap : {
    scale : 0.9,
    boxShadow : "0px 0px 5px #e2e2e2",
  }
}