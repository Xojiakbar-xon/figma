import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

// Context
import { IContext, MyContext } from "../../../context/Context";

// Components
import Botton from "../../addUserModal/botom/Botton";
import Input from "../../addUserModal/input/Input";
import Secect from "../../addUserModal/select/select2/Secect";

export default function AddTickets({ adduser, set, user, setCurent }: any) {
  // Context imports
  const { postTickets, putTickets } = useContext<IContext>(MyContext);

  const [name, setName] = useState({
    category: "",
    sector: "",
    row: "",
    seat: "",
    price: 1200,
    barcode: "",
  });

  function onchange(e: React.ChangeEvent<HTMLInputElement>) {
    let { name, value }: any = e.target;
    if (name === "price") {
      value = Number(value);
    }
    setName((p) => ({ ...p, [name]: value }));
  }
  console.log(name);

  function save(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!user) {
      if (postTickets) {
        let count = Number(name.price);
        setName((p) => ({ ...p, price: count }));
        postTickets(name);
      }
    } else {
      if (putTickets) {
        setName((p) => ({ ...p, _id: user?._id }));
        putTickets(name);
      }
    }
    setName({
      category: "",
      sector: "",
      row: "",
      seat: "",
      price: 1200,
      barcode: "",
    });
    setCurent(null);
    set(false);
  }

  const options: {}[] = [
    {
      id: 0,
      name: "vip",
    },
    {
      id: 0,
      name: "premium",
    },
    {
      id: 0,
      name: "business",
    },
  ];

  useEffect(() => {
    if (!user?._id) return;
    setName(user);
  }, []);

  return (
    <Styledapp>
      <div className="wrapper" onClick={() => set(false)}></div>
      <form onSubmit={save}>
        <h1>{adduser ? "Add user" : "Edit user"}</h1>
        <Secect
          placeholder="category"
          setName={setName}
          options={options}
          nameValue={user?.category}
          user={user}
        />
        <Input
          placeholder="Sector *"
          onChange={onchange}
          name="sector"
          value={name.sector}
          setName={setName}
        />
        <Input
          placeholder="Row *"
          name="row"
          onChange={onchange}
          value={name.row}
          setName={setName}
        />
        <Input
          placeholder="Seat *"
          name="seat"
          onChange={onchange}
          value={name.seat}
          setName={setName}
        />
        <Input
          placeholder="Narxi *"
          name="price"
          onChange={onchange}
          value={name.price}
          setName={setName}
          type="number"
          noClear
        />
        <Input
          placeholder="Barcode *"
          name="barcode"
          onChange={onchange}
          value={name.barcode}
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
