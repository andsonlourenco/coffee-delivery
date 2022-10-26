import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;

  max-width: 74rem;
  margin: 4rem auto;
`;

export const Location = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;

  background: ${(props) => props.theme["purple-300"]};
  border-radius: 6px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: ${(props) => props.theme["purple-700"]};
`;

export const MiniCart = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 4px;

  width: 38px;
  height: 38px;

  background: ${(props) => props.theme["yellow-300"]};
  border-radius: 6px;
  border: 0;

  svg {
    color: ${(props) => props.theme["yellow-700"]};
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  gap: 1rem;
`;
