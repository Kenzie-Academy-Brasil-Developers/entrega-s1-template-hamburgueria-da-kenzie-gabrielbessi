import styled from "styled-components";

export const List = styled.li`
  display: flex;
  flex-direction: column;

  max-width: 230px;
  min-width: 160px;
  width: 100%;

  max-height: 330px;
  height: 100%;

  background: white;

  border: 2px solid var(--color-grey20);
  border-radius: 5px;

  @media (max-width: 768px) {
    padding-bottom: 15px;
  }

  .imageProducts {
    display: flex;
    align-items: center;
    justify-content: center;

    overflow: hidden;

    height: 150px;
    width: 100%;

    background: var(--color-grey0);
  }

  img {
    width: 70%;
    height: 90%;

    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }

  img:hover {
    -moz-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
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
      max-width: 107px;
      width: 100%;
      height: 3.7037037037037037vh;

      font-size: 1.6666666666666667vh;
      font-weight: 600;
      color: white;
    }

    @media (max-width: 465px) {
      button {
        max-width: 75px;
        width: 100%;
      }
    }
  }
`;
