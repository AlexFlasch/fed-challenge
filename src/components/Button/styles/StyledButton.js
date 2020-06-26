import styled from 'styled-components';

export default styled.button`
  background-color: ${({ theme }) => theme.ctaBg};
  color: ${({ theme }) => theme.ctaText};
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 0.75rem 1.333rem;
  text-transform: uppercase;
  font-weight: bold;
`;
