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
      max-width: 60px;
      width: 100%;
      max-height: 60px;
      height: 100%;

      background-color: var(--color-grey20);
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    p {
      display: flex;
      font-size: 16px;
      font-weight: 900;
    }
    span {
      font-size: 14px;
      font-weight: 400;
    }
  }
  .buttonCart {
    display: flex;

    align-items: center;
    justify-content: center;

    background-color: white;
    transition: 0.1s;

    width: 2em;
    height: 2em;
  }

  .buttonCart:hover {
    color: red;
    filter: brightness(1.2);
  }

  @media (max-width: 795px) {
    .buttonCart {
      width: 1.5em;
      height: 1.5em;
    }
  }
`;
