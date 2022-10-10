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

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const MiniCart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 4px;

  width: 38px;
  height: 38px;

  background: #f1e9c9;
  border-radius: 6px;

  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const HeaderActions = styled.div`
  display: flex;
  gap: 1rem;
`;
