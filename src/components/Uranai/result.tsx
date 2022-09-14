import React from "react";
import styled from "styled-components";
import UranaiBtn from "../parts/CommonBtn";

interface Props {
  uranaiFlg: boolean;
  setUranaiFlg: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  selectedNumber: number;
}

const UranaiResult: React.VFC<Props> = ({uranaiFlg, setUranaiFlg, setIsLoading, selectedNumber}) => {
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
  console.log(result[0].item.result)

  return (
    <Container>
      <div className="uranai-result">
        <p>{result[selectedNumber-1].item.result}</p>
        <p>{result[selectedNumber-1].item.resultTxt}</p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background: url(${process.env.PUBLIC_URL}/images/uranai/kc_uranai_result.svg) center center / contain no-repeat;
  height: 100vh;
  position: relative;
`;

export default UranaiResult;
