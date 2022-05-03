import { ThemeProvider } from "@emotion/react";
import ReactDOM from "react-dom/client";

import App from "./components/App/App";
import GlobalStyle from "./styles/Global";
import theme from "./styles/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
);
