import React from "react";
import styled from "styled-components";

interface Props {
  shindanFlg: boolean;
  setShindanFlg: React.Dispatch<React.SetStateAction<boolean>>;
}

const Shindan: React.VFC<Props> = ({shindanFlg, setShindanFlg}: Props) => {

  const changeFlg = () => {
    setShindanFlg(false)
  }

  return(
    <>
      <button onClick={changeFlg} >qaaaa</button>
    </>
  )
}

export default Shindan;
