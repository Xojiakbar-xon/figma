import React from "react";
import del from "../../assets/icon/DelIcon";
import pen from "../../assets/icon/Icon2";
import email from "../../assets/icon/Icon3";
import icon3 from "../../assets/icon/Icon4";
import icon4 from "../../assets/icon/Icon5";
import expand from "../../assets/icon/Expand";

import styled from "styled-components";
import { Input } from "./Input";

export function User() {
  return (
    <StyledUser>
      <div className="card">
        <div className="main">
          <h1>4 Users selected</h1>
          <section>
         
          </section>
        </div>
      </div>
      <Input />
      <div className="user-information">
        <div className="expand">
          <input type="checkbox" />
          <p>Full name</p>
        </div>
        <div className="expand">
          <p>Date</p>
          <span>
            {/* <expand/> */}
          </span>
        </div>
        <div className="expand">
          <p>Tel nomer</p>
          <span>
          {/* <expand/> */}
          </span>
        </div>
        <div className="expand">
          <p>Soha</p>
          <span>
          {/* <expand/> */}
          </span>
        </div>
        <div className="expand">
          <p>Brand</p>
          <span>
          {/* <expand/> */}
          </span>
        </div>
        <div className="expand">
          <p>Xodimlar soni</p>
          <span>
          {/* <expand/> */}
          </span>
        </div>
        <div className="expand">
          <p>Lavozimi</p>
          <span>
          {/* <expand/> */}
          </span>
        </div>
      </div>
      <footer className="card">
        <div className="expand">
          <input type="checkbox" />
          <p>Adison Rhiel Madsen</p>
        </div>
        <p>5001929442</p>
        <p>5001929442</p>
        <p>5001929442</p>
        <p>5001929442</p>
        <p>5001929442</p>
        <div className="banned">banned</div>
      </footer>
    </StyledUser>
  );
}

const StyledUser = styled.div`
  background: #fff;
  box-shadow: 0px 14px 14px rgba(20, 23, 38, 0.02);
  border-radius: 0 0 16px 16px;
  margin: 0 38px;

  h1 {
    font-weight: 600;
    font-size: 14px;
    color: #8992a9;
  }
  .main {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  section {
    display: flex;
    flex-direction: row;
    gap: 30px;
  }
  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #8992a9;
  }
  .user-information {
    display: flex;
    justify-content: space-between;
    /* gap: 100px; */
    background: #fafafb;
    padding: 15px 18px;
  }
  .expand {
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
  }
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0 0 16px 16px;
    border: 2px solid red;

    .banned {
      font-weight: 600;
      font-size: 12px;
      line-height: 14px;
      color: #ff3b3b;
      width: 60px;
      height: 20px;
      background: rgba(255, 59, 59, 0.14);
      border-radius: 6px;
      text-align: center;
      padding: 4px;
    }
  }
`;
