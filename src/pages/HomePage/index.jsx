import React from 'react';
import PropTypes from 'prop-types';
import { modularScale } from 'polished';

// import data
import reviewCardData from '../../data/review-cards';
import gridCardData from '../../data/grid-cards';
import equipmentCardData from '../../data/equipment-cards';

// components
import ProductNav from '../../components/ProductNav';
import MainNav from '../../components/MainNav';
import Hero from '../../components/Hero';
import Carousel from '../../components/Carousel';
import ReviewCard from './components/ReviewCard';
import GridCard from './components/GridCard';
import Footer from '../../components/Footer';

// styled components
import StyledHomePage from './styles/StyledHomePage';
import EquipmentCard from './components/EquipmentCard';

const HomePage = props => {
  const generateReviewCards = () => {
    const carouselCardProps = {
      transition: {
        ease: 'easeInOut',
        duration: 0.333,
      },
    };

    return reviewCardData.map((data, i) => (
      <ReviewCard
        {...carouselCardProps}
        key={`review-card-${i}`}
        brandImg={data.brandImg}
        reviewText={data.reviewText}
      />
    ));
  };

  const generateGridCards = () =>
    gridCardData.map((data, i) => (
      <GridCard
        key={`grid-card-${i}`}
        workoutImg={data.workoutImg}
        workoutTitle={data.workoutTitle}
        instructorImg={data.instructorImg}
        workoutDuration={data.workoutDuration}
        workoutPlays={data.workoutPlays}
      />
    ));

  const generateEquipmentCards = () =>
    equipmentCardData.map((data, i) => (
      <EquipmentCard
        key={`equipment-card-${i}`}
        equipmentImg={data.equipmentImg}
        equipmentName={data.equipmentName}
      />
    ));

  return (
    <StyledHomePage>
      <ProductNav />
      <MainNav />
      <Hero />
      <Carousel>{generateReviewCards()}</Carousel>
      <section className="workout-grid">{generateGridCards()}</section>
      <section className="equipment-section">
        <h2 className="section-title">
          Interested in our exciting iFit-enabled equipment?
        </h2>
        <div className="equipment-grid">{generateEquipmentCards()}</div>
      </section>
      <Footer />
    </StyledHomePage>
  );
};

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
