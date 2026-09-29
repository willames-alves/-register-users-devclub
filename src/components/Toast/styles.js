import styled, { keyframes } from "styled-components";

// --- ESTILOS COM STYLED-COMPONENTS ---

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeOut = keyframes`
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(-10px); }
`;

export const ToastContainer = styled.div`
  max-width: 360px;
  width: 100%;
  background: #ffffff;
  box-shadow:
    0 10px 25px -5px rgba(0, 0, 0, 0.1),
    0 8px 10px -6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  padding: 16px;
  pointer-events: auto;
  display: flex;
  flex-direction: column;
  animation: ${({ $visible }) => ($visible ? fadeIn : fadeOut)} 0.2s ease-in-out
    forwards;
`;

export const ToastTitle = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 12px 0;
  font-family: inherit;
`;

export const ToastButtons = styled.div`
  display: flex;
  gap: 8px;
`;

export const Button = styled.button`
  font-size: 12px;
  font-weight: 600;
  padding: 8px 12px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
  font-family: inherit;
`;

export const ConfirmButton = styled(Button)`
  background-color: #dc2626;
  color: white;

  &:hover {
    background-color: #b91c1c;
  }
`;

export const CancelButton = styled(Button)`
  background-color: #f1f5f9;
  color: #475569;

  &:hover {
    background-color: #e2e8f0;
  }
`;
