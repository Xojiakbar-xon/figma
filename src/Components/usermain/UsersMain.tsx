import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

//
import { IData, MyContext } from "../../context/Context";

//
import AddUserModal from "../MODAL/userAddModal/AddUserModal";
import Loader from "../Loader/Loader";
import SearchInput from "../searchinput/SerchInput";
import { UsersStyled } from "./UsersStyled";
import { UsersStyled2 } from "./UserStyle2";
import { TabTitle } from "../../utils/GeneralFunction";

export const UsersMain: React.FC = () => {
  TabTitle("UserMain - TGF");

  const { Getusers, users, usersDelete, loading, getPosition, getFeild } =
    useContext<any>(MyContext);

  //
  const [isopen, setisopen] = useState<boolean>(false);
  const [checkStore, setCheckStore] = useState<string[]>([]);
  const [velue, setvelue] = useState("");
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
      setCheckStore([]);
    }
  }
  // ========================================
  // get
  useEffect(() => {
    Getusers();
    if (getPosition) getPosition();
    if (getFeild) getFeild();
  }, []);

  // Chekstore Watcher
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
    } else if (checkStore.length === 1) {
      users?.data.forEach((i: any) => {
        if (checkStore[0] === i._id) setCurent(i);
      });
    } else {
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

  const Filter = users?.data.filter((z: any) =>
    z?.fullName?.toLowerCase()?.includes(velue.toLowerCase())
  );
  return (
    <UsersStyled>
      <section className="user--card">
        <div className="first--div">
          <div className="absolutDiv">
            <div className="tag--div">
              <h2>
                {checkStore.length > 0
                  ? checkStore.length + " Users selected"
                  : ""}
              </h2>
            </div>
            <div className="icon--div">
              {checkStore.length > 0 ? (
                <div className="icon icon-icon1" onClick={deletePosit}></div>
              ) : null}
              <div
                className={
                  "icon " +
                  (checkStore.length === 1 ? "icon-icon2" : "icon-addUser")
                }
                onClick={() => {
                  setisopen(true);
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="second--div">
          <SearchInput>
            <input
              type="text"
              placeholder="Search Name, Date, Number..."
              onChange={(e) => setvelue(e.target.value)}
            />
          </SearchInput>
        </div>
      </section>

      <UsersStyled2>
        {loading ? (
          <Loader />
        ) : (
          <div className="end--div">
            <div className="user-information">
              <div className="expand">
                <input type="checkbox" onChange={allChecked} />
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
            <div className="map-users">
              {Filter?.map((i: any) => (
                <main
                  style={{ display: "flex", alignItems: "center" }}
                  key={i._id}
                >
                  <input
                    type="checkbox"
                    checked={checkStore.includes(i._id)}
                    onChange={() => {
                      checkedClick(i._id);
                      setCurent(i);
                    }}
                  />
                  <div
                    className="map"
                    key={i._id}
                    onClick={() => {
                      setisopen(true);
                      setCurent(i);
                    }}
                  >
                    <div className="fullName">
                      <p>{i?.fullName}</p>
                    </div>
                    <div className="date">
                      <p>{i?.brand}</p>
                    </div>
                    <div className="soha">
                      <p>{i?.phoneNumber}</p>
                    </div>
                    <div className="brand">
                      <p style={{ marginLeft: "20px" }}>{i?.employeeCount}</p>
                    </div>
                    <div className="brand">
                      <p>{i?.fieldId}</p>
                    </div>
                    <div className="brand">
                      <p style={{ marginLeft: "20px" }}>{i?.__v}</p>
                    </div>
                    <div className="brand">
                      <p>{i?.positionId}</p>
                    </div>
                  </div>
                </main>
              ))}
            </div>
          </div>
        )}
      </UsersStyled2>

      {isopen ? (
        <AddUserModal
          adduser={checkStore.length === 1 ? false : true}
          set={setisopen}
          user={curent}
          setCurent={setCurent}
        />
      ) : null}
    </UsersStyled>
  );
};

// const StyledUserCard = styled.div`
//   margin-top: 60px;
//   min-width: 300px;
//   height: 80%;
//   overflow-x: scroll;

//   .user-information {
//     padding: 13px 18px;
//     display: flex;
//     align-items: center;
//   }

//   .map-users {
//     min-width: 1200px;

//     & > .map {
//       width: 1200px;
//       padding: 12px 0;
//       display: flex;
//       align-items: center;
//       cursor: pointer;

//       & > div {
//         min-width: 200px;
//         display: flex;
//         align-items: center;
//         justify-content: start;
//       }

//       & > .fullName {
//         margin-left: 17px;
//         display: flex;
//         align-items: center;
//         gap: 10px;
//         input {
//           cursor: pointer;
//         }

//         p {
//           cursor: pointer;
//           font-weight: 600;
//           font-size: 14px;
//           line-height: 17px;
//           color: #181c25;
//           margin: 0;
//         }
//       }

//       &.lavozimi {
//         display: flex;

//         .banOrAcrive {
//           cursor: pointer;
//           padding: 2.5px 8px;
//           background: rgba(255, 59, 59, 0.14);
//           border-radius: 6px;
//           font-weight: 600;
//           font-size: 12px;
//           line-height: 14px;
//           color: #ff3b3b;
//         }
//       }

//       p {
//         cursor: pointer;
//         margin: 0;
//         color: #8992aa;
//         font-size: 13px;
//         line-height: 15px;
//       }
//     }
//   }

//   /* SCROLLBAR */

//   ::-webkit-scrollbar {
//     width: 8px;
//     height: 12px;
//     z-index: 20;
//   }

//   /* Track */
//   ::-webkit-scrollbar-track {
//     background: #f1f1f1;
//   }

//   /* Handle */
//   ::-webkit-scrollbar-thumb {
//     background: #888;
//   }

//   /* Handle on hover */
//   ::-webkit-scrollbar-thumb:hover {
//     background: #555;
//   }
// `;
