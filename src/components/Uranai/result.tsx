import React from "react";
import styled from "styled-components";
import UranaiBtn from "../parts/CommonBtn";
import UranaiTxtBtn from "../parts/CommonTxtBtn";
import UranaiTopBtn from "../parts/CommonTopBtn";
import CommonModalBtn from "../parts/CommonModal";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

interface Props {
  uranaiFlg: boolean;
  setUranaiFlg: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  selectedNumber: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

const UranaiResult: React.VFC<Props> = ({uranaiFlg, setUranaiFlg, setIsLoading, selectedNumber, setValue}) => {
  const result = [
    {
      "item": {
        "result": "マジでやばい！！",
        "resultTxt": "いいことが起こりすぎて周りから嫉妬されるかも...?"
      }
    },
    {
      "item": {
        "result": "絶好調フィーバー:ピカピカ:",
        "resultTxt": "いいことが起こりすぎてハッピー"
      }
    },
    {
      "item": {
        "result": "絶好調！！",
        "resultTxt": "今日はいつもよりいい日になるめる！自信持って今日も頑張るめる"
      }
    },
    {
      "item": {
        "result": "好調",
        "resultTxt": "何かいいことがあるかも！？"
      }
    },
    {
      "item": {
        "result": "普通",
        "resultTxt": "特に何もない平凡な日になるめる"
      }
    },
    {
      "item": {
        "result": "不調",
        "resultTxt": "なんだか嫌な予感...がするめる。。。甘いものを食べてリフレッシュするめる！"
      }
    },
    {
      "item": {
        "result": "絶不調",
        "resultTxt": "今日は嫌なことがあるめる。周りを注意したほうがいいめる。"
      }
    }
  ]

  return (
    <Container className="uranai-result-wrapper">
      <div className="uranai-result">
        <p>{result[selectedNumber-1].item.result}</p>
        <p>{result[selectedNumber-1].item.resultTxt}</p>
      </div>
      <ul className="flex-items">
        <li>
          <ArrowLeftIcon fontSize="medium" />
          <UranaiTopBtn
            btnTxt={"Topに戻る"}
            setIsLoading={setIsLoading}
            setValue={setValue}
          />
        </li>
        <UranaiTxtBtn
          status={uranaiFlg}
          setStatus={setUranaiFlg}
          btnTxt={"もう一度"}
          setIsLoading={setIsLoading}
        />
      </ul>

      <CommonModalBtn />
    </Container>
  );
};

const Container = styled.div`
  background: url(${process.env.PUBLIC_URL}/images/uranai/kc_uranai_result.svg) center center / contain no-repeat;
  height: 80vh;
  position: relative;
`;

export default UranaiResult;
