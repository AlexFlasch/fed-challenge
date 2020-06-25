import React from 'react';
import PropTypes from 'prop-types';

import StyledReviewCard from './styles/StyledReviewCard';

const ReviewCard = props => {
  return (
    <StyledReviewCard
      width={props.width}
      height={props.height}
      margin={props.margin}
      padding={props.padding}
      transition={props.transition}
    >
      <img src={props.brandImg} alt="review brand logo" />
      <span>{props.reviewText}</span>
    </StyledReviewCard>
  );
};

ReviewCard.propTypes = {
  // review card specific props
  brandImg: PropTypes.string,
  reviewText: PropTypes.string,
  // common card props
  width: PropTypes.string,
  height: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  transition: PropTypes.object,
};

ReviewCard.defaultProps = {};

export default ReviewCard;
