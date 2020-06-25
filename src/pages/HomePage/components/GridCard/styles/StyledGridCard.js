import styled from 'styled-components';
import { transparentize } from 'polished';

import Card from '../../../../../components/Card';

export default styled(Card)`
  overflow: hidden;
  cursor: default;

  .card-grid-item {
    height: 100%;
  }

  .workout-preview {
    visibility: hidden;
    width: 100%;
    height: auto;
  }

  .preview-container {
    position: relative;

    background-image: url(${props =>
      process.env.PUBLIC_URL + props.previewImg});
    background-size: cover;
  }

  .playlist-overlay {
    position: absolute;
    top: 0;
    right: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 40%;
    height: 100%;
    background-color: ${({ theme }) => theme.cardOverlay};
    color: ${({ theme }) => theme.textWhite};
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.3px;
    line-height: 12px;

    .num-workouts {
      margin: 0;
      font-size: 28px;
      letter-spacing: 0.5px;
      line-height: 30px;
    }

    .workout {
      margin: 0;
      padding: 5px;
      font-size: 10px;
    }
  }

  .workout-details {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 36px 12px 16px;
    gap: 5px;

    padding: 16px;

    .workout-title {
      margin: 0;
      grid-column: 1 / span 4;
      font-size: 16px;
      line-height: 18px;
      align-self: start;

      /*
      * handle truncating after 2 lines with a fade out
      * trick found here: https://css-tricks.com/line-clampin/
      *
      * still not perfect. long words that wrap after the 2nd line can cause
      * the fade out to not be visible, or barely visible, resulting in an
      * abrupt truncation for the user
      */

      position: relative;
      max-height: 36px; /* match top row size */
      overflow: hidden;
      padding-right: 1rem; /* create space for ellipsis */

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        width: 70%;
        height: 1.2rem;
        background: linear-gradient(
          to right,
          rgba(0, 0, 0, 0),
          ${({ theme }) => theme.componentBg} 50%
        );
      }
    }

    .workout-instructor {
      width: 100%;
      height: auto;
      align-self: start;
      border-radius: ${({ theme }) => theme.borderRadius};
    }

    .workout-stats {
      grid-column: 1 / span 5;
      display: flex;
      align-items: center;

      span {
        margin-left: 5px;
      }
    }

    .workout-duration {
      font-weight: bold;
      font-size: 10px;

      margin-right: 10px;
    }

    .workout-distance {
      font-weight: bold;
      font-size: 10px;
    }

    .view-workout {
      grid-column: 1 / span 5;
      text-decoration: none;
      text-transform: uppercase;
      color: ${({ theme }) => theme.ctaBg};

      &:visited {
        color: ${({ theme }) => theme.ctaBg};
      }
    }
  }
`;
