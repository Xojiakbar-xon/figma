import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

//
import { IData, MyContext } from "../../../context/Context";

//
import Loader from "../../../Components/Loader/Loader";
import SearchInput from "../../../Components/searchinput/SerchInput";
import { UsersStyled } from "../../../Components/usermain/UsersStyled";
import { TabTitle } from "../../../utils/GeneralFunction";

export const Comments: React.FC = () => {
  TabTitle("Comments - TGF");

  const { Getusers, users, usersDelete, loading } = useContext<any>(MyContext);
  const [checkStore, setCheckStore] = useState<string[]>([]);

  const [curent, setCurent] = useState({
    fullName: "",
    phoneNumber: "",
    fieldId: "",
    brand: "",
    employeeCount: "",
    positionId: "",
  });

  // DELETE LOGICKASI....
  function checkedClick(id: string) {
    if (checkStore.includes(id)) {
      setCheckStore((p) => p.filter((i) => i !== id));
    } else {
      setCheckStore((p) => [...p, id]);
    }
  }

  function allChecked(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      users?.data?.forEach((i: IData) => {
        if (!checkStore.includes(i._id)) {
          setCheckStore((p) => [...p, i._id]);
        }
      });
    } else {
      setCheckStore([]);
    }
  }

  function deletePosit() {
    if (usersDelete) {
      usersDelete({ ids: checkStore });
    }
  }
  // ========================================
  // get
  useEffect(() => {
    if (Getusers) {
      Getusers();
    }
  }, []);

  useEffect(() => {
    if (checkStore.length === 0) {
      setCurent({
        fullName: "",
        phoneNumber: "",
        fieldId: "",
        brand: "",
        employeeCount: "",
        positionId: "",
      });
    }
  }, [checkStore]);

  return (
    <UsersStyled>
      <section className="user--card">
        <div className="first--div">
          <div className="absolutDiv">
            <div className="tag--div">
              <h2>
                {checkStore.length > 0
                  ? checkStore.length + " Comments selected"
                  : ""}
              </h2>
            </div>
            <div className="icon--div"></div>
          </div>
        </div>
        <div className="second--div">
          <SearchInput />
        </div>
      </section>
      <StyledUserCard>
        {loading ? (
          <Loader />
        ) : (
          <div className="end--div">
            <div className="user-information">
              <div className="expand">
                <input type="checkbox" disabled={true} onChange={allChecked} />
                <p>Full name</p>
              </div>
              <div className="expand">
                <p>Date</p>
              </div>
              <div className="expand">
                <p>Title</p>
              </div>
              <div className="expand">
                <p>Title</p>
              </div>
              <div className="expand">
                <p>Title</p>
              </div>
              <div className="expand">
                <p>Title</p>
              </div>
              <div className="expand">
                <p>Status</p>
              </div>
            </div>
          </div>
        )}
      </StyledUserCard>
    </UsersStyled>
  );
};

const StyledUserCard = styled.div`
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

    & > .map {
      width: 1200px;
      padding: 12px 0;
      display: flex;
      align-items: center;

      & > div {
        min-width: 200px;
        display: flex;
        align-items: center;
        justify-content: start;
      }

      & > .fullName {
        margin-left: 17px;
        display: flex;
        align-items: center;
        gap: 10px;
        input {
          cursor: pointer;
        }

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
