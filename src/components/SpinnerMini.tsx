import styled, { keyframes } from "styled-components";
import { ImSpinner2 } from "react-icons/im";

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

const SpinnerMini = styled(ImSpinner2)`
  font-size: 1.65rem;
  aspect-ratio: 1;
  margin: 0 auto;
  animation: ${rotate} 1.5s infinite linear;
`;

export default SpinnerMini;
