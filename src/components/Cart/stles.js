import styled from "styled-components";

export const CartStyle = styled.section`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  .headerCarrinho {
    display: flex;

    align-items: center;
    justify-content: flex-start;

    padding-left: 20px;

    max-width: 365px;
    min-width: 253px;
    width: 100%;
    height: 9.11111111111111vh;

    margin-top: 32px;

    background: var(--color-green);
    color: white;
    font-size: 2.5925925925925926vh;
    font-weight: 700;

    border-radius: 5px 5px 0px 0px;
  }

  .iconCarrinho {
    display: flex;
    width: 100%;
    height: 100vh;

    align-items: center;
    justify-content: center;
  }

  @media (max-width: 768px) {
    .headerCarrinho {
      margin-top: unset;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    max-width: 300px;
    min-width: 253px;
    width: 100%;
    height: 28.048706240487064vh;

    overflow-y: scroll;

    padding: 15px;
    gap: 15px;

    background-color: var(--color-grey0);

    @media (max-width: 620px) {
      ul {
        max-width: 365px;
        width: 100%;
      }
    }
  }

  ul::-webkit-scrollbar {
    width: 5px;
    border: 1px solid var(--color-grey0);
  }

  ul::-webkit-scrollbar-thumb {
    background-color: var(--color-green);
    border-radius: 10px;
  }
`;
