import React, { createContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { ILogin } from "../pages/auth/Login";
import { myAxios } from "../service/axios/index";


export const MyContext = createContext({});

// export interface IAuthProps {
//   auth: {};
// }
export interface useSave {
  _id: string;
  fullName: string;
  phoneNumber: number;
  fieldId: string;
  brand: string;
  employeeCount: number;
  positionId: string;
}

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
  
const [users, setUsers] = useState({});

  const [auth, setAuth] = useState({
    token: "",
    _id: "",
    phoneNumber: "",
    password: "",
    isAuth: false,
  });
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
      const res = await myAxios.post("/login", user);
      sucsess(res);
      navigate("/users");
    } catch (error) {
      console.log(error);
      console.log("Ishlamadiii");
    }
  }
  async function usersGet() {
    try {
      const res = await myAxios.get("/user?page=1&limit=10");
      setUsers(res);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <MyContext.Provider
      value={{
        auth,
        setAuth,
        userLogin,
        usersGet,
        users,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}