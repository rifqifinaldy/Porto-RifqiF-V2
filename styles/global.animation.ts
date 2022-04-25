import { theme } from "./theme.style";

export const BounceUp = {
  initial: { y: 0 },
  animate: { y: -25 },
};

// For Animation Purpose
export const SlideUp = {
  initial: {
    color: theme.colors.background,
    y: 25,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
  },
  animate: {
    color: theme.colors.text.primary,
    y: 0,
    transition: {
      delay: 0.75,
      ease: [0.455, 0.03, 0.515, 0.955],
      duration: 0.75,
    },
  },
};

export const SlideDown = {
  initial: {
    opacity: 0,
    y: "-200%",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.2,
    },
  },
};
