import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import { navVariants, navItemVariants } from './animation/variants';

import StyledMobileNav from './styles/StyledMobileNav';

const MobileNav = props => {
  const [isOpen, setOpen] = useState(false);

  return (
    <StyledMobileNav>
      <img
        src={process.env.PUBLIC_URL + '/assets/svgs/hamburger.svg'}
        alt="open nav"
        className="hamburger"
        onClick={() => setOpen(true)}
      />
      <div className="brand-container">
        <img
          src={process.env.PUBLIC_URL + '/assets/svgs/brand-logo.svg'}
          alt="iFit Logo"
          className="brand-logo"
        />
      </div>
      <motion.nav
        className="mobile-nav"
        variants={navVariants}
        initial="initial"
        animate={isOpen ? 'open' : 'initial'}
      >
        <img
          src={process.env.PUBLIC_URL + '/assets/svgs/cross.svg'}
          alt="close nav"
          className="close"
          onClick={() => setOpen(false)}
        />
        <motion.p
          className="nav-section"
          variants={navItemVariants}
          initial="initial"
        >
          Products
        </motion.p>
        <motion.a
          href=""
          className="nav-item"
          variants={navItemVariants}
          initial="initial"
        >
          Blog
        </motion.a>
        <motion.a
          href=""
          className="nav-item"
          variants={navItemVariants}
          initial="initial"
        >
          Nourish
        </motion.a>
        <motion.a
          href=""
          className="nav-item"
          variants={navItemVariants}
          initial="initial"
        >
          Shop
        </motion.a>
        <motion.p
          className="nav-section"
          variants={navItemVariants}
          initial="initial"
        >
          More Information
        </motion.p>
        <motion.a
          href=""
          className="nav-item"
          variants={navItemVariants}
          initial="initial"
        >
          Exercise
        </motion.a>
        <motion.a
          href=""
          className="nav-item"
          variants={navItemVariants}
          initial="initial"
        >
          Nutrition
        </motion.a>
        <motion.a
          href=""
          className="nav-item"
          variants={navItemVariants}
          initial="initial"
        >
          Activity
        </motion.a>
        <motion.a
          href=""
          className="nav-item"
          variants={navItemVariants}
          initial="initial"
        >
          Sleep
        </motion.a>
      </motion.nav>
    </StyledMobileNav>
  );
};

MobileNav.propTypes = {};

MobileNav.defaultProps = {};

export default MobileNav;
