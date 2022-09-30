import styled from "styled-components";

export const TotalProducts = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  background-color: var(--color-grey0);

  border-top: 1px solid var(--color-grey20);

  padding: 10px;
  border-radius: 0px 0px 5px 5px;

  gap: 22px;

  .totalPrice {
    display: flex;
    justify-content: space-between;

    span {
      display: flex;
      color: var(--color-grey100);
      font-size: 1.8518518518518519vh;
      font-weight: 800;
    }

    .textPrice {
      display: flex;
      color: var(--color-grey50);
      font-size: 1.8518518518518519vh;
      font-weight: 800;
    }
  }

  .cartButton {
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--color-grey20);
    color: var(--color-grey50);

    width: 90%;

    margin: 0 auto;
  }
`;
