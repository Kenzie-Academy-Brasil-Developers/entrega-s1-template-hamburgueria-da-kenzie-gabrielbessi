import styled from "styled-components";

export const ListCart = styled.li`
  display: flex;
  align-items: center;

  justify-content: space-between;
  gap: 5px;

  .cartList {
    display: flex;
    gap: 10px;

    align-items: center;

    img {
      display: flex;
      width: 5.9523809523809526vw;
      height: 7.407407407407407vh;

      background-color: var(--color-grey20);
    }

    div {
      display: flex;
      flex-direction: column;
    }

    p {
      display: flex;
      font-size: 16px;
    }

    @media (max-width: 991px) {
      p {
        font-size: 0.7em;
      }
      span {
        font-size: 0.7em;
      }
    }
    @media (max-width: 745px) {
      p {
        font-size: 0.6em;
      }
      span {
        font-size: 0.6em;
      }
    }
  }
  .buttonCart {
    display: flex;

    align-items: center;
    justify-content: center;

    background-color: white;

    width: 2em;
    height: 2em;
  }

  @media (max-width: 795px) {
    .buttonCart {
      width: 1.5em;
      height: 1.5em;
    }
  }
`;
