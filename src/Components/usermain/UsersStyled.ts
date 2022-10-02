import styled from "styled-components";

export const UsersStyled = styled.div`
  padding-top: 20px;
  margin: 0 auto;
  width: 100%;
  height: 530px;
  min-width: 300px;
  position: relative;
  border-radius: 16px;
  box-shadow: 0px 22px 22px 0px rgba(20, 23, 38, 0.02);
  background-color: #fff;

  input {
    border: none;
    outline: none;
  }

  .first--div {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 32px 15px 18px;
    margin-bottom: 4px;
    border-bottom: 1px solid #f4f5f7;

    .absolutDiv {
      position: absolute;
      width: 100%;
      right: 8px;
    }

    .tag--div {
      position: absolute;
      width: 100%;
      top: 3px;
      left: 15px;

      h2 {
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        color: #8992a9;
        position: fixed;
        top: 17%;
        left: 135px;

        @media (max-width: 560px) {
          left: 30px;
        }
      }
    }
    .icon--div {
      display: flex;
      align-items: center;
      gap: 29px;

      position: fixed;
      top: 18%;
      left: 0px;
      width: 100%;
      min-width: 300px;

      .icon-icon1 {
        position: absolute;
        right: 80px;
      }

      .icon-icon2,
      .icon-addUser {
        position: absolute;
        right: 36px;
      }
    }
  }

  .second--div {
    position: fixed;
  }

  .end--div {
    .user-information {
      display: flex;
      background: #fafafb;
      padding: 15px 18px;
      width: 1200px;
    }

    .expand {
      display: flex;
      align-items: center;
      gap: 17px;
      color: #8992a9;
      min-width: 295px;
      max-width: 300px;
      padding: 4px 0;

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
