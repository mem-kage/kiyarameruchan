import React from "react";

interface Props {
  status: boolean | undefined;
  setStatus: React.Dispatch<React.SetStateAction<boolean>> | undefined;
  btnTxt: String;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>> | undefined;
}

const CommonBtn: React.VFC<Props> = ({status, setStatus, btnTxt, setIsLoading}: Props) => {
  const changeFlg = () => {
    if (setStatus !== undefined) {
      setStatus(!status)
    }

    if (setIsLoading !== undefined) {
      setIsLoading(true)
    }
  }

  return(
    <button className="common-btn" onClick={changeFlg} >{btnTxt}</button>
  )
}

export default CommonBtn;
