import styled from "styled-components";

export const NavbarStyle = styled.section`
  width: 100%;
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 50px 29px 38px;
    background: #f8f8f8;
    .text--div {
      h1 {
        font-family: Lato;
        font-size: 22px;
        font-weight: 700;
        line-height: 26px;
        letter-spacing: 0em;
        text-align: left;
        padding-top: 11px
      }
    }
    .icon--div {
      display: flex;
      align-items: center;
      gap: 32px
    //   padding: 15px
    }
    .back--icon {
        background-color: #fff;
        padding: 15px;
        border-radius: 16px;
    }
  }
`;
