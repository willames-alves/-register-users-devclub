import styled from "styled-components";

export const Container = styled.div`
  background-color: #181f36;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
  height: 100vh;
`;

export const TopBackground = styled.div`
  background: linear-gradient(to right, #fe7e5d, #7f3841);
  height: 30vh;
  width: 90vw;
  border-radius: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 500px;
`;

export const Title = styled.h1`
  font-size: 38px;
  font-style: normal;
  font-weight: 600;
  color: #fff;
`;

export const ContainerInput = styled.div`
  display: flex;
  gap: 20px;
`;

export const Input = styled.input`
  border-radius: 10px;
  border: 1px solid #d2dae2;
  background-color: #fff;
  padding: 12px 20px;
  outline: none;
  width: 100%;
`;

export const InputLabel = styled.label`
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  span {
    color: #ef4f45;
  }
`;

export const Button = styled.button`
  border: none;
  border-radius: 30px;
  background: linear-gradient(to right, #fe7e5d, #7f3841);

  color: #fff;
  font-size: 16px;
  font-weight: 600;
  padding: 16px 32px;
  width: fit-content;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`;
