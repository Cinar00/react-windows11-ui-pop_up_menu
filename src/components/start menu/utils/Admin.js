import React from "react";
import styled from "styled-components";
import adminImg from "../../Images/windows-icon/admin.jpeg";
import button from "../../Images/windows-icon/powerButton.svg";

const Admin = () => {
  return (
    <>
      <Wrap>
        <Avatar>
          <img src={adminImg} alt="admin/img" />
          <p>B Cinar</p>
        </Avatar>
        <PowerButton>
          <img src={button} alt="button/img" />
        </PowerButton>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5vh 2.7rem;
  opacity: 1;
  z-index: 2000;
  border-radius: 0 0 0.345rem 0.345rem;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(0rem);
  box-shadow: 0 -0.1rem 0.5rem rgba(0, 0, 0, 0.1);
`;
const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  img {
    width: 2.5rem;
    height: 2.5rem;
    object-fit: cover;
    border-radius: 50%;
    opacity: 1;
    transition: all 500ms cubic-bezier(0.39, 0.575, 0.565, 1) 0s;
    &:hover {
      transform: scale(1.15);
    }
  }

  p {
    font-size: 1.2rem;
    font-weight: 400;
    margin-left: 1rem;
  }
`;
const PowerButton = styled.div`
  img {
    z-index: 2000;
    opacity: 1;
    width: 1.5rem;
    height: 1.5rem;
    object-fit: contain;
    filter: drop-shadow(0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.3));
    transition: all 500ms cubic-bezier(0.39, 0.575, 0.565, 1) 0s;

    &:hover {
      transform: scale(1.15);
    }
  }
`;

export default Admin;
