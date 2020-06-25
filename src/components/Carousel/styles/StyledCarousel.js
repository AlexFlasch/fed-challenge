import styled from 'styled-components';
import { modularScale, transparentize } from 'polished';

export default styled.section`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  min-height: ${modularScale(10)};

  background-color: ${({ theme }) => theme.carouselBg};

  .carousel-contents {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: nowrap;
    overflow-x: hidden;
    padding: 24px 0;
  }

  .carousel-btn {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

    top: 50%;
    transform: translateY(-50%);

    width: 40px;
    height: 40px;
    margin: 16px;
    padding: 15px;

    cursor: pointer;

    background-color: ${({ theme }) => theme.carouselBtnColor};
    color: ${({ theme }) => theme.ctaText};

    opacity: 0.8;

    border: ${({ theme }) => theme.carouselBtnBorder};
    border-radius: 20px;

    box-shadow: ${({ theme }) => theme.carouselBtnShadow};

    &.left {
      left: 0;
    }

    &.right {
      right: 0;

      img {
        transform: rotate(180deg);
      }
    }
  }
`;
