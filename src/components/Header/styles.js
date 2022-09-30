import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;

  width: 100vw;
  height: 16.296296296296298vh;

  background: var(--color-grey0);

  @media (max-width: 590px) {
    flex-direction: column;
  }

  input {
    height: 44px;
    padding-left: 1%;
  }
`;
