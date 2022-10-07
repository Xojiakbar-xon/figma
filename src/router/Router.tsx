import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

// Layout
import AdminLayout from "../layout/adminLayout/AdminLayout";

// AUTH
import Login from "../pages/auth/Login";

// ADMIN PAGE
import { UsersMain } from "../Components/usermain/UsersMain";
import Positions from "../pages/admin/positions/Positions";
import Fields from "../pages/admin/fields/Fields";
import Settings from "../pages/settings/Settings";
import Agenda from "../pages/admin/agenda/Agenda";
import Speaker from "../pages/admin/speaker/Speaker";
import { Comments } from "../pages/admin/comments/Comments";
import { Tickets } from "../pages/admin/tikets/Tickets";
import { TabTitle } from "../utils/GeneralFunction";


export default function Router() {
  const isAuth = localStorage.getItem("ISAUTH") || false;
  const navigate = useNavigate();

  TabTitle('TGF');

  return (
    <Routes>
      {!isAuth ? (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </>
      ) : (
        <>
          <Route element={<AdminLayout />}>
            <Route path="/users" element={<UsersMain />} />
            <Route path="/fields" element={<Fields />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/agenda" element={<Agenda />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/speaker" element={<Speaker />} />
            <Route path="/comments" element={<Comments />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="*" element={<Navigate to="fields" />} />
          </Route>
        </>
      )}
    </Routes>
  );
}
