import { useContext } from "react";
import styled from "styled-components";
import { IContext, MyContext } from "../../../context/Context";
interface IInput {
  children?: string;
  typee?: "button" | "submit";
  pe?: boolean;
  onclik?: any;
}

export default function Botton({ children, typee, pe, onclik }: IInput) {
  const { addLoading } = useContext<IContext>(MyContext);

  return (
    <Styledboot pe={pe} type={typee} disabled={addLoading} onClick={onclik}>
      {children}
    </Styledboot>
  );
}

const Styledboot = styled.button<IInput>`
  border-radius: 8px;
  width: 189px;
  padding: 11px 0;
  border: none;
  background: ${(props) => (props.pe ? " #f6f6f6" : "#4340da")};
  border-radius: 8px;
  color: ${(props) => (props.pe ? "#4340da" : "white")};
  cursor: pointer;

  &:focus {
    outline: none;
  }

  @media (max-width: 463px) {
    width: 100%;
  padding: 14px 0;
  }
`;
