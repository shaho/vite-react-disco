import styled from "styled-components";

export const LoadingCircle = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: 4px solid #eee;
  position: relative;
  animation: Rotating 0.6s linear infinite;
  margin: 40px auto;
  &:before {
    content: "";
    position: absolute;
    left: -4px;
    top: -4px;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 4px solid transparent;
    border-right-color: #bbb;
  }
`;
