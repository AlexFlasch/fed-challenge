import styled from 'styled-components';

export default styled.div`
  width: 100vw;

  .workout-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 24px;

    padding: 4rem 7.5rem;
  }

  .equipment-section .section-title {
    text-align: center;
    font-weight: normal;
  }

  .equipment-grid {
    display: grid;
    grid-template-columns: repeat(4, 20vw);
    grid-template-rows: 20vw;
    gap: 24px;
    justify-content: center;

    padding: 24px;
  }

  ${({ theme }) => theme.mobileBreakpoint} {
    .workout-grid {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(4, 1fr);
      gap: 12px;

      padding: 4rem 2.5rem;
    }

    .equipment-grid {
      grid-template-columns: repeat(2, 33vw);
      grid-template-rows: repeat(2, 33vw);
      gap: 12px;
    }
  }
`;
