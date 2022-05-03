import { ThemeProvider } from "@emotion/react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/App";
import GlobalStyle from "./styles/Global";
// import theme from "./styles/theme";

const theme = {
  color: {
    orange: "#FF7900",
  },
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <Router>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </Router>,
);
