import React from "react";

interface Props {
  btnTxt: String;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>> | undefined;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

const CommonTopBtn: React.VFC<Props> = ({btnTxt, setIsLoading, setValue}: Props) => {
  const changeFlg = () => {
    if (setIsLoading !== undefined) {
      setIsLoading(true)
    }

    setValue(0)
  }

  return(
    <li onClick={changeFlg} >{btnTxt}</li>
  )
}

export default CommonTopBtn;
