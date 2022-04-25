import React, { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface IChildren {
  children: string;
}

export const SlideUpText = ({ children }: IChildren) => {
  let words = children.split(" ");
  return (
    <div style={{ display: "inline-block", overflow: "hidden" }}>
      {words.map((words, i) => {
        return (
          <motion.div
            key={i}
            initial={{ y: "100%" }}
            animate="animate"
            exit= "exit"
            variants={{
              animate: (i: number) => ({
                y: 0,
                transition: {
                  duration: 0.75,
                  delay: i * 0.2,
                },
              }),
            }}
            style={{ display: "inline-block", willChange: "transform" }}
            custom={i}
          >
            {words + (i !== words.length - 1 ? "\u00A0" : "")}
          </motion.div>
        );
      })}
    </div>
  );
};

export const BlinkingText = ({ children }: IChildren) => {
  let words = children.split(" ");
  return (
    <div style={{ display: "inline-block", overflow: "hidden" }}>
      {words.map((words, i) => {
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, }}
            animate="visible"
            variants={{
              visible: (i: number) => ({
                opacity: 0.65,
                transition: {
                  duration: 1.2,
                  delay: i * 0.5,
                  repeat: Infinity,
                  repeatType: "mirror",
                },
              }),
            }}
            style={{ display: "inline-block", willChange: "transform" }}
            custom={i}
          >
            {words + (i !== words.length - 1 ? "\u00A0" : "")}
          </motion.div>
        );
      })}
    </div>
  );
};
