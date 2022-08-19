import React from "react";

//
import AddUserModal from "../addUserModal/AddUserModal";
import SearchInput from "../searchinput/SerchInput";
import { UsersStyled } from "./UsersStyled";

export default function UsersMain() {
  return (
    <UsersStyled>
      <section className="user--card">
        <div className="first--div">
          <div className="tag--div">
            <h2>4 Users selected</h2>
          </div>
          <div className="icon--div">
            <div className="icon icon-icon1"></div>
            <div className="icon icon-icon2"></div>
            <div className="icon icon-icon3"></div>
            <div className="icon icon-icon4"></div>
            <div className="icon icon-dont"></div>
          </div>
        </div>
        <div className="second--div">
          <SearchInput />
        </div>
        <div className="end--div">
          <div className="user-information">
            <div className="expand">
              <input type="checkbox" />
              <p>Full name</p>
            </div>
            <div className="expand">
              <p>Date</p>
              <span>
                <div className="icon icon-expand"></div>
              </span>
            </div>
            <div className="expand">
              <p>Tel nomer</p>
              <span>
                <div className="icon icon-expand"></div>
              </span>
            </div>
            <div className="expand">
              <p>Soha</p>
              <span>
                <div className="icon icon-expand"></div>
              </span>
            </div>
            <div className="expand">
              <p>Brand</p>
              <span>
                <div className="icon icon-expand"></div>
              </span>
            </div>
            <div className="expand">
              <p>Xodimlar soni</p>
              <span>
                <div className="icon icon-expand"></div>
              </span>
            </div>
            <div className="expand">
              <p>Lavozimi</p>
              <span>
                <div className="icon icon-expand"></div>
              </span>
            </div>
          </div>
          {/* <div className="card">
            <div className="expand-card">
              <input type="checkbox" />
              <p id="p">Adison Rhiel Madsen</p>
            </div>
            <div className="numbers--div-card">
              <p>5001929442</p>
              <p>5001929442</p>
              <p>5001929442</p>
              <p>5001929442</p>
              <p>5001929442</p>
            </div>
            <div className="banned">banned</div>
          </div> */}
        </div>
      </section>

      {/* ADD USER MODAL */}
      <AddUserModal />
    </UsersStyled>
  );
}
