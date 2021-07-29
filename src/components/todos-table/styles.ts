import styled from "styled-components";

export const Table = styled.table`
  width: 100%;

  caption-side: bottom;
  border-collapse: collapse;
  td,
  th {
    padding: 10px;
    border: 1px solid #ccc;
  }
  thead {
    background-color: #ccc;
    th {
      text-align: center;
    }
  }
`;
