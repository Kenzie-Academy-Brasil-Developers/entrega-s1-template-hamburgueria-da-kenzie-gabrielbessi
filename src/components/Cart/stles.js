import styled from "styled-components";

export const CartStyle = styled.section`
  .headerCarrinho {
    display: flex;

    align-items: center;
    justify-content: flex-start;

    padding-left: 20px;

    width: 22.321428571428573vw;
    height: 9.11111111111111vh;

    margin-top: 32px;

    background: var(--color-green);
    color: white;
    font-size: 2.5925925925925926vh;
    font-weight: 700;

    border-radius: 5px 5px 0px 0px;
  }

  ul {
    display: flex;
    flex-direction: column;
    width: 22.321428571428573vw;
    height: 28.048706240487064vh;

    overflow-y: scroll;

    padding: 15px;
    gap: 15px;

    background-color: var(--color-grey0);
  }
`;
