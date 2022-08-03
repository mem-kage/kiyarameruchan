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
      <button onClick={changeFlg} >もう一度診断</button>
    </>
  )
}

export default Shindan;
