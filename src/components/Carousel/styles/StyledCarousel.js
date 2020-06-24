import styled from 'styled-components';
import { modularScale, transparentize } from 'polished';

export default styled.div`
  position: relative;

  min-height: ${modularScale(10)};

  background-color: ${({ theme }) => theme.carouselBg};

  .carousel-contents {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow-x: hidden;

    height: ${modularScale(10)};
  }

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
    }

    &.right {
      position: absolute;
      right: 0;
      top: 50%;

      transform: translateY(-50%);

      img {
        transform: rotate(180deg);
      }
    }
  }
`;
