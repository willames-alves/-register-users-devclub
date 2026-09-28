import styled from "styled-components";

export const Container = styled.div`
  background-color: #181f36;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
  min-height: 100vh;
`;

export const Title = styled.h1`
  font-size: 38px;
  font-style: normal;
  font-weight: 600;
  color: #fff;
`;

export const ContainerUsers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 8px;

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;

export const CardUser = styled.div`
  background-color: #252d48;
  padding: 16px;
  border-radius: 32px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  height: 98px;
  justify-content: space-between;
  align-items: center;
  max-width: 400px;

  div {
    width: 100%;
  }

  h3 {
    color: #fff;
    font-size: 18px;
    margin-bottom: 3px;
  }

  p {
    color: #fff;
    font-size: 14px;
    font-weight: 200;
  }
`;

export const AvatarIcon = styled.img`
  background-color: #fff;
  border-radius: 50px;
  width: 80px;
`;
export const TrashIcon = styled.img`
  /* padding-left:  16px; */
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.4;
  }
`;
