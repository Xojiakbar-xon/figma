import { BrowserRouter } from "react-router-dom";
//
import "bootstrap/dist/css/bootstrap.css";

//
import { GlobalStyle } from "./assets/style/Global";

import Router from "./router/Router";
import Context from "./context/Context";

export function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Context>
          <Router />
        </Context>
      </BrowserRouter>
    </>
  );
}
