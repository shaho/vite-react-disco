import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
      font-size: 16px;
    }
    body {
      overflow-x: hidden;
      font-size: 1rem;
      line-height: 1.5;
      margin: 0;
      padding: 0;
      font-family: "Open Sans", sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #333;
    }
    img {
      max-width: 100%;
    }
    ul,
    li {
      padding: 0;
      list-style: none;
    }
    a {
      color: #4a69bd;
      text-decoration: none;
      &:visited{
        color: #4a69bd;
      }
      &:hover {
        color: #74b9ff;
      }
    }
    * {
      box-sizing: border-box;
    }
    @keyframes Rotating {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;
export default GlobalStyle;
