import styled from "styled-components";

export const Container = styled.div`
  width: 96%;
  margin: 10px auto;
  max-width: 992px;
`;
export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  > div {
    margin: 10px 0;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
