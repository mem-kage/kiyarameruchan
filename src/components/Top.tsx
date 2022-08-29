import React, { useEffect } from 'react';
import CommonTxt from './parts/CommonTxt';
import kcTTL from '../assets/images/images/kc_top_ttl.svg'

interface Props {
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

const Top: React.VFC<Props> = ({setValue}) => {

  return(
    <>
      <div className='top-area'>
        <h1 className='top-area__ttl'>
          <img src={kcTTL} alt="きやらめるちゃんTTL" />
        </h1>
        <CommonTxt>きやらめるちゃんとゲームができるよ！<br />したのボタンを選択してね♪</CommonTxt>
        <img
        src={`${process.env.PUBLIC_URL}/kiyarameru.svg`}
        className={`mocchiri top-area__img`}
        alt="きやらめるちゃん"
        />
        <div className='top-area__btn-wrap'>
          <button className='common-btn' onClick={() => setValue(1)}>ポーズの伝授</button>
          <button className='common-btn' onClick={() => setValue(2)}>うらない</button>
        </div>
      </div>
    </>
  )
}

export default Top;
