import React from "react";

import { SearchInputStyled } from "./SearchInputStyled";

export default function SearchInput() {
  return (
    <SearchInputStyled>
      <section className="input--search">
         <div className="icon icon-search"></div>
         <div className="input">
          <input type="text" placeholder="Search Name, Date, Number..."/>
        </div>
      </section>
    </SearchInputStyled>
  );
}
