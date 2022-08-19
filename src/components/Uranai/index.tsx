import React from "react";
import styled from "styled-components";
import Loading from "../Loading";
import UranaiBefore from "./before";
import UranaiResult from "./result";

const Uranai: React.VFC = () => {
  const [uranaiFlg, setUranaiFlg] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [selectedNumber, setSelectedNumber] = React.useState<number>(0);

  return (
    <Container>
      {uranaiFlg === false ? (
        <UranaiBefore uranaiFlg={uranaiFlg} setUranaiFlg={setUranaiFlg} setSelectedNumber={setSelectedNumber} />
      ) : (
        <>
        { isLoading ? <Loading isLoading={isLoading} setIsLoading={setIsLoading} loadingTxt={"占い中める・・・"} /> :
          <UranaiResult uranaiFlg={uranaiFlg} setUranaiFlg={setUranaiFlg} setIsLoading={setIsLoading} selectedNumber={selectedNumber}  />
        }
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 95%;
`;

export default Uranai;
