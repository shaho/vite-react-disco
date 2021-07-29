import styled from "styled-components";

export const SearchBox = styled.div`
  display: flex;
  justify-content: stretch;
  align-items: center;
  width: 100%;
  strong {
    padding-right: 10px;
  }
`;
export const Form = styled.div`
  width: 100%;
  flex: 1;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  line-height: 1.5;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #999;
  transition: border-color 0.5s ease-in-out;
  &:focus {
    color: #495057;
    background-color: #fff;
    border-color: #009688;
    outline: 0;
  }
`;
