import { keyframes } from 'styled-components';

export const slideIn = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
`;

export const jumpOut = keyframes`
  0% {
    transform: translateY(100%);
  }
  20% {
    transform: translateY(102%);
  }
  100% {
    transform: translateY(0);
  }
`