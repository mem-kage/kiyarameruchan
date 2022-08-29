import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const CommonTxt: React.VFC<Props> = ({children}: Props) => {
  return(
    <Text>{children}</Text>
  )
}

const Text = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #D77824;
  text-align: center;

  @media screen and (max-width: 750px) {
    margin: calc(0.6875rem + ((1vw - 3.75px) * 2.9333)) 0;
    font-size: calc(0.875rem + ((1vw - 3.75px) * 3.7333));
  }
`;

export default CommonTxt;
