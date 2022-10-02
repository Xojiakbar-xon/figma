import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

// Context
import { IContext, MyContext } from "../../../context/Context";

// Components
import Botton from "../../addUserModal/botom/Botton";
import Input from "../../addUserModal/input/Input";
import Secect from "../../addUserModal/select/select2/Secect";

// Interfaces
export interface Field {
  id: number;
  name: string;
}
interface Adduser {
  adduser: boolean;
  set: Function;
  user?: any;
  setCurent?: any;
}

export default function AddUserModalPosition({
  adduser,
  set,
  user,
  setCurent,
}: Adduser) {
  // Context imports
  const { postUsers, usersPut, userPosit, userField } =
    useContext<IContext>(MyContext);

  const [name, setName] = useState({
    fullName: "",
    phoneNumber: "",
    fieldId: "",
    brand: "",
    employeeCount: 1,
    positionId: "",
  });

  function onchange(e: React.ChangeEvent<HTMLInputElement>) {
    let { name, value }: any = e.target;
    if (name === "employeeCount") {
      value = Number(value);
    }
    setName((p: any) => ({ ...p, [name]: value }));
  }
  function save(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!user?._id) {
      if (postUsers) {
        let count = Number(name.employeeCount);

        setName((p: any) => ({ ...p, employeeCount: count }));
        postUsers(name);
      }
    } else {
      if (usersPut) usersPut(name);
    }
    setName({
      fullName: "",
      phoneNumber: "",
      fieldId: "",
      brand: "",
      employeeCount: 1,
      positionId: "",
    });
    setCurent(null);

    set(false);
  }

  useEffect(() => {
    if (!user?._id) return;
    setName(user);
  }, []);

  const [positValue, setPositValue] = useState("");
  const [fieldValue, setFieldValue] = useState("");
  useEffect(() => {
    userPosit?.data?.forEach((i: any) => {
      if (i._id === user?.positionId) {
        setPositValue(i.name.uz);
      }
    });
    userField?.data?.forEach((i: any) => {
      if (i._id === user?.fieldId) {
        setFieldValue(i.name.uz);
      }
    });
  }, [name]);

  return (
    <Styledapp>
      <div className="wrapper" onClick={() => set(false)}></div>
      <form onSubmit={save}>
        <h1>{adduser ? "Add user" : "Edit user"}</h1>
        <Input
          placeholder="Full name *"
          onChange={onchange}
          name="fullName"
          value={name.fullName}
          setName={setName}
        />
        <Input
          placeholder="Phone number *"
          onChange={onchange}
          name="phoneNumber"
          value={name.phoneNumber}
          setName={setName}
        />
        <Secect
          placeholder="Fields"
          usersDate={userField}
          setName={setName}
          nameValue={fieldValue}
        />
        <Input
          placeholder="Brand"
          name="brand"
          onChange={onchange}
          value={name.brand}
          setName={setName}
        />
        <Input
          placeholder="Employee count"
          name="employeeCount"
          onChange={onchange}
          value={name.employeeCount}
          setName={setName}
          type="number"
          noClear
        />
        <Secect
          placeholder="Positions"
          usersDate={userPosit}
          setName={setName}
          nameValue={positValue}
        />
        <div className="buton">
          <Botton pe={false} typee="submit">
            Save
          </Botton>
          <Botton
            typee="submit"
            pe={true}
            onclik={() => {
              setCurent(null);
              set(false);
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
  top: 0px;
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
    z-index: 5;
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
