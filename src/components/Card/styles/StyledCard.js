import styled from 'styled-components';
import { modularScale } from 'polished';
import { motion } from 'framer-motion';

export default styled(motion.div)`
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin};
  padding: ${props => props.padding};

  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadow};
  background-color: ${({ theme }) => theme.componentBg};
  color: ${({ theme }) => theme.textDark};
`;
