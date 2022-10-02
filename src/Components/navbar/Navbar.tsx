import React from "react";
import { useLocation } from "react-router-dom";
import { NavbarStyle } from "./NavbarStyle";

export default function Navbar() {
  const location = useLocation().pathname;

  return (
    <NavbarStyle>
      <section className="navbar">
        <div className="text--div">
          <h1>
            {location === "/fields"
              ? "Fields"
              : location === "/positions"
              ? "Positions"
              : location === "/agenda"
              ? "Agenda"
              : location === "/comments"
              ? "Comments"
              : location === "/tickets"
              ? "Tickets"
              : location === "/settings"
              ? "Settings":
              location === "/speaker"? "Speaker":
            "Users"}
          </h1>
        </div>
      </section>
    </NavbarStyle>
  );
}
