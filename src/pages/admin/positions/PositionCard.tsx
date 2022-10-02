import React, { useContext, useEffect, useState } from "react";

// Styles
import styled from "styled-components";
import { UsersStyled } from "../../../Components/usermain/UsersStyled";

// Components
import SearchInput from "../../../Components/searchinput/SerchInput";
import AddUserModalPosition from "../../../Components/MODAL/positionAddModal/AddUserModalPosition";

// Context & interface
import { IContext, IData, MyContext } from "../../../context/Context";

// Loading
import Loader from "../../../Components/Loader/Loader";
import { UsersStyled2 } from "../../../Components/usermain/UserStyle2";
import { TabIcon, TabTitle } from "../../../utils/GeneralFunction";
import tickImg from "../../../utils/qq.png"

function PositionCard() {
  TabTitle("Positions - TGF");
  TabIcon(tickImg)

  const { getPosition, deletePosition, userPosit, loading } =
    useContext<IContext>(MyContext);
  const [isopen, setisopen] = useState<boolean>(false);
  const [checkStore, setCheckStore] = useState<string[]>([]);
  const [velue, setvelue] = useState<string>("");

  const [curent, setCurent] = useState({
    _id: "",
    name: {
      uz: "",
      ru: "",
      en: "",
    },
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
      userPosit?.data?.forEach((i: IData) => {
        if (!checkStore.includes(i._id)) {
          setCheckStore((p) => [...p, i._id]);
        }
      });
    } else {
      setCheckStore([]);
    }
  }

  function deletePosit() {
    if (deletePosition) {
      deletePosition({ ids: checkStore });
      setCheckStore([]);
    }
  }
  // ========================================

  // get
  useEffect(() => {
    if (getPosition) {
      getPosition();
    }
  }, []);
  const Filter = userPosit?.data.filter((z) =>
    z.name.uz.toLowerCase().includes(velue.toLowerCase())
  );

  // Chekstore Watcher
  useEffect(() => {
    if (checkStore.length === 0) {
      setCurent({
        _id: "",
        name: {
          uz: "",
          ru: "",
          en: "",
        },
      });
    } else if (checkStore.length === 1) {
      userPosit?.data.forEach((i) => {
        if (checkStore[0] === i._id) setCurent(i);
      });
    } else {
      setCurent({
        _id: "",
        name: {
          uz: "",
          ru: "",
          en: "",
        },
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
                  ? checkStore.length + " Positions selected"
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
            </div>
            <div className="map-users">
              {Filter?.map((i: any, idx: number) => (
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
                    onClick={() => {
                      setisopen(true);
                      setCurent(i);
                    }}
                  >
                    <div className="fullName">
                      <p>{i?.name.uz}</p>
                    </div>
                    <div className="date">
                      <p>{i?.__v}</p>
                    </div>
                    <div className="soha">
                      <p>{i?.name.ru}</p>
                    </div>
                    <div className="brand">
                      <p>{i?.name.en}</p>
                    </div>
                  </div>
                </main>
              ))}
            </div>
          </div>
        )}
      </UsersStyled2>

      {isopen ? (
        <AddUserModalPosition
          adduser={checkStore.length === 1 ? false : true}
          set={setisopen}
          user={curent}
          setCurent={setCurent}
        />
      ) : null}
    </UsersStyled>
  );
}

export default PositionCard;
