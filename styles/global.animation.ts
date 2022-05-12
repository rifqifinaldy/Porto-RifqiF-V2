import { theme } from "./theme.style";

export const FloatUp = {
  initial: { y: 0 },
  animate: { y: -25 },
};

// For Animation Purpose
export const SlideUp = {
  initial: {
    opacity: 0,
    color: theme.colors.background,
    y: 25,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
  },
  animate: {
    opacity: 1,
    color: theme.colors.text.primary,
    y: 0,
    transition: {
      delay: 0.75,
      ease: [0.455, 0.03, 0.515, 0.955],
      duration: 0.75,
    },
  },
};

export const BounceDown = {
  initial: {
    opacity: 0,
    y: "-200%",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.3,
    },
  },
};

export const FadingUP = {
  initial : {
    opacity : 0,
    y: 25
  },
  animate : {
    opacity : 1,
    y: 1,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85, delay: 0.5, },
  }
}

export const FadingDown = {
  initial : {
    opacity : 0,
    y: -25
  },
  animate : {
    opacity : 1,
    y: 1,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85, delay: 0.5, },
  }
}

export const Rotate = {
  initial: {
    opacity: 0,
    rotateY: 90,
    scale: 0.5,
    x: 20,
  },
  animate: {
    opacity: 1,
    rotateY: 0,
    scale : 1,
    x: 0,
    transition: {
      delay: 0.5,
      ease: [0.455, 0.03, 0.515, 0.955],
      duration: 0.85,
    },
  },
};

export const SlideLeft = {
  initial: {
    opacity: 0,
    x: "-100vw",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.75,
      ease: [0.455, 0.03, 0.515, 0.955],
      duration: 0.85,
    },
  },
};

export const SlideRight = {
  initial: {
    opacity: 0,
    x: "100vw",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.75,
      ease: [0.455, 0.03, 0.515, 0.955],
      duration: 0.85,
    },
  },
};

export const ZoomRotate = {
  intial: {
    opacity: 0,
  },
  hover: {
    scale: [1, 1.2, 1.2],
    rotate: [0, 0, 45, 45, 0],
    opacity: 1,
    transition: {
      ease: [0.455, 0.03, 0.515, 0.955],
      duration: 0.85,
    },
  },
};

export const Growing = {
  intial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    scale: [0, 1],
    transition: {
      delay: 0.75,
      ease: [0.455, 0.03, 0.515, 0.955],
      duration: 0.85,
    },
  },
};
