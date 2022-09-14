import React from "react";
import styled from "styled-components";
import Loading from "../Loading";
import ShindanBefore from "./before";
import ShindanResult from "./result";

interface Props {
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

const Shindan: React.VFC<Props> = ({setValue}) => {
  const [shindanFlg, setShindanFlg] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <Container>
      {shindanFlg === false ? (
        <ShindanBefore shindanFlg={shindanFlg} setShindanFlg={setShindanFlg} />
      ) : (
        <>
        { isLoading ? <Loading isLoading={isLoading} setIsLoading={setIsLoading} loadingTxt={"診断中める・・・"} /> :
          <ShindanResult setValue={setValue} shindanFlg={shindanFlg} setShindanFlg={setShindanFlg} setIsLoading={setIsLoading} />
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
