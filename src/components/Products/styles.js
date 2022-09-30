import styled from "styled-components";

export const List = styled.li`
  display: flex;
  flex-direction: column;

  width: 16.01801801801802vw;
  height: 49.2962962962963vh;

  background: white;

  border: 2px solid var(--color-grey20);
  border-radius: 5px;

  .imageProducts {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 150px;
    width: 100%;

    background: var(--color-grey0);
  }

  img {
    width: 70%;
    height: 90%;
  }

  .textProducts {
    display: flex;
    flex-direction: column;

    align-items: flex-start;
    justify-content: center;

    margin: 2.938888888888889vh 0px 0px 2.1531531531531534vw;
    gap: 2.5925925925925926vh;

    p {
      display: flex;
      flex-wrap: wrap;
      font-size: 1.125em;
      font-weight: 1000;
      color: var(--color-grey100);
    }

    @media (max-width: 833px) {
      p {
        font-size: 1em;
      }
    }
    @media (max-width: 833px) {
      p {
        font-size: 0.8em;
      }
    }

    .span1 {
      font-size: 1.8518518518518519vh;
      font-weight: 400;

      color: var(--color-grey50);
    }
    span {
      font-size: 1.8518518518518519vh;
      font-weight: 1000;
      color: var(--color-green);
    }

    button {
      width: 7.440476190476191vw;
      height: 3.7037037037037037vh;

      font-size: 1.6666666666666667vh;
      font-weight: 600;
      color: white;
    }
  }
`;
