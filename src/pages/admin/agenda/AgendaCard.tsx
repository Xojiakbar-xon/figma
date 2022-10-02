import React, { useContext, useEffect, useState } from "react";

// Styles
import { UsersStyled } from "../../../Components/usermain/UsersStyled";

// Components
import SearchInput from "../../../Components/searchinput/SerchInput";

// Context & interface
import { IContext, IData, MyContext } from "../../../context/Context";

// Loading
import Loader from "../../../Components/Loader/Loader";
import AddAgenda from "../../../Components/MODAL/addUserAgenda/AddAgenda";
import { UsersStyled2 } from "../../../Components/usermain/UserStyle2";
import { TabIcon, TabTitle } from "../../../utils/GeneralFunction";
import tickImg from "../../../utils/wwwww.png"

function AgendaCard() {
  TabTitle("Agenda - TGF");
  TabIcon(tickImg)

  const { getAgenda, SpeakerGet, deleteAgenda, userAgenda, loading } =
    useContext<IContext>(MyContext);
  const [isopen, setisopen] = useState<boolean>(false);
  const [checkStore, setCheckStore] = useState<string[]>([]);
  const [velue, setvelue] = useState("");

  const [curent, setCurent] = useState<any>(null);
  // DELETE LOGICKASI....
  function checkedClick(id: string) {
    if (checkStore.includes(id)) {
      setCheckStore((p) => p.filter((i) => i !== id));
    } else {
      setCheckStore((p) => [...p, id]);
    }
  }

  const Filter = userAgenda?.data.filter((z) =>
    z.name.en.toLowerCase().includes(velue.toLowerCase())
  );
  function allChecked(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      userAgenda?.data?.forEach((i: IData) => {
        if (!checkStore.includes(i._id)) {
          setCheckStore((p) => [...p, i._id]);
        }
      });
    } else {
      setCheckStore([]);
    }
  }

  function deleteAgend() {
    if (deleteAgenda) {
      deleteAgenda({ ids: checkStore });
      setCheckStore([]);
    }
  }
  // ========================================

  // get
  useEffect(() => {
    if (getAgenda) {
      getAgenda();
    }
    if (SpeakerGet) SpeakerGet();
  }, []);

  // Chekstore Watcher
  useEffect(() => {
    if (checkStore.length === 0) {
      setCurent(null);
    } else if (checkStore.length === 1) {
      userAgenda?.data.forEach((i) => {
        if (checkStore[0] === i._id) setCurent(i);
      });
    } else {
      setCurent(null);
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
                  ? checkStore.length + " Agenda selected"
                  : ""}
              </h2>
            </div>
            <div className="icon--div">
              {checkStore.length > 0 ? (
                <div className="icon icon-icon1" onClick={deleteAgend}></div>
              ) : null}
              <div
                className={
                  "icon " +
                  (checkStore.length === 1 ? "icon-icon2" : "icon-addUser")
                }
                onClick={() => setisopen(true)}
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
                <p>Nomi</p>
              </div>
              <div className="expand">
                <p>Type</p>
              </div>
              <div className="expand">
                <p>Start</p>
              </div>
              <div className="expand">
                <p>End</p>
              </div>
              <div className="expand">
                <p>Duration</p>
              </div>
              <div className="expand">
                <p>Speaker</p>
              </div>
              <div className="expand">
                <p>Theme</p>
              </div>
            </div>
            <div className="map-users">
              {Filter?.map((i: IData) => (
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
                      <p>{i?.name.en}</p>
                    </div>
                    <div>
                      <p>{i?.type}</p>
                    </div>
                    <div>
                      <p>{i?.startTime.split("T").join(" ").split(".")[0]}</p>
                    </div>
                    <div>
                      <p>{i?.endTime.split("T").join(" ").split(".")[0]}</p>
                    </div>
                    <div>
                      <p>{i?.name.ru}</p>
                    </div>
                    <div>
                      <p>{i?.name.uz}</p>
                    </div>
                    <div>
                      <p>{i?.__v}</p>
                    </div>
                  </div>
                </main>
              ))}
            </div>
          </div>
        )}
      </UsersStyled2>

      {isopen ? (
        <AddAgenda
          adduser={checkStore.length === 1 ? false : true}
          set={setisopen}
          user={curent}
          setCurent={setCurent}
        />
      ) : null}
    </UsersStyled>
  );
}

export default AgendaCard;
