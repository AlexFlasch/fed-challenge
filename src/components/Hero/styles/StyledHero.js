import styled from 'styled-components';

import StyledButton from '../../Button/styles/StyledButton';

export default styled.figure`
  width: 100%;
  height: 50vw;

  margin: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: url('${process.env.PUBLIC_URL}/assets/images/hero.png');
  background-color: rgba(0, 0, 0, 0.33);
  background-blend-mode: multiply;
  background-position: top;
  background-repeat: round;
  background-size: 100%;

  .hero-text {
    font-size: 4rem;
    text-align: center;
    font-weight: bold;
    color: ${({ theme }) => theme.ctaText};
  }

  ${StyledButton} {
    padding: 1.333rem 8.5rem;
    font-weight: normal;
  }

  ${({ theme }) => theme.mobileBreakpoint} {
    .hero-text {
      font-size: 2rem;
    }
  }
`;
