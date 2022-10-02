import { useContext, useEffect, useState } from "react";

// Styles
import styled from "styled-components";
import { UsersStyled } from "../../../Components/usermain/UsersStyled";

// Compnents
import SearchInput from "../../../Components/searchinput/SerchInput";
import Field from "../../../Components/MODAL/Add field/Feild";

// Interface
import { IContext, IData, MyContext } from "../../../context/Context";

// Loading
import Loader from "../../../Components/Loader/Loader";
import { relative } from "path";
import { UsersStyled2 } from "../../../Components/usermain/UserStyle2";
import { TabTitle } from "../../../utils/GeneralFunction";
function FieldsCard() {
  TabTitle("Fields");

  const { getFeild, userField, deleteFeild, loading } =
    useContext<IContext>(MyContext);
  const [isopen, setisopen] = useState<boolean>(false);

  const [Isopen, setIsopen] = useState<boolean>(true);
  const [velue, setvelue] = useState<any>("");
  const [checkStore, setCheckStore] = useState<string[]>([]);
  const [current, setcurrent] = useState<any>(null);
  function checkedClick(id: string) {
    if (checkStore.includes(id)) {
      setCheckStore((p) => p.filter((i) => i !== id));
    } else {
      setCheckStore((p) => [...p, id]);
    }
  }
  const Filter = userField?.data.filter((z) =>
    z.name.uz.toLowerCase().includes(velue.toLowerCase())
  );
  function allChecked(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      userField?.data?.forEach((i: IData) => {
        if (!checkStore.includes(i._id)) {
          setCheckStore((p) => [...p, i._id]);
        }
      });
    } else {
      setCheckStore([]);
    }
  }

  function deleteFeildd() {
    if (deleteFeild) {
      deleteFeild({ ids: checkStore });
      setCheckStore([]);
    }
  }

  // get
  useEffect(() => {
    if (getFeild) {
      getFeild();
    }
  }, []);

  // Chekstore Watcher
  useEffect(() => {
    if (checkStore.length === 0) {
      setcurrent({
        _id: "",
        name: {
          uz: "",
          ru: "",
          en: "",
        },
      });
    } else if (checkStore.length === 1) {
      userField?.data.forEach((i) => {
        if (checkStore[0] === i._id) setcurrent(i);
      });
    } else {
      setcurrent({
        _id: "",
        name: {
          uz: "",
          ru: "",
          en: "",
        },
      });
    }
  }, [checkStore]);

  function f(e: any) {
    console.log("sasasa");
    setvelue(e.target.textContent);
    setIsopen((p) => !p);
  }
  function e() {
    setIsopen(true);
  }

  return (
    <UsersStyled>
      <section className="user--card">
        <div className="first--div">
          <div className="absolutDiv">
            <div className="tag--div">
              <h2>
                {checkStore.length > 0
                  ? checkStore.length + " Fields selected"
                  : ""}
              </h2>
            </div>
            <div className="icon--div">
              {checkStore.length > 0 ? (
                <div className="icon icon-icon1" onClick={deleteFeildd}></div>
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
            <form
              action=""
              style={{
                position: "relative",
              }}
            >
              <input
                type="text"
                placeholder="Search Name, Date, Number..."
                onChange={(e) => setvelue(e.target.value)}
                value={velue}
                onClick={e}
              />
              <ul
                style={{
                  position: "absolute",
                  left: "0",
                  top: "35px",
                  width: "100%",
                  background: "white",
                  listStyle: "none",
                  margin: "0",
                  padding: "0",
                  zIndex: "100",
                  maxHeight: "230px",
                  height: "auto",
                  overflow: "auto",
                }}
              >
                {velue && Isopen
                  ? Filter?.map((z: any, idx: number) => {
                      return (
                        <li
                          style={{ padding: "10px", cursor: "pointer" }}
                          key={idx}
                          onClick={f}
                        >
                          {z.name.uz}
                        </li>
                      );
                    })
                  : null}
              </ul>
            </form>
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
        {isopen ? (
          <Field
            adduser={checkStore.length === 1 ? false : true}
            set={setisopen}
            user={current}
            setcurrent={setcurrent}
          />
        ) : null}
      </UsersStyled2>
    </UsersStyled>
  );
}

export default FieldsCard;
