import { useState, useEffect,useContext} from "react";
import styled from "styled-components";
import Botton from "./botom/Botton";
import Input from "./input/Input";
import Select from "./select/Select";


export default function AddUserModal() {
  


  return (
    <Styledapp>
      <form action="">
        <h1>Add user</h1>
        <Input placeholder="Full name *" />
        <Input placeholder="Phone number *" />
        <Input placeholder="Brand" />
        <Input placeholder="Employee count" />
        <div className="buton">
          <Botton pe={false} typee="submit"  >
            Save
          </Botton>
          <Botton typee="submit" pe={true}>
            Cancel
          </Botton>
        </div>
      </form>
    </Styledapp>
  );
}
const Styledapp = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 0px;
  right: 0px;

  form {
    .buton {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    padding: 33px 23px;
    background: #ffffff;
    box-shadow: -3px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    h1 {
      font-family: "Lato";
      font-style: normal;
      font-weight: 700;
      font-size: 22px;
      line-height: 26px;
      font-size: 22px;
      font-weight: 700;
      line-height: 26px;
      letter-spacing: 0em;
      margin-bottom: 39px;
    }
  }
`;
