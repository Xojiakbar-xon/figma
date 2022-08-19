import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { IRes, MyContext } from "../context/Context";

// Layout
import AdminLayout from "../layout/adminLayout/AdminLayout";

// AUTH
import Login, { ILogin } from "../pages/auth/Login";

// ADMIN PAGE
import UsersMain from "../Components/usermain/UsersMain";
import Users from "../pages/admin/Users";

export interface IAuth {
  auth?: {
    token: string;
    _id: number;
    phoneNumber: string;
    password: string;
    isAuth: string;
  };
}

export default function Router() {
  const isAuth = localStorage.getItem("ISAUTH");
  console.log("AUTH: ", isAuth);

  if (!isAuth) {
    return (
      <Routes>
        {/* Auth Route */}
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    );
  }

  return (
    <Routes>
      {/* Admin Panel Route */}
      <Route path="/" element={<AdminLayout />}>
        <Route path="/users" element={<UsersMain />} />
        <Route path="*" element={<Navigate to="users" />} />
      </Route>
    </Routes>
  );
}
