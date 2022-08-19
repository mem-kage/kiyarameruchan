import React from "react";
import styled from "styled-components";
import Loading from "../Loading";
import ShindanBefore from "./before";
import ShindanResult from "./result";

const Shindan: React.VFC = () => {
  const [shindanFlg, setShindanFlg] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  console.log(isLoading,shindanFlg)

  return (
    <Container>
      {shindanFlg === false ? (
        <ShindanBefore shindanFlg={shindanFlg} setShindanFlg={setShindanFlg} />
      ) : (
        <>
        { isLoading ? <Loading isLoading={isLoading} setIsLoading={setIsLoading} loadingTxt={"診断中める・・・"} /> :
          <ShindanResult shindanFlg={shindanFlg} setShindanFlg={setShindanFlg} setIsLoading={setIsLoading} />
        }
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 95%;
`;

export default Shindan;
