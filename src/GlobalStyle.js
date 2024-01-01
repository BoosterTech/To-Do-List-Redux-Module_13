import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

::before,
::after {
  box-sizing: inherit;
}

body {
  background-color: rgb(221, 215, 215);
  font-family: 'Montserrat', sans-serif;
  max-width: 80%;
  width: 1000px;
  margin: auto;
  padding: 15px;
  font-size: small;
  ;
}

@media(max-width: 768px) {
  body {
    max-width: 90%;
  }
}
`;
