import React from "react";
import styled from "styled-components";
import ShindanBefore from "./before";
import ShindanResult from "./result";

const Shindan: React.VFC = () => {
  const [shindanFlg, setShindanFlg] = React.useState(false);

  return (
    <>
      {shindanFlg === false ? (
        <ShindanBefore shindanFlg={shindanFlg} setShindanFlg={setShindanFlg} />
      ) : (
        <ShindanResult shindanFlg={shindanFlg} setShindanFlg={setShindanFlg} />
      )}
    </>
  );
};

export default Shindan;
