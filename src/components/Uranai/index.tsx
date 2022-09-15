import React from "react";
import styled from "styled-components";
import Loading from "../Loading";
import UranaiBefore from "./before";
import UranaiResult from "./result";

interface Props {
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

const Uranai: React.VFC<Props> = ({setValue}) => {
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
          <UranaiResult setValue={setValue} uranaiFlg={uranaiFlg} setUranaiFlg={setUranaiFlg} setIsLoading={setIsLoading} selectedNumber={selectedNumber}  />
        }
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

export default Uranai;
