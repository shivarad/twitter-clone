import styled from "styled-components";
import { Colors } from "../../styles/colors";

export const SearchBoxContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  background: ${Colors.ExtraLightGray};
  border-radius: 50px;
  height: 50px;
  margin: 0 auto;
  width: clamp(300px, 90%, 600px);
  &:hover {
    border: 1px solid ${Colors.Blue};
    background: #fff;
  }
`;
export const SearchBtn = styled.button`
  all: unset;
  margin: 5px;
  color: ${Colors.Blue};
`;
export const SearchInput = styled.input`
  border: none;
  all: unset;
  outline: none;
  background: transparent;
  flex: 1;
  margin: 0 10px;
  &:focus {
    border: none;
  }
`;
export const ClearBtn = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background: ${Colors.Blue};
`;

export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: clamp(300px, 90%, 600px);
  margin: 0 auto;
  height: fit-content;
  max-height: 100%;
  overflow: auto;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: 0px 0px 8px #d9d9d9;
  background: white;
  z-index: 10000;
`;
