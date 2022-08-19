import React, { createContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { ILogin } from "../pages/auth/Login";
import { myAxios } from "../service/axios/index";

export const MyContext = createContext({});

// export interface IAuthProps {
//   auth: {};
// }

export interface IRes {
  data: {
    code: number;
    data: {
      password: string;
      phoneNumber: string;
      token: string;
      _id: string;
      isAuth: boolean;
    };
  };
}

export interface IUser {
  password: string;
  phoneNumber: string;
}

export default function Context({ children }: any) {
  const navigate = useNavigate();

  const [auth, setAuth] = useState({
    token: "",
    _id: "",
    phoneNumber: "",
    password: "",
    isAuth: false,
  });

  // useEffect(() => {
  //   getUser();
  // }, []);

  // async function getUser() {
  //   try {
  //     const res = await myAxios("/login");
  //     console.log(res);
  //   } catch (error) {
  //     console.log(error);
  //     console.log("Ishlamadi GET !");

  //   }
  // }

  function sucsess(res: IRes) {
    setAuth((p) => ({
      ...p,
      token: res.data.data.token,
      _id: res.data.data._id,
      phoneNumber: res.data.data.phoneNumber,
      password: res.data.data.password,
      isAuth: true,
    }));
    localStorage.setItem("TOKEN", res.data.data.token);
    localStorage.setItem("ISAUTH", "true");
  }

  async function userLogin(user: IUser) {
    try {
      const res: IRes = await myAxios.post("/login", user);
      sucsess(res);
      navigate("/users");
    } catch (error) {
      console.log(error);
      console.log("Ishlamadiii");
    }
  }

  return (
    <MyContext.Provider
      value={{
        auth,
        setAuth,
        userLogin,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}
