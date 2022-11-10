import React, { useState } from "react";
import styled from "styled-components";
// components
import MenuIcon from "./taskbar/MenuIcon";
import StatusIcon from "./taskbar/StatusIcon";
import Clock from "./taskbar/Clock";
// icons
import startIcon from "./Images/windows-icon/startIcon.png";
import MenuTheme from "./start menu/MenuTheme";

const Taskbar = () => {
  const [menuState, setMenuState] = useState(false);
  const isStartMenuOpen = () => setMenuState(!menuState);

  return (
    <>
      <Wrap>
        <MenuButton>
          <button type="button" onClick={isStartMenuOpen}>
            <img src={startIcon} alt="start/icon" />
          </button>
        </MenuButton>
        <MenuIcon />
        <StatusIcon />
        <Clock />
      </Wrap>
      <StartMenu ifMenuActive={menuState}>
        <MenuTheme />
      </StartMenu>
    </>
  );
};

const Wrap = styled.section`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 1;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  /*  */
  backdrop-filter: blur(0.5rem);
  background-color: rgba(211, 233, 238, 0.5);
  box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.5);
`;
const MenuButton = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  justify-content: flex-end;
  button {
    outline: none;
    border: 1px solid transparent;
    background: transparent;
    padding: 0.55rem;
    margin: 0 0.5rem;
    opacity: 1;
    z-index: 2000;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(1rem);
      box-shadow: 0.1rem 0.1rem 0.5rem rgba(255, 255, 255, 0.1);
    }
    img {
      width: 1.5rem;
      height: 1.5rem;
      object-fit: contain;
      filter: drop-shadow(0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.3));
      transition: all 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0s;
      position: relative;
    }
  }
`;

const StartMenu = styled.main`
  position: absolute;
  left: 25vw;
  bottom: 8vh;
  opacity: 1;
  z-index: 2000;
  transition: all 500ms cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s;

  opacity: ${(event) => (event.ifMenuActive ? "1" : "0")};
  visibility: ${(event) => (event.ifMenuActive ? "visible" : "hiden")};
  margin-bottom: ${(event) => (event.ifMenuActive ? "0" : "-40rem")};
`;

export default Taskbar;
