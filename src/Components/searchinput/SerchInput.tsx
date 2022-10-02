import React, { Children, ReactNode } from "react";

import { SearchInputStyled } from "./SearchInputStyled";

export default function SearchInput({children}:any) {
  return (
    <SearchInputStyled style={{background: "#fff0"}}>
      <section className="input--search">
         <div className="icon icon-search"></div>
         <div className="input">
          {children}
        </div>
      </section>
    </SearchInputStyled>
  );
}
