import styled from 'styled-components';

export default styled.div`
  .carousel-card {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    height: 100%;
    width: 100%;

    color: ${({ theme }) => theme.textDark};
    opacity: 0.8;

    span {
      text-align: center;
    }
  }
`;
