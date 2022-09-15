import React, { useEffect } from 'react';
import Shindan from './components/Shindan';
import Uranai from './components/Uranai';
import Loading from './components/Loading';
import CommonTxt from './components/parts/CommonTxt';
import Top from './components/Top';

const App: React.VFC = () => {
  const [value, setValue] = React.useState(0);
  const [animationFlg, setAnimationFlg] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  const ChangeEl = () => {
    if (value === 0) {
      return <Top setValue={setValue}></Top>
    } else if(value === 1) {
      return <Shindan setValue={setValue}></Shindan>
    } else {
      return <Uranai setValue={setValue}></Uranai>
    }
  }

  return(
    <>
    { isLoading ? <Loading isLoading={isLoading} setIsLoading={setIsLoading} loadingTxt={"ロード中"} /> :
      <div className='container'>
        <ChangeEl />
      </div>
    }
    </>
  )
}

export default App;
