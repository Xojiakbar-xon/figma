import styled from "styled-components";

export const UsersStyled = styled.div`
  background: #ffffff;
  border: 2px solid #ffffff;
  box-shadow: 0px 14px 14px rgba(20, 23, 38, 0.02);
  border-radius: 0 0 16px 16px;

  .first--div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 32px 15px 18px;
    margin-bottom: 4px;
    border-bottom: 1px solid #f4f5f7;
    .tag--div {
      h2 {
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        color: #8992a9;
      }
    }
    .icon--div {
      display: flex;
      align-items: center;
      gap: 29px;
    }
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
    align-items: center;
    gap: 8px;
    color: #8992a9;

    p {
      margin: 0;
    }

    input:checkbox {
      border: none;
    }

    .icon-expand {
      margin-top: 5px;
    }
  }

  .card {
    border: 1px solid red;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    .expand-card {
      display: flex;
      align-items: center;
      gap: 8px;

      #p {
        margin: 0;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        color: #181c25;
      }
    }

    .numbers--div-card {
      display: flex;
      align-items: center;

      p {
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        color: #8992a9;
      }
    }
  }
`;
