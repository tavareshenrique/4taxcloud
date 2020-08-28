import { createGlobalStyle } from 'styled-components';
import { shade } from 'polished';

import 'bootstrap/dist/css/bootstrap.min.css';

import colors from './colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  ::-webkit-scrollbar {
    width: 12px;
    height: 14px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px ${colors.scroll};
    border-radius: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${colors.scroll};
    border-radius: 8px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background:  ${shade(0.2, colors.scroll)};
  }

  body {
    background: ${colors.background};
    color: ${colors.primary};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 62.5%;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }
`;
