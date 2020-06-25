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
    width: 100%;
    height: auto;
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

    .workout-duration {
      font-weight: bold;
      font-size: 10px;
    }

    .workout-plays {
      font-weight: bold;
      font-size: 10px;
      grid-column: 2 / span 4;
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
