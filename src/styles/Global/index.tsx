import { Global, css } from "@emotion/react";

import mainFont from "../fonts/SpoqaHanSansNeo-Regular.otf";

const style = css`
  body {
    width: 100%;
    height: auto;
    min-height: 100vh;

    @font-face {
      font-display: block;
      font-family: "Spoqa Han Sans";
      font-style: normal;
      font-weight: 400;
      src: url("${mainFont}");
    }

    font-family: "Spoqa Han Sans";
  }

  img {
    user-select: none;
  }

  ul,
  ul li {
    list-style: none;
  }
`;

function GlobalStyle() {
  return <Global styles={style} />;
}

export default GlobalStyle;
