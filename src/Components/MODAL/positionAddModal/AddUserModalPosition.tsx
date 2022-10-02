import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import { IContext, MyContext } from "../../../context/Context";

import Botton from "../../addUserModal/botom/Botton";
import Input from "../../addUserModal/input/Input";

export interface Field {
  id: number;
  name: string;
}
interface Adduser {
  adduser: boolean;
  set: Function;
  setCurent: Function;
  user?: {
    _id: string;
    name: {
      uz: string;
      ru: string;
      en: string;
    };
  };
}
export default function AddUserModalPosition({
  adduser,
  set,
  user,
  setCurent,
}: Adduser) {
  const { postPosition, putPosition } = useContext<IContext>(MyContext);

  const [name, setName] = useState({
    uz: "",
    ru: "",
    en: "",
  });

  function onchange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setName((p) => ({ ...p, [name]: value }));
  }

  function save(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (user?.name?.uz === "") {
      if (postPosition) {
        postPosition({ name });
      }
    } else {
      const _id = user?._id;
      if (putPosition) {
        putPosition({ _id, name });
      }
    }

    setName({
      uz: "",
      ru: "",
      en: "",
    });

    setCurent(null);
    set(false);
  }

  useEffect(() => {
    if (!user) return;
    setName(user.name);
  }, []);

  return (
    <Styledapp>
    <div className="wrapper" onClick={() => set(false)}></div>
      <form onSubmit={save}>
        <h1>{adduser ? "Add position" : "Edit position"}</h1>
        <Input
          placeholder="Name in English * *"
          onChange={onchange}
          name="uz"
          value={name?.uz}
          setName={setName}
        />
        <Input
          placeholder="Name in Russian * *"
          onChange={onchange}
          name="ru"
          value={name?.ru}
          setName={setName}
        />
        <Input
          placeholder="Name in Uzbek *"
          name="en"
          onChange={onchange}
          value={name?.en}
          setName={setName}
        />
        <div className="buton">
          <Botton pe={false} typee="submit">
            Save
          </Botton>
          <Botton
            typee="submit"
            pe={true}
            onclik={() => {
              set(false);
              setCurent([]);
            }}
          >
            Cancel
          </Botton>
        </div>
      </form>
    </Styledapp>
  );
}

const Styledapp = styled.div`
  width: 90%;
  height: 100vh;
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  justify-content: flex-end;
  z-index: 100;
  animation-name: modalOpening;
  animation-duration: 0.5s;

  @keyframes modalOpening {
    0% {
      right: -1000px;
    }
    100% {
      right: 0px;
    }
  }

  .wrapper {
    width: 50%;
    height: 100vh;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 1;
  }

  form {
    padding: 33px 23px;
    background: #ffffff;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-shadow: -3px 4px 4px rgba(24, 24, 24, 0.37);
    overflow-y: auto;

    .buton {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 40px;
      row-gap: 30px;
      flex-wrap: wrap;
    }

    h1 {
      font-family: "Lato";
      font-style: normal;
      font-weight: 700;
      font-size: 22px;
      line-height: 26px;
      font-size: 22px;
      font-weight: 700;
      line-height: 26px;
      letter-spacing: 0em;
      margin-bottom: 39px;
    }
  }

  @media (max-width: 550px) {
    form {
      width: 100%;
    }
  }
`;
