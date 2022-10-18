import { BrowserRouter } from "react-router-dom";
//
import "bootstrap/dist/css/bootstrap.cssnpm ";

import { ToastContainer } from "react-toastify";
//
import { GlobalStyle } from "./assets/style/Global";
import 'react-toastify/dist/ReactToastify.css';
import Router from "./router/Router";
import LoginContext from "./context/Context";
import { TabIcon } from "./utils/GeneralFunction";

export function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ToastContainer />
          <LoginContext>
            <Router />
          </LoginContext>
       
      </BrowserRouter>
    </>
  );
}

// Jasurbekdan Hello ! 22:10

// "proxy": "http://tgf.kahero.uz/admin-api/",
