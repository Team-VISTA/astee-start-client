import { Global, css } from '@emotion/react';
import theme from './theme';

const defaultStyle = css`
  @font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
      format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
      format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
      format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-SemiBold.woff')
      format('woff');
    font-weight: 600;
    font-style: normal;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    color: ${theme.colors.white};
    background: ${theme.brand.bg};
    font-family: 'Pretendard', Arial, Helvetica, sans-serif;
  }

  html,
  body {
    height: 100%;
  }

  input {
    background: none;
    border: none;
    outline: none;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  div,
  img,
  span {
    background: none;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }
`;

const GlobalStyle = function () {
  return <Global styles={defaultStyle} />;
};

export default GlobalStyle;
