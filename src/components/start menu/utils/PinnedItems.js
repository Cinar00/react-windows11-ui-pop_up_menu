import React from "react";
import styled from "styled-components";
import { PinAPIOne, PinAPITwo, PinAPIThree } from "../../api/API";

const PinnedItems = () => {
  return (
    <>
      <Title>
        <div>
          <h4>Pinned</h4>
          <button type="button">
            All Apps <span>&#8250;</span>
          </button>
        </div>
      </Title>

      <Wrap>
        <nav>
          {PinAPIOne &&
            PinAPIOne.map((item, index) => (
              <div key={index}>
                <img src={item.pIcon} alt="pinned/icon" />
                <p>{item.text}</p>
              </div>
            ))}
        </nav>
        <nav>
          {PinAPITwo &&
            PinAPITwo.map((item, index) => (
              <div key={index}>
                <img src={item.pIcon} alt="pinned/icon" />
                <p>{item.text}</p>
              </div>
            ))}
        </nav>
        <nav>
          {PinAPIThree &&
            PinAPIThree.map((item, index) => (
              <div key={index}>
                <img src={item.pIcon} alt="pinned/icon" />
                <p>{item.text}</p>
              </div>
            ))}
        </nav>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  padding: 0 1.5rem;
  margin: 0.9vh 0 2vh 0;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      width: 4.8rem;
      height: 4.8rem;
      margin: 0.1rem 0;
      border-radius: 0.25rem;
      transition: all 200ms cubic-bezier(0.55, 0.085, 0.68, 0.53) 0s;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      &:hover {
        outline: none;
        border: none;
        background: rgba(255, 255, 255, 0.5);
        filter: brightness(1);
        box-shadow: 0.1rem 0.1rem 0.5rem rgba(255, 255, 255, 0.2);
      }

      img {
        width: 2.2rem;
        height: 2.2rem;
        object-fit: contain;
        filter: drop-shadow(0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.6));
      }

      p {
        font-size: 0.85rem;
        font-weight: 400;
        margin-top: 1vh;
      }
    }
  }
`;

const Title = styled.div`
  padding: 0 2rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h4 {
      color: #000;
      font-weight: 500;
      line-height: 1.08;
      letter-spacing: 0.5px;
    }

    button {
      outline: none;
      border: none;
      background-color: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(0.1rem);
      box-shadow: 0.1rem 0.1rem 0.3rem rgba(0, 0, 0, 0.3);
      padding: 0.5rem 0.7rem;
      border-radius: 0.245rem;
    }
  }
`;

export default PinnedItems;
