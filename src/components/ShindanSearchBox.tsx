import React from "react";
import styled from "styled-components";

interface Props {
  target: string;
  setTarget: React.Dispatch<React.SetStateAction<string>>;
  setShindanFlg: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShindanSearchBox: React.VFC<Props> = ({target, setTarget, setShindanFlg}: Props) => {

  const enterShindanBtn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.target)
    setShindanFlg(true);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTarget(e.target.value);
  }

  return(
    <StyledSearchBox onSubmit={(e) => enterShindanBtn(e)}>
      <input placeholder="search keyword" value={target} onChange={(e) => handleChange(e)} />
      <input type="submit" value="submit" />
    </StyledSearchBox>
  )
}

const StyledSearchBox = styled.form`
  &&& input {
    width: 100%;
    border: unset;
    border-radius: 30px;
    padding: 10px;
  }

  &&& input[type="submit"] {
    margin-top: 20px;
    width: 20%;
    cursor: pointer;
  }

  &&& input[type="submit"] {
    margin-top: 20px;
    width: 20%;
  }

  &&& input[type="submit"]:active {
    background-color: red;
  }

  @media (max-width: 750px) {
    &&& input {
      width: 80%;
    }

    &&& input[type="submit"] {
      width: 150px;
    }
  }
`

export default ShindanSearchBox;
