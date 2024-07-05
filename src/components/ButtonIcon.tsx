import styled from "styled-components";

const ButtonIcon = styled.button`
  background: none;
  border: none;
  padding: 0.6rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;

  &:hover {
    background-color: plum;
  }

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--secondary-color);
  }
`;

export default ButtonIcon;
