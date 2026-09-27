import styled from "styled-components";

export const DefaultButton = styled.button`
  border: ${({ theme }) => (theme === "primary" ? "none" : "1px solid #fff")};
  border-radius: 30px;
  background: ${({ theme }) =>
    theme === "primary"
      ? "linear-gradient(to right, #fe7e5d, #7f3841)"
      : "transparent"};

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
