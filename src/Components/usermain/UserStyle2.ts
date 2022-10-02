import styled from "styled-components";

export const UsersStyled2 = styled.div`
  margin-top: 60px;
  min-width: 300px;
  height: 80%;
  overflow-x: scroll;

  .user-information {
    padding: 13px 18px;
    display: flex;
    align-items: center;
  }

  .map-users {
    min-width: 1200px;

    main {
      gap: 17px;

      input {
        cursor: pointer;
        margin-left: 20px;
      }

      & > .map {
        width: 1200px;
        padding: 0px;
        display: flex;
        align-items: center;

        & > div {
          min-width: 295px;
          max-width: 300px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          cursor: pointer;

          &:first-of-type {
            min-width: 265px;
            max-width: 280px;
          }
        }

        & > .fullName {
          display: flex;
          align-items: center;

          p {
            cursor: pointer;
            font-weight: 600;
            font-size: 14px;
            line-height: 17px;
            color: #181c25;
            margin: 0;
          }
        }

        &.lavozimi {
          display: flex;

          .banOrAcrive {
            cursor: pointer;
            padding: 2.5px 8px;
            background: rgba(255, 59, 59, 0.14);
            border-radius: 6px;
            font-weight: 600;
            font-size: 12px;
            line-height: 14px;
            color: #ff3b3b;
          }
        }

        p {
          cursor: pointer;
          margin: 0;
          color: #8992aa;
          font-size: 13px;
          line-height: 15px;
        }
      }
    }
  }

  /* SCROLLBAR */

  ::-webkit-scrollbar {
    width: 8px;
    height: 12px;
    z-index: 20;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
