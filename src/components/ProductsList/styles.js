import styled from "styled-components";

export const ListProducts = styled.section`
  display: flex;
  width: 60vw;

  justify-content: center;

  @media (max-width: 768px) {
    display: flex;
    width: 100vw;

    justify-content: center;
  }

  ul {
    display: flex;
    flex-wrap: wrap;

    max-width: 54vw;

    align-items: center;
    justify-content: center;

    margin-top: 32px;

    gap: 20px;
  }

  @media (max-width: 768px) {
    ul {
      overflow-x: scroll;

      flex-wrap: nowrap;
      max-width: 90vw;

      align-items: unset;
      justify-content: unset;

      width: 100vw;
    }

    ul::-webkit-scrollbar {
      height: 4px;
      border: 1px solid var(--color-grey0);
    }

    ul::-webkit-scrollbar-thumb {
      background-color: var(--color-green);
      border-radius: 25%;
    }
  }
`;
