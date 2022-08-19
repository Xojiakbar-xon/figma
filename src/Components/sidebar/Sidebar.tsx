import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

// user default Avatar icon
//@ts-ignore
import userAvatar from "../../assets/img/userAvatarIcon.png";

export default function Sidebar() {
  const location: string = useLocation().pathname;

  return (
    <StyledSidebar>
      <div className="userAvatar">
        <img src={userAvatar} alt="UserAvatar" />
      </div>
      <div className="icon__wrapper">
        <div className="icon icon-layout"></div>
      </div>
      <div className="icon__wrapper">
        <div className="icon icon-layout"></div>
      </div>
      <div className="icon__wrapper">
        <div className="icon icon-layout"></div>
      </div>
      <div className={"icon__wrapper" + (location === "/users" ? " On" : "")}>
        <div className="icon icon-users"></div>
      </div>
      <div className="icon__wrapper out">
        <Link to="/users">
          <div className="icon icon-out"></div>
        </Link>
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
  position: fixed;
  top: 0;
  right: 0  ;

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
      /* background: #e3ebff; */
      border-radius: 16px;

      .icon {
        background-color: #3b72ff;
      }
    }

    &.out {
      position: absolute;
      bottom: 32px;
    }
  }
`;
