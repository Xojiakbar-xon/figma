import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

// user default Avatar icon
import userAvatar from "../../assets/img/userAvatarIcon.png";

export default function Sidebar() {
  const location: string = useLocation().pathname;
  const navigate = useNavigate();

  // for the responsive Sidebar
  const [isopen, setIsopen] = useState<boolean>(false);

  function pageOut() {
    localStorage.removeItem("TOKEN");
    localStorage.removeItem("ISAUTH");
    navigate("/login");
  }

  function sidebarOpen() {
    setIsopen((p) => !p);
  }

  return (
    <StyledSidebar>
      <div className={(isopen ? "On " : "") + "sidebar__wrapper"}>
        <div
          className={(isopen ? "On " : "") + "sidebar-menu"}
          onClick={() => sidebarOpen()}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="userAvatar">
          <img src={userAvatar} alt="UserAvatar" />
        </div>
        <Link to="/fields" onClick={() => setIsopen(false)}>
          <div
            className={"icon__wrapper" + (location === "/fields" ? " On" : "")}
          >
            <div className="icon icon-fields"></div>
          </div>
        </Link>
        <Link to="/positions" onClick={() => setIsopen(false)}>
          <div
            className={
              "icon__wrapper" + (location === "/positions" ? " On" : "")
            }
          >
            <div className="icon icon-positions"></div>
          </div>
        </Link>
        <Link to="/users" onClick={() => setIsopen(false)}>
          <div
            className={"icon__wrapper" + (location === "/users" ? " On" : "")}
          >
            <div className="icon icon-users"></div>
          </div>
        </Link>
        <Link to="/agenda" onClick={() => setIsopen(false)}>
          <div
            className={"icon__wrapper" + (location === "/agenda" ? " On" : "")}
          >
            <div className="icon icon-agenda"></div>
          </div>
        </Link>
        <Link to="/speaker" onClick={() => setIsopen(false)}>
          <div
            className={"icon__wrapper" + (location === "/speaker" ? " On" : "")}
          >
            <div className="icon speaker"></div>
          </div>
        </Link>
        <Link to="/tickets" onClick={() => setIsopen(false)}>
          <div
            className={"icon__wrapper" + (location === "/tickets" ? " On" : "")}
          >
            <div className="icon icon-ticket"></div>
          </div>
        </Link>
        <Link to="/comments" onClick={() => setIsopen(false)}>
          <div
            className={
              "icon__wrapper" + (location === "/comments" ? " On" : "")
            }
          >
            <div className="icon comments"></div>
          </div>
        </Link>
        <Link to="/settings" onClick={() => setIsopen(false)}>
          <div
            className={
              "icon__wrapper" + (location === "/settings" ? " On" : "")
            }
          >
            <div className="icon icon-settings"></div>
          </div>
        </Link>
        <div className="icon__wrapper out" onClick={pageOut}>
          <div className="icon icon-out"></div>
        </div>
      </div>
    </StyledSidebar>
  );
}

const StyledSidebar = styled.div`
  .sidebar__wrapper {
    padding: 17px 14px;
    width: 100px;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    z-index: 50;

    position: fixed;
    background-color: #fff;
    box-shadow: 3px -4px 4px rgba(189, 189, 189, 0.233);
    transition: linear;

    &.On {
      left: 0px;

      .sidebar-menu {
        left: 100px;
      }
    }

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

        .icon {
          background-color: #3b72ff;
        }
      }

      &.out {
        position: absolute;
        bottom: 32px;
      }
    }

    /* in mobile response */
    .sidebar-menu {
      cursor: pointer;
      width: 56px;
      height: 35px;
      position: fixed;
      top: 10%;
      left: -1000px;
      transition: 0.5s;
      border-top-right-radius: 30px;
      border-bottom-right-radius: 30px;
      background-color: #1843b9;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      opacity: 0.5;
      z-index: 49;

      &:hover {
        opacity: 1;
      }

      span {
        margin-top: 6px;
        width: 24px;
        height: 2px;
        background-color: #fff;
        transition: 0.2s;

        &:first-of-type {
          margin: 0;
        }
      }

      &.On {
        span:first-of-type {
          margin-top: 0px;
          transform: rotate(-60deg);
        }
        span:nth-of-type(2) {
          display: none;
        }
        span:last-of-type {
          position: absolute;
          margin-bottom: 5px;
          transform: rotate(55deg);
        }
      }
    }

    @media (max-width: 560px) {
      left: -1000px;

      .sidebar__wrapper {
        top: 0px;
        left: -1000px;
      }

      .sidebar-menu {
        left: -22px;

        &:hover {
          left: 0px;
        }

        &.On {
          &:hover {
            left: 100px;
          }
        }
      }
    }
  }
`;
