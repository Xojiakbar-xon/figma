import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import Loader from "../../../Components/Loader/Loader";
import SpeakerModal from "../../../Components/MODAL/ModalSpeaker/SpeakerModal";
import SearchInput from "../../../Components/searchinput/SerchInput";
import { UsersStyled } from "../../../Components/usermain/UsersStyled";
import { UsersStyled2 } from "../../../Components/usermain/UserStyle2";
import { IContext, S } from "../../../context/Context";
import { MyContext } from "../../../context/Context";
import { TabIcon, TabTitle } from "../../../utils/GeneralFunction";
import tickImg from "../../../utils/icons8-robot-2-16.png"

export default function SpeakerCard() {
  TabTitle("Speakers - TGF");
  TabIcon(tickImg)

  const { SpeakerGet, loading, usersSpeaker, SpeakerDelete } =
    useContext<IContext>(MyContext);

  const [checkStore, setCheckStore] = useState<string[]>([]);
  const [isopen, setisopen] = useState<boolean>(false);

  const [current, setcurrent] = useState<any>(null);
  const [velue, setvelue] = useState("");

  function allChecked(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      usersSpeaker?.data.forEach((i: any) => {
        if (!checkStore.includes(i._id)) {
          setCheckStore((p) => [...p, i._id]);
        }
      });
    } else {
      setCheckStore([]);
    }
  }
  useEffect(() => {
    if (SpeakerGet) {
      SpeakerGet();
    }
  }, []);

  function checkedClick(id: string) {
    if (checkStore.includes(id)) {
      setCheckStore((p) => p.filter((i) => i !== id));
    } else {
      setCheckStore((p) => [...p, id]);
    }
  }
  function Delete() {
    if (SpeakerDelete) {
      SpeakerDelete({ ids: checkStore });
      setCheckStore([]);
    }
  }

  // Chekstore Watcher
  useEffect(() => {
    if (checkStore.length === 0) {
      setcurrent(null);
    } else if (checkStore.length === 1) {
      usersSpeaker?.data.forEach((i: any) => {
        if (checkStore[0] === i._id) setcurrent(i);
      });
    } else {
      setcurrent(null);
    }
  }, [checkStore]);

  const Filter = usersSpeaker?.data.filter((z: any) =>
    z.name.en.toLowerCase().includes(velue.toLowerCase())
  );
  return (
    <UsersStyled>
      <section className="user--card">
        <div className="first--div">
          <div className="absolutDiv">
            <div className="tag--div">
              <h2>
                {checkStore.length > 0
                  ? checkStore.length + " Speakers selected"
                  : ""}
              </h2>
            </div>
            <div className="icon--div">
              {checkStore.length > 0 ? (
                <div className="icon icon-icon1" onClick={() => Delete()}></div>
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
                <p>Ismi</p>
              </div>
              <div className="expand">
                <p>Russian</p>
              </div>
              <div className="expand">
                <p>English</p>
              </div>
              <div className="expand">
                <p>Uz bio</p>
              </div>
              <div className="expand">
                <p>Ru bio</p>
              </div>
              <div className="expand">
                <p>Eng bio</p>
              </div>
            </div>
            <div className="map-users">
              {Filter.map((i: S) => (
                <main
                  style={{ display: "flex", alignItems: "center" }}
                  key={i._id}
                >
                  <input
                    type="checkbox"
                    checked={checkStore.includes(i._id)}
                    onChange={() => {
                      checkedClick(i._id);
                      setcurrent(i);
                    }}
                  />
                  <div
                    className="map"
                    onClick={() => {
                      setisopen(true);
                      setcurrent(i);
                    }}
                  >
                    <div className="fullName">
                      <p>{i?.name.en}</p>
                    </div>
                    <div className="soha">
                      <p>{i?.name.ru}</p>
                    </div>
                    <div className="brand">
                      <p>{i?.name.uz}</p>
                    </div>
                    <div className="brand">
                      <p>{i?.bio?.en}</p>
                    </div>
                    <div className="brand">
                      <p>{i?.bio?.ru}</p>
                    </div>
                    <div className="brand">
                      <p>{i?.bio?.uz}</p>
                    </div>
                  </div>
                </main>
              ))}
            </div>
          </div>
        )}
        {isopen ? (
          <SpeakerModal
            set={setisopen}
            adduser={checkStore.length === 1 ? false : true}
            curent={current}
            setCurent={setcurrent}
          />
        ) : null}
      </UsersStyled2>
    </UsersStyled>
  );
}
