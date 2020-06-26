export const navVariants = {
  initial: {
    x: '-100%',
    pointerEvents: 'none',
    transition: {
      easing: 'easeInOut',
      staggerChildren: 0.1,
    },
  },
  open: {
    x: 0,
    pointerEvents: 'all',
    transition: {
      easing: 'easeInOut',
      when: 'beforeChildren',
      staggerChildren: 0.05,
    },
  },
};

export const navItemVariants = {
  initial: {
    opacity: 0,
    x: '-10%',
    transition: {
      type: 'spring',
      easing: 'easeInOut',
    },
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      easing: 'easeInOut',
      duration: 0.3,
    },
  },
};
