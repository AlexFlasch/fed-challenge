import styled from 'styled-components';
import { modularScale, transparentize } from 'polished';

export default styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  background-color: ${({ theme }) => theme.carouselBg};

  .carousel-btn {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 40px;
    height: 40px;
    margin: 16px;
    padding: 15px;

    background-color: ${({ theme }) => theme.carouselBtnColor};
    color: ${({ theme }) => theme.ctaText};

    opacity: 0.8;

    border: ${({ theme }) => theme.carouselBtnBorder};
    border-radius: 20px;

    box-shadow: ${({ theme }) => theme.carouselBtnShadow};

    &.left {
      position: absolute;
      left: 0;
      top: 50%;

      transform: translateY(-50%);

      .chevron {
        transform: rotate(135deg);
      }
    }

    &.right {
      position: absolute;
      right: 0;
      top: 50%;

      transform: translateY(-50%);

      .chevron {
        transform: rotate(-45deg);
      }
    }

    /* make a chevron out of borders */
    .chevron {
      min-width: 10px;
      min-height: 10px;

      border-right: 1px solid
        ${({ theme }) => transparentize(0.2, theme.ctaText)};
      border-bottom: 1px solid
        ${({ theme }) => transparentize(0.2, theme.ctaText)};
    }
  }
`;
