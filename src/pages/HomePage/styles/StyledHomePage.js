import styled from 'styled-components';
import { modularScale } from 'polished';

export default styled.div`
  .workout-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 24px;

    padding: ${modularScale(5)} ${modularScale(7)};
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
`;
