import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import { cardVariants, detailsVariants } from './animations/hover';

import StyledGridCard from './styles/StyledGridCard';

const GridCard = props => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <StyledGridCard
      variants={cardVariants}
      initial="initial"
      animate={isHovered ? 'hovered' : 'initial'}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      isPlaylist={props.isPlaylist}
    >
      <div className="card-grid-item">
        <img
          className="workout-preview"
          src={props.workoutImg}
          alt="workout image"
        />
        <div className="workout-details">
          <span className="workout-title">{props.workoutTitle}</span>
          <img
            className="workout-instructor"
            src={props.instructorImg}
            alt="instructor portrait"
          />
          <div className="workout-duration">
            {/* stopwatch icon here */}
            <span>{props.workoutDuration}</span>
          </div>
          <div className="workout-plays">
            {/* track icon here */}
            <span>{props.workoutPlays}</span>
          </div>
          <motion.a variants={detailsVariants} href="" className="view-workout">
            View Details
          </motion.a>
        </div>
      </div>
    </StyledGridCard>
  );
};

GridCard.propTypes = {
  workoutImg: PropTypes.string,
  workoutTitle: PropTypes.string,
  instructorImg: PropTypes.string,
  workoutDuration: PropTypes.string,
  workoutPlays: PropTypes.string,
  isPlaylist: PropTypes.bool,
  numWorkouts: PropTypes.number,
};

GridCard.defaultProps = {};

export default GridCard;
