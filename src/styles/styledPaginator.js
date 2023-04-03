import styled from "styled-components";

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

export const PageButton = styled.button`
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  color: #333;
  cursor: pointer;
  font-size: 1rem;
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease-in-out;
  border-radius: 50%;

  &:hover {
    background-color: #ddd;
  }

  &:disabled {
    cursor: not-allowed;
    background: var(--rojo);
    color: #FFFFFF;
  }
`;

export const PrevButton = styled(PageButton)`
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  &:disabled {
    cursor: not-allowed;
    background: #ccc;
    color: #ddd;
  }
`;


export const NextButton = styled(PageButton)`
  border-left: none;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  &:disabled {
    cursor: not-allowed;
    background: #ccc;
    color: #ddd;
  }
`;