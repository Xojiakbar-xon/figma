import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../../Components/navbar/Navbar";
import Sidebar from "../../Components/sidebar/Sidebar";

export default function () {
  return (
    <StyledLayout className="w-100 d-flex">
      <Sidebar />
      <div className="layout">
        <Navbar />
        <Outlet />
      </div>
    </StyledLayout>
  );
}
const StyledLayout = styled.div`
  .layout {
    padding: 0 18px 0 120px;
    width: 100%;
    background: #f8f8f8;
  }

  @media (max-width: 560px) {
    .layout {
      left: 0px;
      padding: 0px 20px;
    }
  }
`;
