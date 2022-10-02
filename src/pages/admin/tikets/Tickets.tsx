import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

//
import { IContext, IData, MyContext } from "../../../context/Context";

//
import Loader from "../../../Components/Loader/Loader";
import SearchInput from "../../../Components/searchinput/SerchInput";
import { UsersStyled } from "../../../Components/usermain/UsersStyled";
import AddTickets from "../../../Components/MODAL/addTickets/AddTickets";
import { UsersStyled2 } from "../../../Components/usermain/UserStyle2";
import { TabIcon, TabTitle } from "../../../utils/GeneralFunction";
import tickImg from "../../../utils/icons8-cyborg-16.png"

export const Tickets: React.FC = () => {
  TabTitle("Tickets - TGF");
  
  TabIcon(tickImg)

  const { loading, getTickets, ticketsDelete, tickets } =
    useContext<IContext>(MyContext);
  const [isopen, setisopen] = useState<boolean>(false);
  const [checkStore, setCheckStore] = useState<string[]>([]);
  const [velue, setvelue] = useState("");
  const [curent, setCurent] = useState(null);

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
      tickets?.data?.forEach((i: IData) => {
        if (!checkStore.includes(i._id)) {
          setCheckStore((p) => [...p, i._id]);
        }
      });
    } else {
      setCheckStore([]);
    }
  }

  function deleteTickets() {
    if (ticketsDelete) {
      ticketsDelete({ ids: checkStore });
      setCheckStore([]);
    }
  }
  // ========================================
  // get
  useEffect(() => {
    if (getTickets) {
      getTickets();
    }
  }, []);

  // Chekstore Watcher
  useEffect(() => {
    if (checkStore.length === 0) {
      setCurent(null);
    } else if (checkStore.length === 1) {
      tickets?.data.forEach((i: any) => {
        if (checkStore[0] === i._id) setCurent(i);
      });
    } else {
      setCurent(null);
    }
  }, [checkStore]);

  const Filter = tickets?.data.filter((z: any) =>
    z.category.toLowerCase().includes(velue.toLowerCase())
  );
  return (
    <UsersStyled>
      <section className="user--card">
        <div className="first--div">
          <div className="absolutDiv">
            <div className="tag--div">
              <h2>
                {checkStore.length > 0
                  ? checkStore.length + " Tickets selected"
                  : ""}
              </h2>
            </div>
            <div className="icon--div">
              {checkStore.length > 0 ? (
                <div className="icon icon-icon1" onClick={deleteTickets}></div>
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
                <p>Kategoriya</p>
              </div>
              <div className="expand">
                <p>Sector</p>
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
                    onClick={() => {
                      setisopen(true);
                      setCurent(i);
                    }}
                  >
                    <div className="fullName">
                      <p>{i?.category}</p>
                    </div>
                    <div className="date">
                      <p>{i?.sector}</p>
                    </div>
                    <div className="soha">
                      <p>{i?.row}</p>
                    </div>
                    <div className="brand">
                      <p style={{ marginLeft: "20px" }}>{i?.seat}</p>
                    </div>
                    <div className="brand">
                      <p style={{ marginLeft: "20px" }}>{i?.price}</p>
                    </div>
                    <div className="brand">
                      <p>{i?.__v}</p>
                    </div>
                    <div className="brand">
                      <p>{i?._id}</p>
                    </div>
                  </div>
                </main>
              ))}
            </div>
          </div>
        )}
      </UsersStyled2>

      {/* USERS CARD */}

      {isopen ? (
        <AddTickets
          adduser={checkStore.length === 1 ? false : true}
          set={setisopen}
          user={curent}
          setCurent={setCurent}
        />
      ) : null}
    </UsersStyled>
  );
};
