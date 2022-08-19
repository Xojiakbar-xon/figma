import React from "react";

// import Select from "../../../assets/icon/SearchIcon"

import styled from "styled-components";
export default function () {
  return (
    <SelectStyled>
      {/* <section className="select_heder">
        <p>Field</p>
        <i className="icon icon-search"></i>
      </section> */}
      <select name="" id="">
        <option value="Field">Uzbekistan</option>
        <option value="Field">Russia</option>
        <option value="Field">England</option>
      </select>
    </SelectStyled>
  );
}
const SelectStyled = styled.div`
  select {
    width: 100%;
    outline: none;
    border: none;
    background-color: #f6f6f6;
    border-radius: 8px;
    padding: 10px;
    padding-right: 25px !important;
  }
  p {
    font-family: Roboto;
    font-size: 15px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0.10000000149011612px;
    text-align: left;
  }
`;
