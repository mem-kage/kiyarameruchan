import React from "react";
import styled from "styled-components";

interface Props {
  shindanFlg: boolean;
  setShindanFlg: React.Dispatch<React.SetStateAction<boolean>>;
  btnTxt: String;
}


const ShindanBtn: React.VFC<Props> = ({shindanFlg, setShindanFlg, btnTxt}: Props) => {
  const changeFlg = () => {
    console.log(shindanFlg)
    setShindanFlg(!shindanFlg)
  }

  return(
    <Btn onClick={changeFlg} >{btnTxt}</Btn>
  )
}

const Btn = styled.button`
  width: 80%;
  border: unset;
  background-color: white;
  border-radius: 30px;
  padding: 10px;
  cursor: pointer;
  color: #D77824;
  font-weight: bold;
  font-size: 20px;

  :active {
    background-color: red;
  }

  @media screen and (max-width: 750px) {
    font-size: calc(1rem + ((1vw - 3.75px) * 4.2667));
  }
`


export default ShindanBtn;
