import styled, { createGlobalStyle } from 'styled-components';

import resetStyle from './resetStyle';

const GlobalStyle = createGlobalStyle`
  ${resetStyle}

  body {
    background-color: #E5E5E5;
  }

  input {
    box-sizing: border-box;
  }

  button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    background-color: white;
  }
`;

export const GlobalLayout = styled.div`
  background-color: white;
  width: 375px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 28px 28px;
  box-sizing: border-box;
`;

export default GlobalStyle;
