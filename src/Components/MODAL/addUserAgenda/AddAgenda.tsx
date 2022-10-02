import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import { IContext, MyContext } from "../../../context/Context";

import Botton from "../../addUserModal/botom/Botton";
import Input from "../../addUserModal/input/Input";
import Secect from "../../addUserModal/select/select2/Secect";

export interface Field {
  id: number;
  name: string;
}
interface Adduser {
  adduser: boolean;
  set: Function;
  user?: any;
  setCurent: Function;
}
export default function AddAgenda({ adduser, set, user, setCurent }: any) {
  const { postAgenda, usersSpeaker, putAgenda } =
    useContext<IContext>(MyContext);

  const [name, setName] = useState({
    name: {
      uz: "",
      ru: "",
      en: "",
    },
    type: "",
    startTime: "",
    endTime: "",
  });

  const [isOpen, setIsOpen] = useState("");

  function onchange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setName((p) => ({ ...p, [name]: value }));
  }
  function onchangeName(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setName((p: any) => ({
      ...p,
      name: { en: p.name.en, ru: p.name.ru, uz: p.name.uz, [name]: value },
    }));
  }

  function save(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!user) {
      if (postAgenda) {
        postAgenda(name);
      }
    } else {
      if (putAgenda) {
        putAgenda(name);
      }
    }
    setName({
      name: {
        uz: "",
        ru: "",
        en: "",
      },
      type: "",
      startTime: "",
      endTime: "",
    });
    setCurent(null);
    set(false);
  }

  useEffect(() => {
    if (!user) return;
    setName({
      ...user,
      startTime: user.startTime.split(".")[0],
      endTime: user.endTime.split(".")[0],
    });
  }, []);

  const options = [
    {
      id: 0,
      name: "speaker",
    },
    {
      id: 1,
      name: "activity",
    },
  ];

  const [value, setValue] = useState("");

  useEffect(() => {
    usersSpeaker?.data?.forEach((i: any) => {
      if (i._id === user?.speakerId) {
        setValue(i.name.uz);
      }
    });
  }, [name]);

  function fFalse() {
    setIsOpen("On");
    setTimeout(() => {
      set(false)
    },500)
  }

  return (
    <Styledapp className={isOpen}>
      <div
        className="wrapper"
        onClick={() => {
          fFalse();
          setIsOpen("On");
        }}
      ></div>
      <form onSubmit={save}>
        <h1>{adduser ? "Add activity" : "Edit activity"}</h1>
        <Secect
          setName={setName}
          placeholder="type"
          options={options}
          nameValue={user?.type}
          user={user}
        />
        <Input
          placeholder="Name in English *"
          onChange={onchangeName}
          name="en"
          value={name.name.en}
          setName={setName}
        />
        <Input
          placeholder="Name in Russian *"
          onChange={onchangeName}
          name="ru"
          value={name.name.ru}
          setName={setName}
        />
        <Input
          placeholder="Name in Uzbek *"
          name="uz"
          onChange={onchangeName}
          value={name.name.uz}
          setName={setName}
        />
        <Input
          placeholder="Start time *"
          name="startTime"
          onChange={onchange}
          value={name.startTime}
          setName={setName}
          type="datetime-local"
          noClear={true}
        />
        <Input
          placeholder="End time *"
          name="endTime"
          onChange={onchange}
          value={name.endTime}
          setName={setName}
          type="datetime-local"
          noClear={true}
        />
        <Secect
          setName={setName}
          placeholder="Speakers"
          usersDate={usersSpeaker}
          nameValue={value}
          user={user}
          disabled={name.type !== "speaker" ? true : false}
        />
        <div className="buton">
          <Botton
            pe={false}
            typee="submit"
            onclik={() => {
              setValue("");
            }}
          >
            Save
          </Botton>
          <Botton
            typee="submit"
            pe={true}
            onclik={() => {
              setValue("");
              fFalse();
              setCurent(null);
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
  height: 100%;
  display: flex;
  position: fixed;
  top: 0px;
  right: 0px;
  justify-content: flex-end;
  z-index: 100;
  animation-name: modalOpening;
  animation-duration: 0.5s;
  transition: 0.5s;

  &.On {
    right: -1300px;
  }

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
      gap: 36px;
      row-gap: 22px;
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

// let sum = 0;
// for(int i=0; number.lenght; i++) {
//   sum+= number[i];
// }

// ADASHMASAM SHUNAQA !
