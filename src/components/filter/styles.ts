import styled from "styled-components";

export const FilterBox = styled.div`
  display: flex;
  justify-content: stretch;
  align-items: center;
  width: 100%;

  @media (min-width: 768px) {
    padding-left: 30px;
  }
  strong {
    padding-right: 10px;
  }
  select {
    flex: 1;
    line-height: 1.5;
    padding: 0.5rem 0.75rem;
    font-size: 1rem;
    border: 1px solid #999;
    &:focus {
      color: #495057;
      background-color: #fff;
      border-color: #009688;
      outline: 0;
    }
  }
`;
