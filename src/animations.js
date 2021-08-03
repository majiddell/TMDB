export const SlowFadeIn = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
    },

    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  },
};
export const fastFadeIn = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.7,
    },

    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  },
};
