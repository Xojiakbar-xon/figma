import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

// user default Avatar icon
//@ts-ignore
import userAvatar from "../../assets/img/userAvatarIcon.png";
//
import LayoutIcon from "../../../assets/icon/LayoutIcon";
import UserIcon from "../../../assets/icon/UserIcon";
import OutIcon from "../../../assets/icon/OutIcon";

export default function Sidebar() {
  const location: string = useLocation().pathname;
  const navigate = useNavigate();

  function closePage() {
    localStorage.removeItem("TOKEN");
    localStorage.removeItem("ISAUTH");
    navigate("/login");
  }

  return (
    <StyledSidebar>
      <div className="userAvatar">
        <img src={userAvatar} alt="UserAvatar" />
      </div>
      <div className="icon__wrapper">
        <div className="icon icon-layout">
          <LayoutIcon />
        </div>
      </div>
      <div className="icon__wrapper">
        <div className="icon icon-layout">
          <LayoutIcon />
        </div>
      </div>
      <div className="icon__wrapper">
        <div className="icon icon-layout">
          <LayoutIcon />
        </div>
      </div>
      <div className={"icon__wrapper" + (location === "/users" ? " On" : "")}>
        <div className="icon icon-users">
          <UserIcon />
        </div>
      </div>
      <div className="icon__wrapper out" onClick={closePage} >
        <div className="icon icon-out">
          <OutIcon />
        </div>
      </div>
    </StyledSidebar>
  );
}

const StyledSidebar = styled.div`
  padding: 18px;
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  position: relative;

  .userAvatar {
    max-width: 58px;
    max-height: 58px;
    margin-bottom: 32px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .icon__wrapper {
    width: 48px;
    height: 48px;
    display: grid;
    place-items: center;

    &.On {
      background: #e3ebff;
      border-radius: 16px;
    }

    &.out {
      position: absolute;
      bottom: 32px;
    }
  }
`;
