import styled, { keyframes } from "styled-components";
import { ImSpinner2 } from "react-icons/im";

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

const SpinnerMini = styled(ImSpinner2)`
  width: 2.4rem;
  aspect-ratio: 1;
  animation: ${rotate} 1.5s infinite linear;
`;

export default SpinnerMini;
