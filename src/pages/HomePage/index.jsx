import React from 'react';
import PropTypes from 'prop-types';
import { modularScale } from 'polished';

import ProductNav from '../../components/ProductNav';
import MainNav from '../../components/MainNav';
import Hero from '../../components/Hero';
import Carousel from '../../components/Carousel';
import Card from '../../components/Card';

import StyledHomePage from './styles/StyledHomePage';

const HomePage = props => {
  return (
    <StyledHomePage>
      <ProductNav />
      <MainNav />
      <Hero />
      <Carousel>
        <Card
          width="30vw"
          height={modularScale(8.75)}
          margin="24px 12px"
          padding="48px 40px"
          positionTransition
        >
          <div className="carousel-card">
            {/* logos here soon */}
            <span>
              "You focus on putting in the work, and the technology handles the
              rest."
            </span>
          </div>
        </Card>
        <Card
          width="30vw"
          height={modularScale(8.75)}
          margin="24px 12px"
          padding="48px 40px"
          positionTransition
        >
          <div className="carousel-card">
            {/* logos here soon */}
            <span>
              "Literally transports you from home to wherever you shoose to
              run."
            </span>
          </div>
        </Card>
        <Card
          width="30vw"
          height={modularScale(8.75)}
          margin="24px 12px"
          padding="48px 40px"
          positionTransition
        >
          <div className="carousel-card">
            {/* logos here soon */}
            <span>"Breathes new life into a tired, old running routine."</span>
          </div>
        </Card>
      </Carousel>
    </StyledHomePage>
  );
};

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
